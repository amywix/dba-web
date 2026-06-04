import { Router, type IRouter } from "express";
import { z } from "zod/v4";
import { sendEnquiryEmail, renderFieldsTable } from "../lib/resend";

const EnquirySchema = z
  .object({
    enquiryType: z.enum(["AI Chatbot", "AI Workflow", "General enquiry"]),
    firstName: z.string().min(1).max(100),
    lastName: z.string().min(1).max(100),
    email: z.string().email().max(320),
    phone: z.string().min(1).max(50),
    businessName: z.string().min(1).max(200),
    websiteUrl: z.string().max(500).optional().default(""),
    // AI Chatbot
    channels: z.array(z.string().max(100)).max(20).optional().default([]),
    chatbotGoals: z.array(z.string().max(100)).max(20).optional().default([]),
    enquiryVolume: z.string().max(100).optional().default(""),
    toneOfVoice: z.string().max(100).optional().default(""),
    existingSystems: z.string().max(1000).optional().default(""),
    // AI Workflow
    tasksToAutomate: z.array(z.string().max(100)).max(20).optional().default([]),
    toolsUsed: z.string().max(1000).optional().default(""),
    currentProcess: z.string().max(5000).optional().default(""),
    hoursPerWeek: z.string().max(100).optional().default(""),
    peopleInvolved: z.string().max(100).optional().default(""),
    // General enquiry
    message: z.string().max(5000).optional().default(""),
    // Common
    timeline: z.string().max(100).optional().default(""),
    anythingElse: z.string().max(5000).optional().default(""),
  })
  .superRefine((data, ctx) => {
    if (data.enquiryType === "AI Chatbot") {
      if (data.channels.length === 0)
        ctx.addIssue({ code: "custom", path: ["channels"], message: "Pick at least one" });
      if (data.chatbotGoals.length === 0)
        ctx.addIssue({ code: "custom", path: ["chatbotGoals"], message: "Pick at least one" });
      if (!data.enquiryVolume)
        ctx.addIssue({ code: "custom", path: ["enquiryVolume"], message: "Required" });
      if (!data.toneOfVoice)
        ctx.addIssue({ code: "custom", path: ["toneOfVoice"], message: "Required" });
    }
    if (data.enquiryType === "AI Workflow") {
      if (data.tasksToAutomate.length === 0)
        ctx.addIssue({ code: "custom", path: ["tasksToAutomate"], message: "Pick at least one" });
      if (!data.currentProcess || data.currentProcess.trim().length < 10)
        ctx.addIssue({ code: "custom", path: ["currentProcess"], message: "Required" });
      if (!data.hoursPerWeek)
        ctx.addIssue({ code: "custom", path: ["hoursPerWeek"], message: "Required" });
    }
    if (data.enquiryType === "General enquiry") {
      if (!data.message || data.message.trim().length < 10)
        ctx.addIssue({ code: "custom", path: ["message"], message: "Required" });
    }
  });

const router: IRouter = Router();

router.post("/enquiry", async (req, res) => {
  const parsed = EnquirySchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    return;
  }
  const d = parsed.data;

  const sharedFields: Array<[string, string | string[]]> = [
    ["Enquiry type", d.enquiryType],
    ["First name", d.firstName],
    ["Last name", d.lastName],
    ["Email", d.email],
    ["Phone", d.phone],
    ["Business name", d.businessName],
    ["Website", d.websiteUrl],
  ];

  let typeFields: Array<[string, string | string[]]>;
  if (d.enquiryType === "AI Chatbot") {
    typeFields = [
      ["Where the chatbot should live", d.channels],
      ["What it should do", d.chatbotGoals],
      ["Enquiry volume", d.enquiryVolume],
      ["Tone of voice", d.toneOfVoice],
      ["Existing website / booking system", d.existingSystems],
    ];
  } else if (d.enquiryType === "AI Workflow") {
    typeFields = [
      ["Tasks to automate", d.tasksToAutomate],
      ["Tools / apps used", d.toolsUsed],
      ["Current manual process", d.currentProcess],
      ["Hours spent per week", d.hoursPerWeek],
      ["People involved", d.peopleInvolved],
    ];
  } else {
    typeFields = [["Message", d.message]];
  }

  const commonFields: Array<[string, string | string[]]> = [
    ["Timeline", d.timeline],
    ["Anything else", d.anythingElse],
  ];

  try {
    await sendEnquiryEmail({
      subject: `[Done By Amy] ${d.enquiryType} enquiry: ${d.firstName} ${d.lastName}${d.businessName ? ` (${d.businessName})` : ""}`,
      replyTo: d.email,
      html: `<h2 style="font-family:Arial,sans-serif;">New ${d.enquiryType} enquiry</h2>${renderFieldsTable([
        ...sharedFields,
        ...typeFields,
        ...commonFields,
      ])}`,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Enquiry email send failed");
    res.status(500).json({ error: "Failed to send enquiry. Please try again or email admin@donebyamy.com." });
  }
});

export default router;

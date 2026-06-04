import { Router, type IRouter } from "express";
import { z } from "zod/v4";
import { sendEnquiryEmail, renderFieldsTable } from "../lib/resend";

const OnboardingSchema = z.object({
  plan: z.enum(["standard", "advanced"]),
  businessName: z.string().min(1).max(200),
  contactName: z.string().min(1).max(200),
  email: z.string().email().max(320),
  phone: z.string().min(1).max(50),
  website: z.string().max(500).optional().default(""),
  industry: z.string().max(200).optional().default(""),
  location: z.string().max(200).optional().default(""),
  goals: z.string().min(1).max(5000),
  services: z.array(z.string()).min(1),
  currentTools: z.string().max(2000).optional().default(""),
  leadChannels: z.array(z.string()).min(1),
  bookingSystem: z.string().max(500).optional().default(""),
  brandColours: z.string().max(500).optional().default(""),
  toneOfVoice: z.string().max(500).optional().default(""),
  mustKnow: z.string().max(5000).optional().default(""),
  avoid: z.string().max(5000).optional().default(""),
  websitePlatform: z.string().max(200).optional().default(""),
  pageLocation: z.string().max(500).optional().default(""),
  accessNotes: z.string().max(5000).optional().default(""),
  anythingElse: z.string().max(5000).optional().default(""),
});

const PLAN_LABEL: Record<string, string> = {
  standard: "Standard — $199/mo + $399 setup",
  advanced: "Advanced — $499/mo + $999 setup",
};

const router: IRouter = Router();

router.post("/onboarding", async (req, res) => {
  const parsed = OnboardingSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    return;
  }
  const d = parsed.data;
  try {
    await sendEnquiryEmail({
      subject: `[Done By Amy] New onboarding: ${d.businessName} (${d.plan})`,
      replyTo: d.email,
      html: `<h2 style="font-family:Arial,sans-serif;">New client onboarding</h2>${renderFieldsTable([
        ["Plan", PLAN_LABEL[d.plan] ?? d.plan],
        ["Business name", d.businessName],
        ["Contact name", d.contactName],
        ["Email", d.email],
        ["Phone", d.phone],
        ["Website", d.website],
        ["Industry", d.industry],
        ["Location", d.location],
        ["Main goals", d.goals],
        ["Services wanted", d.services],
        ["Current tools", d.currentTools],
        ["Lead channels", d.leadChannels],
        ["Booking system", d.bookingSystem],
        ["Brand colours", d.brandColours],
        ["Tone of voice", d.toneOfVoice],
        ["Must-know info", d.mustKnow],
        ["Things to avoid", d.avoid],
        ["Website platform", d.websitePlatform],
        ["Where it goes", d.pageLocation],
        ["How they'll give access", d.accessNotes],
        ["Anything else", d.anythingElse],
      ])}`,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Onboarding email send failed");
    res.status(500).json({ error: "Failed to submit. Please try again or email admin@donebyamy.com." });
  }
});

export default router;

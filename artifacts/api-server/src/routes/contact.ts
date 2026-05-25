import { Router, type IRouter } from "express";
import { z } from "zod/v4";
import { sendEnquiryEmail, renderFieldsTable } from "../lib/resend";

const ContactSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(5000),
});

const GetStartedSchema = z.object({
  serviceInterest: z.string().max(200).optional().default(""),
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email().max(320),
  phone: z.string().max(50).optional().default(""),
  websiteUrl: z.string().max(500).optional().default(""),
  businessName: z.string().max(200).optional().default(""),
  currentTools: z.string().max(2000).optional().default(""),
  timeWasters: z.array(z.string()).optional().default([]),
  leadChannels: z.array(z.string()).optional().default([]),
  automationWishlist: z.array(z.string()).optional().default([]),
  anythingElse: z.string().max(5000).optional().default(""),
  hearAboutUs: z.string().max(200).optional().default(""),
});

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    return;
  }
  const data = parsed.data;
  try {
    await sendEnquiryEmail({
      subject: `[Done By Amy] Contact: ${data.subject}`,
      replyTo: data.email,
      html: `<h2 style="font-family:Arial,sans-serif;">New contact enquiry</h2>${renderFieldsTable([
        ["Name", data.name],
        ["Email", data.email],
        ["Subject", data.subject],
        ["Message", data.message],
      ])}`,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Contact email send failed");
    res.status(500).json({ error: "Failed to send enquiry. Please try again or email admin@donebyamy.com." });
  }
});

router.post("/get-started", async (req, res) => {
  const parsed = GetStartedSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form data", details: parsed.error.flatten() });
    return;
  }
  const d = parsed.data;
  try {
    await sendEnquiryEmail({
      subject: `[Done By Amy] Free audit request: ${d.firstName} ${d.lastName}${d.businessName ? ` (${d.businessName})` : ""}`,
      replyTo: d.email,
      html: `<h2 style="font-family:Arial,sans-serif;">New free-audit request</h2>${renderFieldsTable([
        ["Service interest", d.serviceInterest],
        ["First name", d.firstName],
        ["Last name", d.lastName],
        ["Email", d.email],
        ["Phone", d.phone],
        ["Business name", d.businessName],
        ["Website", d.websiteUrl],
        ["Current tools", d.currentTools],
        ["Time wasters", d.timeWasters],
        ["Lead channels", d.leadChannels],
        ["Automation wishlist", d.automationWishlist],
        ["Anything else", d.anythingElse],
        ["How they heard about us", d.hearAboutUs],
      ])}`,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Get-started email send failed");
    res.status(500).json({ error: "Failed to send enquiry. Please try again or email admin@donebyamy.com." });
  }
});

export default router;

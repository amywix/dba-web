import { ReplitConnectors } from "@replit/connectors-sdk";
import { logger } from "./logger";

const connectors = new ReplitConnectors();

const FROM_ADDRESS =
  process.env["RESEND_FROM"] ?? "Done By Amy <onboarding@resend.dev>";
const TO_ADDRESS = process.env["CONTACT_TO_EMAIL"] ?? "admin@donebyamy.com";

export interface SendEmailInput {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEnquiryEmail({
  subject,
  html,
  replyTo,
}: SendEmailInput): Promise<void> {
  const body: Record<string, unknown> = {
    from: FROM_ADDRESS,
    to: [TO_ADDRESS],
    subject,
    html,
  };
  if (replyTo) body["reply_to"] = replyTo;

  const response = await connectors.proxy("resend", "/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    logger.error(
      { status: response.status, body: text },
      "Resend API error",
    );
    throw new Error(`Resend send failed: ${response.status}`);
  }
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderFieldsTable(
  fields: Array<[string, string | string[] | undefined | null]>,
): string {
  const rows = fields
    .filter(([, v]) => v !== undefined && v !== null && v !== "" && !(Array.isArray(v) && v.length === 0))
    .map(([label, value]) => {
      const v = Array.isArray(value) ? value.join(", ") : String(value);
      return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#555;font-weight:600;vertical-align:top;width:200px;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111;white-space:pre-wrap;">${escapeHtml(v)}</td></tr>`;
    })
    .join("");
  return `<table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">${rows}</table>`;
}

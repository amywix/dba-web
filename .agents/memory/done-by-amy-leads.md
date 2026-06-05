---
name: Done By Amy prospecting lists
description: Conventions for building B2B lead/prospect CSVs for the Done By Amy agency
---

# Done By Amy prospecting lists

`exports/done-by-amy-brisbane-chatbot-leads.csv` is the CONSOLIDATED master list (now AU-wide despite the "brisbane" name — Location column carries the real city). 8-col schema: `Company,Website,Location,Vertical,Phone,Email,Pain point,How a chatbot would help their website` — pain point AND chatbot website benefit are now SEPARATE columns (the user asked for both per business). Backed by `.local/state/brisbane/merged.json`; canonical pain/benefit-per-vertical library cached at `.local/state/brisbane/_lib.json` (22 verticals, 2 rotating variants each). The original 235-row source is still `.local/state/brisbane/leads.json`. Other source lists: `exports/done-by-amy-prospects.csv` + `exports/done-by-amy-brisbane-solar.csv` (11-col with "Why Now" → use as pain point) and `attached_assets/chatbot-leads-australia.csv` (email-draft format: parse Company from Subject, Email from Email col, split Body's first paragraph on em-dash into pain/benefit, derive website from email domain skipping generic mailbox domains).

**Merge rules:** dedup by normalized website domain (then email, then company); on a duplicate do a FIELD-LEVEL merge (fill blank phone/email/website/location on the kept richer record) — do NOT drop, or you lose real contacts. Infer Vertical from the COMPANY NAME first, then any label/body text (company-first avoids mislabels like a landscaper tagged "Accounting"). Deriving a website from the business's own email domain is acceptable (it's their domain, not fabricated).

**Rule: contact details must be REAL/verifiable — never fabricate phones or emails.** Leave a field blank rather than invent it. Expect partial email coverage (~45%); many AU SMBs only expose a contact form.

**AU phone validation:** accept `07` (local Brisbane/QLD landline), `04` mobile, `13/1300/1800`. **Blank** geographic `02/03/08` numbers on a Brisbane-targeted list — they are interstate head-office lines or bad scrapes. Format-only regex (`0[2-8]`) is too loose; `05/06/09` are not valid AU area codes.

**Why:** an architect review of the leads file caught a NSW `02` number on a Brisbane childcare and a too-loose phone regex; the user's hard constraint was real data only.

**How to apply:** derive company name from the domain (website column is authoritative), drop national aggregator/marketplace domains (kindicare, openagent, hipages, etc.), and validate the final CSV with a real RFC4180 parser (check exact column count per row, no blank Company/Pain/Benefit, no row missing ALL of phone+email+website, no duplicate website domains).

---
name: Done By Amy prospecting lists
description: Conventions for building B2B lead/prospect CSVs for the Done By Amy agency
---

# Done By Amy prospecting lists

`exports/` holds the agency's B2B prospecting CSVs (e.g. `done-by-amy-brisbane-chatbot-leads.csv`). Structured format: `Company,Website,Location,Vertical,Phone,Email,Why a chatbot would help`. The original `attached_assets/chatbot-leads-australia.csv` is a different, email-draft format — keep it; write new lists as new files.

**Rule: contact details must be REAL/verifiable — never fabricate phones or emails.** Leave a field blank rather than invent it. Expect partial email coverage (~45%); many AU SMBs only expose a contact form.

**AU phone validation:** accept `07` (local Brisbane/QLD landline), `04` mobile, `13/1300/1800`. **Blank** geographic `02/03/08` numbers on a Brisbane-targeted list — they are interstate head-office lines or bad scrapes. Format-only regex (`0[2-8]`) is too loose; `05/06/09` are not valid AU area codes.

**Why:** an architect review of the leads file caught a NSW `02` number on a Brisbane childcare and a too-loose phone regex; the user's hard constraint was real data only.

**How to apply:** derive company name from the domain (website column is authoritative), drop national aggregator/marketplace domains (kindicare, openagent, hipages, etc.), and validate the final CSV with a real RFC4180 parser (check 7 fields/row, no blank company/website, no row missing both phone+email, no duplicate websites).

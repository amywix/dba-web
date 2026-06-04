---
name: Done By Amy form/email pattern
description: How enquiry/contact forms are built and why submits 500 in dev
---

## Form + email convention (not the repo's codegen path)

The site's forms (contact, get-started, enquiry) deliberately do NOT use the OpenAPI/Orval
codegen hooks. They POST via plain `fetch("/api/<route>")` to hand-written Express routes that
validate with `zod/v4` and email the submission through Resend. The OpenAPI spec only documents
`healthz`. **When adding a new form, mirror this plain-fetch + manual-zod-route pattern, not the
generated React Query hooks.**

**Why:** matching the established convention keeps all the marketing forms consistent and avoids
spec churn for simple one-off intake endpoints.

**How to apply:** new form = new page (fetch POST) + new route file in
`artifacts/api-server/src/routes/` registered in `routes/index.ts`, reusing
`sendEnquiryEmail` / `renderFieldsTable` from `lib/resend.ts`. Mirror conditional validation on
BOTH client (react-hook-form `superRefine`) and server (zod `superRefine`) — client-only checks
are bypassable by direct API callers.

## Resend 401 in dev is expected, not a bug

A valid form submit returns HTTP 500 in the dev environment because the Resend connector key is
invalid there (`401 API key is invalid`). All three forms share this. It is an environment
credential condition, not a code defect — it sends fine in production where the Resend connection
is authenticated. Don't chase it as a bug when validation passes but send fails with 500.

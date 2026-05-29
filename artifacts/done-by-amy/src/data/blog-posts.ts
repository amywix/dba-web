export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  excerpt: string;
  content: BlogBlock[];
}

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string };

export const posts: BlogPost[] = [
  {
    slug: "best-ai-automation-tools-australian-small-business-2026",
    title: "The 9 Best AI Automation Tools for Australian Small Businesses (2026)",
    description:
      "The exact AI automation tools we recommend to Australian tradies, clinics and service businesses in 2026 — for accounting, scheduling, AI chat, workflow automation and getting paid faster.",
    keywords:
      "best AI automation tools Australia, small business software 2026, Xero automation, Zapier alternatives Australia, AI chatbot tools, Calendly, QuickBooks Australia, small business tech stack, automation software for tradies",
    date: "2026-05-29",
    readTime: "11 min read",
    category: "Tools & Stack",
    author: "Amy",
    excerpt:
      "There are hundreds of 'AI tools' out there and most are noise. These are the nine we actually set up for Aussie small businesses in 2026 — what each one does, what it costs, and who it's for.",
    content: [
      {
        type: "p",
        text: "Every week someone sends me a link to a new AI tool and asks 'should I be using this?' Ninety percent of the time the answer is no — it's a feature dressed up as a product, or it solves a problem you don't have. But the right stack of tools genuinely changes a small business. The trick is knowing which ones earn their keep.",
      },
      {
        type: "p",
        text: "This is the shortlist I actually recommend to clients in 2026 — tradies, clinics, agents and service businesses across Australia. For each tool I'll tell you what it does, roughly what it costs in AUD, and whether it's worth it for a business your size. A few of the links below are partner links, which means Done By Amy may earn a small commission if you sign up — at no extra cost to you. I only list tools I'd set up for my own clients.",
      },

      { type: "h2", text: "Accounting & invoicing" },

      { type: "h3", text: "1. Xero — the default for Aussie small business" },
      {
        type: "p",
        text: "If you're in Australia and you don't have a strong reason to use something else, [Xero](https://AFFILIATE.LINK/xero) is the accounting platform to build on. It's local, it handles GST and BAS the way the ATO expects, and almost every automation tool integrates with it natively. When we wire up quote-to-invoice flows, Xero is the system the invoice lands in nine times out of ten.",
      },
      {
        type: "p",
        text: "Cost: roughly $35–$75/month depending on the plan. Worth it the moment you're sending more than a handful of invoices a month.",
      },

      { type: "h3", text: "2. QuickBooks — the strong alternative" },
      {
        type: "p",
        text: "If your bookkeeper already lives in [QuickBooks](https://AFFILIATE.LINK/quickbooks), there's no need to switch. It's just as automation-friendly as Xero and the AI-assisted reconciliation has come a long way. Pick based on what your accountant prefers — the worst option is fighting your bookkeeper over software.",
      },

      { type: "h2", text: "Workflow automation — the glue" },

      { type: "h3", text: "3. Zapier — connect everything, fast" },
      {
        type: "p",
        text: "[Zapier](https://AFFILIATE.LINK/zapier) is the easiest way to make your apps talk to each other without code. 'When a form is submitted, add the lead to my CRM and text me' — that's a five-minute Zap. It's the tool I reach for first when a client wants something automated this week, not this quarter.",
      },
      {
        type: "p",
        text: "Cost: free for simple stuff, $30–$90/month once you're running real volume. The time it buys back pays for it many times over.",
      },

      { type: "h3", text: "4. Make — for the more complex stuff" },
      {
        type: "p",
        text: "When a workflow has branches, loops, or needs to parse a messy email, [Make](https://AFFILIATE.LINK/make) gives you more power for less money than Zapier — at the cost of a steeper learning curve. This is what sits behind the remittance-matching automation in our case studies.",
      },

      { type: "h2", text: "AI assistants & chat" },

      { type: "h3", text: "5. ChatGPT — the everyday workhorse" },
      {
        type: "p",
        text: "For drafting quotes, replying to tricky emails, summarising a long thread or writing your social posts, [ChatGPT](https://AFFILIATE.LINK/chatgpt) Plus is the best $30-ish a month most owners can spend. Build a few saved prompts for your common tasks and it becomes a genuine time-saver, not a novelty.",
      },

      { type: "h3", text: "6. Claude — for long documents and nuance" },
      {
        type: "p",
        text: "[Claude](https://AFFILIATE.LINK/claude) is my pick when the job involves long documents — contracts, reports, big email chains — or when tone really matters. Many owners run both and use whichever suits the task. At this price, you don't have to choose just one.",
      },

      { type: "h2", text: "Getting booked & getting paid" },

      { type: "h3", text: "7. Calendly — stop playing phone tag" },
      {
        type: "p",
        text: "[Calendly](https://AFFILIATE.LINK/calendly) lets clients book a time straight into your calendar without the back-and-forth. Pair it with your AI chatbot and an enquiry can turn into a booked appointment at 11pm with zero input from you.",
      },

      { type: "h3", text: "8. Twilio — the SMS engine" },
      {
        type: "p",
        text: "Most missed-call and reminder automations run on [Twilio](https://AFFILIATE.LINK/twilio) under the hood. You won't touch it directly — it's the plumbing — but it's the reason an instant 'sorry I missed you' text can go out the second a call drops. It's the engine behind LeadCatch.",
      },

      { type: "h3", text: "9. HubSpot — when you outgrow the spreadsheet" },
      {
        type: "p",
        text: "Once you've got more leads than a spreadsheet can handle, [HubSpot](https://AFFILIATE.LINK/hubspot) gives you a real CRM with a genuinely usable free tier. It tracks every enquiry, automates follow-ups, and tells you which jobs are about to slip through the cracks.",
      },

      { type: "h2", text: "How to actually choose (don't buy all nine)" },
      {
        type: "p",
        text: "You don't need every tool on this list. Most small businesses do brilliantly with four: an accounting platform, one automation tool, an AI assistant, and a way to get booked. Start there. Add the rest only when a specific bottleneck demands it.",
      },
      { type: "ul", items: [
        "Just starting out: Xero + ChatGPT + Calendly. Three tools, under $100/month, massive leverage.",
        "Drowning in missed calls: add a missed-call SMS system (the LeadCatch approach, built on Twilio).",
        "Buried in back-office admin: add Make or Zapier to connect your accounting, calendar and CRM.",
        "Too many leads to track by hand: add HubSpot and let it chase the follow-ups for you.",
      ]},

      { type: "h2", text: "The honest truth about tools" },
      {
        type: "p",
        text: "Tools don't fix a broken process — they just run it faster. Before you buy anything, get clear on the workflow you actually want. A $30 tool wired into a clear process beats a $300 tool bolted onto chaos every single time.",
      },
      {
        type: "p",
        text: "If you'd rather skip the trial-and-error, that's exactly what we do. Tell us where your week is leaking hours and you'll get a [free automation audit](/get-started) back — a one-page plan naming the specific tools to set up first, with rough costs, so you're not guessing.",
      },
    ],
  },
  {
    slug: "ai-automation-australian-small-business-2026",
    title: "AI Automation for Australian Small Business: The 2026 Playbook",
    description:
      "How Australian small businesses are using AI automation to win back 10+ hours a week — chatbots, missed call systems, workflow automations and what to set up first.",
    keywords:
      "AI automation Australia, small business automation, AI chatbot Australia, missed call automation, workflow automation, LeadCatch, business automation 2026",
    date: "2026-05-21",
    readTime: "8 min read",
    category: "AI Automation",
    author: "Amy",
    excerpt:
      "If you're a tradie, clinic owner, agent or coach drowning in admin, AI automation isn't a future trend — it's the cheapest staff member you'll ever hire. Here's the practical 2026 playbook for Aussie small businesses.",
    content: [
      {
        type: "p",
        text: "Every Australian small business owner I talk to says the same thing: 'I didn't start my business to spend Sundays chasing invoices and replying to enquiries at 10pm.' In 2026, you don't have to. AI automation has quietly moved from a Silicon Valley novelty to something a sole-trader sparkie in Strathpine can switch on by Tuesday.",
      },
      {
        type: "p",
        text: "This is the practical playbook I use with clients — what to automate first, what to leave alone, and the specific systems that pay for themselves inside a week.",
      },

      { type: "h2", text: "Why AI automation finally makes sense for small business" },
      {
        type: "p",
        text: "Three things changed at once. AI got good enough to actually hold a conversation. The tooling got cheap (we're talking $50–$200 a month, not $50k builds). And small businesses got pushed to the wall by rising costs and a tight labour market. The result: automation that used to be enterprise-only is now sitting on the iPhone of a lawn-mowing crew in Mackay.",
      },
      {
        type: "p",
        text: "If you can describe a repeatable task in plain English — 'when a job is marked complete, create the invoice in QuickBooks and email it to the client' — there's a 90% chance it can be automated this month.",
      },

      { type: "h2", text: "The 5 automations every Aussie small business should set up first" },

      { type: "h3", text: "1. Missed call SMS automation" },
      {
        type: "p",
        text: "The single highest-ROI automation for any business that takes phone enquiries. When a call goes unanswered, an instant SMS goes out: 'Hey, sorry I missed you — what's the job and where are you based?' Most tradies recover two to three lost jobs a week from this alone. That's the system behind LeadCatch.",
      },

      { type: "h3", text: "2. AI chatbot for your website and socials" },
      {
        type: "p",
        text: "A trained AI chatbot handles after-hours enquiries, books appointments straight into your calendar, answers FAQs, and qualifies leads before they hit your inbox. The good ones reply in your tone of voice, know your services and pricing, and hand off cleanly to a human when they should.",
      },

      { type: "h3", text: "3. Quote-to-invoice workflow automation" },
      {
        type: "p",
        text: "When you mark a quote as accepted, the automation creates the invoice in Xero or QuickBooks, sends it to the right billing email, schedules the job in your calendar, and adds the client to your CRM. What used to be 20 minutes of admin per job becomes zero.",
      },

      { type: "h3", text: "4. Payment reconciliation & remittance matching" },
      {
        type: "p",
        text: "Remittance advice arrives by email, often covering 5–10 invoices at once. An automation reads the email, extracts the invoice numbers and amounts, matches them in your accounting software, and marks them as paid. No more weekend admin sessions.",
      },

      { type: "h3", text: "5. Review and follow-up automation" },
      {
        type: "p",
        text: "Two days after a job, an SMS goes out asking for a Google review with a one-tap link. Unpaid invoices trigger polite reminders on day 14, day 21 and day 28. Cold leads get a 'just checking in' email at 7 and 30 days. All of it happens without you.",
      },

      { type: "h2", text: "Real example: The Yard Yakka Boys" },
      {
        type: "p",
        text: "Lucas runs a lawn care and NDIS maintenance business in Mackay. Before automation, he was losing half a day every week to admin — invoicing, NDIS portal uploads, chasing payments, reconciling remittance. We built him a custom job-management app and wired up the entire back office.",
      },
      {
        type: "p",
        text: "Now when a job is marked complete in the app, the invoice auto-generates in QuickBooks and goes to the right billing email. If the participant is agency-managed, the NDIS spreadsheet updates itself. Unpaid invoices get automatic reminders. Remittance emails get read, parsed, and matched as paid. Lucas got his Saturdays back.",
      },
      {
        type: "quote",
        text: "What used to take me half a day every week now just happens. Invoices go out, the NDIS sheet fills itself, and I can actually see what's been paid without digging through emails.",
        cite: "Lucas, The Yard Yakka Boys — Mackay, QLD",
      },

      { type: "h2", text: "What you should NOT automate (yet)" },
      {
        type: "p",
        text: "Automation is a force multiplier — which means it multiplies bad processes too. Don't automate anything you haven't done manually a few times. Don't automate the emotional work: the apology call, the tricky negotiation, the personal thank-you to your best client. And don't automate the parts of your business that are actually your competitive advantage.",
      },
      { type: "ul", items: [
        "Personalised sales conversations with high-value clients",
        "Complex problem-solving where the answer changes every time",
        "Anything legally requiring human sign-off",
        "Onboarding the first 5 customers of any new service — you're still learning what works",
      ]},

      { type: "h2", text: "How much does AI automation cost in Australia?" },
      {
        type: "p",
        text: "Most small business automations sit between $99 and $500 per month all-in (tooling + AI usage), with a one-off setup. A missed call SMS system runs about $99/month. A trained AI chatbot is usually $149–$249/month. A custom workflow connecting your existing tools (Xero, Google Calendar, your CRM) is typically $199–$499 setup plus a small monthly fee for the automation runtime.",
      },
      {
        type: "p",
        text: "Compared to even one part-time admin role at $25/hour for 10 hours a week ($1,000/month), a full automation stack pays for itself two or three times over — and it works at 2am on a Sunday.",
      },

      { type: "h2", text: "Where to start: the 30-minute audit" },
      {
        type: "p",
        text: "Pick a Tuesday morning. Write down every task you do between 7am and 12pm. Mark anything that is: (a) repeatable, (b) doesn't need your judgement, and (c) you've done more than 10 times. That list is your automation roadmap. Start with the one that's costing you the most hours and ship it before you build anything else.",
      },
      {
        type: "p",
        text: "If you want a second pair of eyes on it, that's what the free automation audit is for. Send through your bottlenecks and you'll get a one-page plan back, with specific systems and rough costs, within a couple of days.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

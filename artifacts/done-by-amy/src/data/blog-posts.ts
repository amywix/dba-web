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
    slug: "ai-automation-australian-small-business-2026",
    title: "AI Automation for Australian Small Business: The 2026 Playbook",
    description:
      "How Australian small businesses are using AI automation to win back 10+ hours a week — chatbots, missed call systems, workflow automations and what to set up first.",
    keywords:
      "AI automation Australia, small business automation, AI chatbot Australia, missed call automation, workflow automation, TradieCatch, business automation 2026",
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
        text: "The single highest-ROI automation for any business that takes phone enquiries. When a call goes unanswered, an instant SMS goes out: 'Hey, sorry I missed you — what's the job and where are you based?' Most tradies recover two to three lost jobs a week from this alone. That's the system behind TradieCatch.",
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

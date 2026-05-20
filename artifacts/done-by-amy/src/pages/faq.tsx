import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import logoMark from "@assets/ChatGPT_Image_May_14,_2026,_04_49_39_PM_-_Copy_1779201943316.png";
import daLogoWordmark from "@assets/da_logo_1779201943317.png";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What exactly does Done By Amy do?",
        a: "Done By Amy builds AI-powered automation systems for small businesses across Australia. This includes AI chatbots that handle customer enquiries 24/7, TradieCatch (a missed call SMS system for tradies), AutoDial (an AI outbound calling agent), workflow automations that connect your apps, and conversion-focused website design. Everything is done for you — no technical knowledge required.",
      },
      {
        q: "Do I need to be tech-savvy to use your services?",
        a: "Not at all. That's the whole point. Done By Amy handles every technical aspect of the setup, configuration, and integration. You'll be handed a fully working system with plain-English instructions. Most clients are up and running within 48 hours.",
      },
      {
        q: "Do you work with businesses outside of one city?",
        a: "Yes — Done By Amy is Australia-based and works with businesses nationally, including Sydney, Melbourne, Brisbane, Perth, Adelaide, and regional areas. All services are delivered remotely.",
      },
      {
        q: "How quickly can I get set up?",
        a: "Most systems are set up within 48 hours of your intake form being submitted. Complex multi-system builds (like the Done For You Suite) typically take 3–5 business days.",
      },
    ],
  },
  {
    category: "TradieCatch",
    items: [
      {
        q: "What is TradieCatch?",
        a: "TradieCatch is a mobile web app built specifically for tradies and contractors. When you miss a call while you're on the tools, TradieCatch automatically sends an instant SMS reply to the caller — capturing their name, number, and job details so you never lose a lead. No app download required.",
      },
      {
        q: "How does TradieCatch know when I miss a call?",
        a: "TradieCatch integrates with your phone number. When a call goes unanswered (after a set number of rings), it automatically triggers an SMS to the caller. The whole process happens in seconds — the lead hears back from you before they've even hung up.",
      },
      {
        q: "Can I customise the SMS message TradieCatch sends?",
        a: "Yes. Your auto-reply SMS is fully customised to match your business name, tone, and services. You can also set up follow-up sequences and capture specific job information from the lead.",
      },
      {
        q: "Is TradieCatch only for tradies?",
        a: "TradieCatch was built with tradies in mind, but it works for any business that takes phone enquiries and can't always answer — including real estate agents, clinics, coaches, and hospitality businesses.",
      },
      {
        q: "How much does TradieCatch cost?",
        a: "TradieCatch is $99/month. Most tradies recover that cost from their very first recaptured job lead — typically within the first week.",
      },
    ],
  },
  {
    category: "AutoDial",
    items: [
      {
        q: "What is AutoDial?",
        a: "AutoDial is an AI telemarketing agent that makes outbound calls on your behalf, sounding just like a real person. It automatically dials your leads, starts natural conversations, handles objections, qualifies prospects, and books appointments directly into your calendar — 24/7 without breaks.",
      },
      {
        q: "Will my leads know they're talking to an AI?",
        a: "AutoDial is designed to sound natural and conversational. Disclosure requirements vary by jurisdiction — Done By Amy will advise you on best practice for your specific use case and location.",
      },
      {
        q: "What kinds of businesses is AutoDial suited for?",
        a: "AutoDial works well for any business that needs to follow up leads at scale — real estate agents, mortgage brokers, gyms, clinics, coaches, service businesses, and more. If you have a list of leads and not enough time to call them all, AutoDial is built for you.",
      },
      {
        q: "How much does AutoDial cost?",
        a: "AutoDial starts from $99/month, with pricing based on call volume. Contact Done By Amy for a custom quote based on your expected usage.",
      },
    ],
  },
  {
    category: "AI Chatbots & Automations",
    items: [
      {
        q: "What can an AI chatbot do for my business?",
        a: "An AI chatbot can handle customer enquiries 24/7, capture lead details, answer FAQs, take bookings, provide quotes, and escalate complex issues to you — all without you lifting a finger. It responds instantly, every time, even at 2am.",
      },
      {
        q: "Which platforms can the chatbot be placed on?",
        a: "Done By Amy can deploy chatbots on your website, Facebook Messenger, Instagram DMs, WhatsApp, and other platforms. We'll recommend the best fit based on where your customers already reach out.",
      },
      {
        q: "What apps can you connect through workflow automation?",
        a: "Most popular business tools — including Xero, MYOB, QuickBooks, ServiceM8, HubSpot, Salesforce, Mailchimp, Google Workspace, Microsoft 365, Calendly, Stripe, and hundreds more. If it has an API, it can be connected.",
      },
      {
        q: "Can you automate my follow-up emails and SMS messages?",
        a: "Yes. Automated follow-up sequences are one of the most popular workflows Done By Amy builds. After a lead enquires, a quote is sent, or an appointment is booked, your system can automatically send timed follow-ups until the job is won.",
      },
    ],
  },
  {
    category: "Pricing & Process",
    items: [
      {
        q: "How much does AI automation cost for a small business?",
        a: "Done By Amy's services start from $297 for the AI Automation Starter Pack (one-off setup), $997 for the Done For You Suite, $99/month for TradieCatch, and from $97/month for ongoing management plans. Every system is custom-scoped, so fill out the intake form for an accurate quote.",
      },
      {
        q: "Is there a contract or lock-in period?",
        a: "Monthly subscriptions like TradieCatch and AutoDial are month-to-month with no lock-in. One-off setup packages are paid once with no ongoing obligation unless you choose a management plan.",
      },
      {
        q: "What happens after I fill out the intake form?",
        a: "Amy personally reviews every submission and reaches out within 1 business day with tailored AI recommendations for your business. There's no hard sell — just a genuine conversation about what would actually help you.",
      },
      {
        q: "Do you offer ongoing support after setup?",
        a: "Yes. Done By Amy offers monthly management plans from $97/month that cover ongoing support, updates, optimisations, and tweaks as your business evolves.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        data-testid={`faq-toggle-${q.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
      >
        <span className="font-semibold text-white text-sm md:text-base leading-snug">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 py-5 text-muted-foreground leading-relaxed border-t border-white/5 text-sm md:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  useSEO({
    title: "FAQ | Done By Amy | AI Automation, TradieCatch & AutoDial Questions Answered",
    description: "Frequently asked questions about Done By Amy's AI automation services, TradieCatch missed call system, AutoDial AI calling agent, chatbots, workflow automations, and pricing for Australian small businesses.",
    keywords: "Done By Amy FAQ, TradieCatch questions, AutoDial FAQ, AI automation questions Australia, small business automation FAQ, how does TradieCatch work, AI chatbot FAQ Australia, automation pricing Australia",
    canonical: "https://www.donebyamy.com/faq",
  });

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const displayed = activeCategory
    ? faqs.filter((f) => f.category === activeCategory)
    : faqs;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Nav */}
      <Navbar />

      <div className="pt-36 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-primary/30 text-primary text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-5 tracking-tight">
              Got questions?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                We've got answers.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about AI automation, TradieCatch, AutoDial, and working with Done By Amy.
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <button
              data-testid="faq-filter-all"
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${
                activeCategory === null
                  ? "bg-primary text-white border-primary shadow-[0_0_16px_rgba(168,85,247,0.4)]"
                  : "bg-white/5 text-muted-foreground border-white/10 hover:border-primary/40 hover:text-white"
              }`}
            >
              All
            </button>
            {faqs.map((f) => (
              <button
                key={f.category}
                data-testid={`faq-filter-${f.category.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(f.category === activeCategory ? null : f.category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${
                  activeCategory === f.category
                    ? "bg-primary text-white border-primary shadow-[0_0_16px_rgba(168,85,247,0.4)]"
                    : "bg-white/5 text-muted-foreground border-white/10 hover:border-primary/40 hover:text-white"
                }`}
              >
                {f.category}
              </button>
            ))}
          </motion.div>

          {/* FAQ items */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-10"
          >
            {displayed.map((section) => (
              <div key={section.category}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 px-1">
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <FAQItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Still got questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-20 text-center bg-white/[0.03] border border-primary/20 rounded-3xl p-10"
          >
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Still have questions?</h2>
            <p className="text-muted-foreground mb-7 max-w-md mx-auto">
              Amy personally reads every message and reply within 1 business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button data-testid="faq-contact-cta" variant="outline" size="lg" className="rounded-full border-white/20 hover:bg-white/5 text-white">
                  Send a Message
                </Button>
              </Link>
              <Link href="/get-started">
                <Button data-testid="faq-getstarted-cta" size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-[0_0_24px_rgba(168,85,247,0.4)]">
                  Get Your Free Audit <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-background py-10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="Done By Amy" className="w-7 h-7 object-contain grayscale opacity-60" />
            <span className="font-bold text-white">Done By Amy</span>
          </div>
          <p>Australia-based, working with businesses nationally.</p>
          <p>&copy; {new Date().getFullYear()} Done By Amy. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

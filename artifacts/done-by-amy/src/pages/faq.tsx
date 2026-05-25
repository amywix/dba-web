import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ChevronDown, HelpCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";

const faqs = [
  {
    category: "General",
    items: [
      { q: "What exactly does Done By Amy do?", a: "We build AI-powered automation systems for small businesses across Australia. This includes AI chatbots, LeadCatch missed call SMS systems, AutoDial AI calling agents, and custom workflow automations." },
      { q: "Do I need to be tech-savvy?", a: "Not at all. We handle every technical aspect of the setup, configuration, and integration. You get handed a fully working system with plain-English instructions." },
      { q: "How quickly can I get set up?", a: "Most standalone systems are set up within 48 hours of your intake form being submitted. Complex multi-system builds take 3–5 business days." },
    ],
  },
  {
    category: "LeadCatch",
    items: [
      { q: "What is LeadCatch?", a: "A mobile web app for tradies that instantly sends a custom SMS reply to every missed call, capturing lead details before they call someone else." },
      { q: "How much does LeadCatch cost?", a: "LeadCatch is $99/month flat. There are no lock-in contracts, and most businesses recover the cost from their first captured job." },
    ],
  },
  {
    category: "AutoDial",
    items: [
      { q: "What is AutoDial?", a: "An AI telemarketing agent that makes outbound calls on your behalf. It dials leads, handles objections naturally, and books appointments into your calendar." },
      { q: "How much does it cost?", a: "AutoDial starts from $99/month based on call volume." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/[0.06] rounded-2xl overflow-hidden bg-white/[0.01]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/[0.03] transition-colors">
        <span className="font-bold text-white text-base md:text-lg">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} className="shrink-0 text-white/50"><ChevronDown className="w-5 h-5" /></motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm md:text-base border-t border-white/[0.04] pt-4">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function FAQ() {
  useSEO({
    title: "FAQ | Done By Amy",
    description: "Answers to common questions about our AI automation systems, pricing, and setups.",
    canonical: "https://www.donebyamy.com/faq",
  });

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const displayed = activeCategory ? faqs.filter((f) => f.category === activeCategory) : faqs;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <div className="flex-1 pt-32 pb-24 px-6 relative">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Questions? Answered.</h1>
            <p className="text-lg text-muted-foreground">Everything you need to know about working with us.</p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={{...fadeIn, visible: {...fadeIn.visible, transition: {delay: 0.1}}}} className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!activeCategory ? "bg-white text-black shadow-lg" : "bg-white/[0.03] text-white/60 hover:bg-white/[0.08]"}`}
            >
              All
            </button>
            {faqs.map((f) => (
              <button
                key={f.category} onClick={() => setActiveCategory(f.category === activeCategory ? null : f.category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === f.category ? "bg-white text-black shadow-lg" : "bg-white/[0.03] text-white/60 hover:bg-white/[0.08]"}`}
              >
                {f.category}
              </button>
            ))}
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={{...fadeIn, visible: {...fadeIn.visible, transition: {delay: 0.2}}}} className="space-y-12">
            {displayed.map((section) => (
              <div key={section.category}>
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-5 px-2">{section.category}</h2>
                <div className="space-y-4">
                  {section.items.map((item) => <FAQItem key={item.q} q={item.q} a={item.a} />)}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-20 p-10 text-center bg-white/[0.02] border border-white/[0.06] rounded-[32px]">
            <h2 className="text-2xl font-black text-white mb-3 tracking-tight">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">We're happy to chat through your specific needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started"><Button className="h-12 px-8 rounded-full bg-white text-black font-bold">Start Free Audit</Button></Link>
              <Link href="/contact"><Button variant="outline" className="h-12 px-8 rounded-full border-white/10 hover:bg-white/5 text-white">Contact Us</Button></Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

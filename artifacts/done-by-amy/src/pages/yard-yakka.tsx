import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, ClipboardCheck, FileText, Database, Bell, Wallet, CheckCircle2 } from "lucide-react";

import yardYakkaApp from "../assets/yard_yakka_app_nobg.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 text-xs font-bold uppercase tracking-widest mb-8">
      {children}
    </div>
  );
}

const workflow = [
  { icon: ClipboardCheck, step: "01", title: "Job booked", desc: "A new job comes in through the app or the office. Team and time slot assigned instantly — no double-handling." },
  { icon: CheckCircle2, step: "02", title: "Job marked complete", desc: "On-site, the crew taps complete in the Yard Yakka app. That single tap triggers everything downstream.", highlight: false },
  { icon: FileText, step: "03", title: "QuickBooks invoice fires", desc: "The invoice generates itself in QuickBooks with the right line items, customer details and tax — sent automatically." },
  { icon: Database, step: "04", title: "NDIS spreadsheet updates", desc: "For NDIS jobs, the master tracking sheet updates in real time with all the right reporting data.", highlight: true },
  { icon: Bell, step: "05", title: "Unpaid reminders go out", desc: "Polite, branded SMS and email follow-ups chase late payments on a custom cadence — no awkward phone calls." },
  { icon: Wallet, step: "06", title: "Remittance reconciled", desc: "When payment lands, the system marks it paid, reconciles the books and updates the NDIS sheet — Smart Match makes it bulletproof.", highlight: true },
];

export default function YardYakka() {
  useSEO({
    title: "Case Study: The Yard Yakka Boys | Done By Amy",
    description: "How Done By Amy built a custom mobile app and 6-step automation workflow that gave Lucas back half his week — covering invoicing, NDIS reporting and remittance reconciliation.",
    keywords: "Yard Yakka, case study, NDIS automation, lawn care, QuickBooks automation, Australia",
    canonical: "https://donebyamy.com/case-studies/yard-yakka",
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              className="lg:col-span-7 space-y-6"
            >
              <motion.div variants={fadeUp}>
                <SectionBadge>Case Study</SectionBadge>
                <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white mb-6">
                  The Yard Yakka Boys.
                </h1>
                <p className="text-muted-foreground text-lg mb-2">Lawn care & NDIS maintenance · Mackay, QLD</p>
                <p className="text-2xl md:text-3xl font-bold text-white mt-8 leading-snug">
                  From admin chaos to total clarity — half a week back, every week.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center lg:justify-end relative"
            >
              <div className="relative w-full max-w-[300px]">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-90" />
                <img src={yardYakkaApp} alt="Yard Yakka App" className="relative z-10 w-full object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-14 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="space-y-6">
            <motion.div variants={fadeUp}><SectionBadge>The Problem</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
              The work was flowing in. The back-office was choking the business.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              Lucas was losing half his week to admin: generating invoices, uploading reports to NDIS portals, and chasing unpaid bills one phone call at a time. Every Sunday disappeared into a laptop. Every late payment meant another awkward conversation. The bigger the business got, the worse the squeeze became.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* THE BUILD */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
            <motion.div variants={fadeUp} className="flex justify-center"><SectionBadge>The Build</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              A bespoke app + a 6-step workflow that runs itself.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
              We built Yard Yakka their own mobile app and wired up the automation backbone behind it. One tap on-site now triggers everything downstream.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {workflow.map((w, i) => (
              <motion.div
                variants={fadeUp} key={i}
                className={`p-8 rounded-3xl border transition-all duration-500 ${
                  w.highlight
                    ? "bg-primary/[0.06] border-primary/30 hover:border-primary/50"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-primary/30 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`text-xs font-bold tracking-[0.2em] ${w.highlight ? "text-primary" : "text-muted-foreground"}`}>{w.step}</div>
                  {w.highlight && (
                    <div className="text-[10px] font-bold tracking-widest text-primary px-2 py-0.5 rounded-full bg-primary/15 border border-primary/30">
                      {i === 3 ? "NDIS" : "SMART MATCH"}
                    </div>
                  )}
                </div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  w.highlight ? "bg-primary/20 border border-primary/40 text-primary" : "bg-white/[0.04] border border-white/10 text-white"
                }`}>
                  <w.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RESULTS + QUOTE */}
      <section className="py-16 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp}>
              <SectionBadge>The Result</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-10">
                Half a week back. Zero invoices missed. Cash flow on autopilot.
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: "½", label: "week per week given back" },
                  { stat: "0", label: "invoices forgotten since launch" },
                  { stat: "100%", label: "NDIS reporting auto-tracked" },
                  { stat: "24/7", label: "payment reconciliation" },
                ].map((m, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tight">{m.stat}</div>
                    <div className="text-muted-foreground text-sm leading-snug">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-2xl pointer-events-none" />
              <blockquote className="relative p-10 rounded-[32px] bg-white/[0.03] border border-white/[0.08]">
                <p className="text-2xl md:text-3xl font-bold text-white leading-tight mb-8">
                  "What used to take me half a day every week now just happens. Invoices go out, the NDIS sheet fills itself, and I can actually see what's been paid without digging through emails."
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-black">
                    L
                  </div>
                  <div>
                    <div className="text-white font-bold">Lucas</div>
                    <div className="text-muted-foreground text-sm">Owner, The Yard Yakka Boys</div>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Want a system that runs your business while you run the work?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Every Done By Amy build starts the same way: a free audit of where your time is actually going. No jargon, no obligation.
            </p>
            <Link href="/get-started">
              <Button className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-white/90 font-black shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                Get Your Free Audit <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PhoneCall, MessageSquare, Clock, ShieldCheck, ChevronRight } from "lucide-react";

import lcPhone from "../assets/leadcatch_phone_nobg.webp";

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

export default function LeadCatch() {
  useSEO({
    title: "LeadCatch — Never miss a job again | Done By Amy",
    description: "LeadCatch is the $99/mo missed-call SMS auto-responder built for Australian tradies. Capture every lead, even when you can't pick up.",
    keywords: "LeadCatch, missed call SMS, tradie automation, Australia, lead capture",
    canonical: "https://donebyamy.com/leadcatch",
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="pt-24 pb-14 sm:pt-32 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-1/3 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeUp}>
                <SectionBadge>Flagship Product · $99/mo</SectionBadge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white mb-6">
                  Never lose a job to a missed call again.
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  When you're on the tools, you can't always pick up. LeadCatch instantly fires a custom SMS back to every missed caller — capturing the lead before they ring your competitor.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/get-started?service=LeadCatch">
                  <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-white/90 font-bold w-full sm:w-auto">
                    Get LeadCatch — $99/mo
                  </Button>
                </Link>
                <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 hover:bg-white/5 hover:border-white/20 w-full sm:w-auto text-white">
                  SMS Demo: 0485 050 788
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center lg:justify-end relative"
            >
              <div className="relative w-full max-w-[440px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[40px] blur-2xl transform rotate-6 scale-95" />
                <img src={lcPhone} alt="LeadCatch Interface" decoding="async" className="relative z-10 w-full object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center mb-16">
            <motion.div variants={fadeUp} className="flex justify-center"><SectionBadge>How It Works</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Set it up once. Win jobs forever.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: PhoneCall, step: "01", title: "Missed call comes in", desc: "A customer rings while you're on the tools. Roof, ute, ladder — doesn't matter. The phone keeps ringing." },
              { icon: MessageSquare, step: "02", title: "Instant SMS fires back", desc: "Within seconds, your custom auto-reply lands in their pocket. Friendly, on-brand, and asking the right questions." },
              { icon: CheckCircle2, step: "03", title: "Lead books itself", desc: "They text back with the job details. You reply when you're off the tools. The competitor never gets the chance." },
            ].map((s, i) => (
              <motion.div variants={fadeUp} key={i} className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 transition-all duration-500">
                <div className="text-xs font-bold tracking-[0.2em] text-primary mb-6">{s.step}</div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeUp}>
              <SectionBadge>What You Get</SectionBadge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
                Everything in. No add-ons. No surprises.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                One flat price. Custom-configured for your business. Live the same week you sign up.
              </p>
            </motion.div>

            <motion.ul variants={stagger} className="space-y-5">
              {[
                "Custom SMS auto-reply written in your voice",
                "Works on any Australian mobile or landline number",
                "Zero apps to download — works with your existing phone",
                "Includes setup, configuration, and ongoing tweaks",
                "Capture job details while you keep working",
                "Pays for itself the first time you would have missed a job",
              ].map((item, i) => (
                <motion.li variants={fadeUp} key={i} className="flex items-start gap-4 text-white/80">
                  <div className="mt-1 bg-primary/20 p-1 rounded-full"><CheckCircle2 className="text-primary w-4 h-4" /></div>
                  <span className="leading-snug">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* PRICING CALLOUT */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="p-6 sm:p-10 md:p-14 rounded-[40px] bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/30 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[40px] blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <SectionBadge>Simple Pricing</SectionBadge>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight">$99</span>
                <span className="text-xl text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mb-10 max-w-md mx-auto">
                Plus a one-time setup. Cancel any time. Save one job and it's already paid for itself.
              </p>
              <Link href="/get-started?service=LeadCatch">
                <Button className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg rounded-full bg-white text-black hover:bg-white/90 font-black shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                  Get LeadCatch <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-12 sm:py-14 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: Clock, label: "Live within 48 hours of signup" },
            { icon: ShieldCheck, label: "Australian-built. Australian-supported." },
            { icon: PhoneCall, label: "Works with your existing number" },
          ].map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-primary">
                <t.icon className="w-5 h-5" />
              </div>
              <p className="text-white/80 text-sm font-medium">{t.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

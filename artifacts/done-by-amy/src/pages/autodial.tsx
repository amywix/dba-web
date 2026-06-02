import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PhoneOutgoing, Mic, CalendarCheck, TrendingUp, ChevronRight } from "lucide-react";

import autoDialScreen from "../assets/autodial_nobg.webp";

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

export default function AutoDial() {
  useSEO({
    title: "AutoDial — Your tireless AI calling agent | Done By Amy",
    description: "AutoDial is the AI voice agent that sounds human, works 24/7, qualifies leads, handles objections and books appointments directly into your calendar.",
    keywords: "AutoDial, AI dialler, AI calling, voice agent, outbound calling, automation Australia",
    canonical: "https://www.donebyamy.com/autodial",
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="pt-24 pb-14 sm:pt-32 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute left-0 top-1/3 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1 flex justify-center lg:justify-start relative"
            >
              <div className="relative w-full max-w-[480px]">
                <div className="absolute inset-0 bg-primary/15 rounded-full blur-3xl scale-75" />
                <img src={autoDialScreen} alt="AutoDial Dashboard" decoding="async" className="relative z-10 w-full object-contain drop-shadow-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              className="order-1 lg:order-2 space-y-8"
            >
              <motion.div variants={fadeUp}>
                <SectionBadge>AI Outbound Calling</SectionBadge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white mb-6">
                  AutoDial. Your tireless telemarketing agent.
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  An AI voice agent that sounds human, works 24/7, handles objections, qualifies leads and books appointments straight into your calendar. Scale your outreach instantly — no headcount required.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/get-started?service=AutoDial">
                  <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold w-full sm:w-auto">
                    Deploy AutoDial
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 hover:bg-white/5 hover:border-white/20 w-full sm:w-auto text-white">
                    Talk to Amy
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-3xl mb-16">
            <motion.div variants={fadeUp}><SectionBadge>Capabilities</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              The salesperson that never sleeps, never tires, never quits.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { icon: Mic, title: "Human-like voice", desc: "Natural pauses, intonations and instant replies. Most leads don't realise they're talking to AI." },
              { icon: CheckCircle2, title: "Smart qualifying", desc: "Filters tyre-kickers and surfaces the real buyers — your time only goes to people ready to book." },
              { icon: CalendarCheck, title: "Direct booking", desc: "Integrates with Calendly and your existing calendar to drop appointments straight in." },
              { icon: TrendingUp, title: "Endless scale", desc: "Make 10 calls or 10,000 simultaneously. Outreach volume stops being limited by headcount." },
            ].map((c, i) => (
              <motion.div variants={fadeUp} key={i} className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="text-center max-w-3xl mx-auto mb-16">
            <motion.div variants={fadeUp} className="flex justify-center"><SectionBadge>Where It Works Best</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Built for businesses that live on the phone.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Real estate", desc: "Re-engage cold listings, book appraisals, qualify buyer enquiries 24/7." },
              { title: "Trades & services", desc: "Follow up on quotes, reactivate past customers, fill gaps in the schedule." },
              { title: "Clinics & coaches", desc: "Book consults, confirm appointments, win back no-shows automatically." },
              { title: "Lead-gen agencies", desc: "Qualify inbound leads at scale and only pass hot ones to your closers." },
              { title: "Local businesses", desc: "Run promos, win back lapsed customers, announce new offers — at scale." },
              { title: "Anyone with a list", desc: "If you've got phone numbers sitting in a spreadsheet, AutoDial puts them to work." },
            ].map((u, i) => (
              <motion.div variants={fadeUp} key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/30 transition-all duration-500">
                <h3 className="text-lg font-bold text-white mb-2">{u.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/[0.01] border-t border-white/[0.04]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Put an AI on the phones this month.</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Tell us what you want AutoDial to say, who you want it to call, and what you want it to book. We'll handle the rest.
            </p>
            <Link href="/get-started?service=AutoDial">
              <Button className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg rounded-full bg-white text-black hover:bg-white/90 font-black shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                Deploy AutoDial <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import {
  PhoneOutgoing, Mic, Grid3x3, Volume2, PhoneOff, ArrowRight,
  CheckCircle2, Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const summaryRows = [
  { label: "Contact", value: "Sarah Johnson" },
  { label: "Phone", value: "+61 412 345 678" },
  { label: "Status", value: "Qualified", highlight: true },
  { label: "Outcome", value: "Appointment booked", highlight: true },
  { label: "Next step", value: "Quote · Fri 10:00am" },
];

const recentCalls = [
  { name: "James Wilson", status: "Qualified", time: "2m ago", tone: "text-primary" },
  { name: "Amanda Lee", status: "Booked", time: "15m ago", tone: "text-primary" },
  { name: "Daniel Roberts", status: "No answer", time: "31m ago", tone: "text-muted-foreground" },
];

export default function ProductShowcase() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Copy */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Product · AI Voice
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              See AutoDial close a lead, live.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-8">
              A human-sounding AI agent rings your new leads in seconds, qualifies them, handles the usual questions and books the job — then hands you a clean summary. No lead goes cold.
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3 mb-10">
              {[
                "Calls every new lead within 60 seconds",
                "Qualifies, answers FAQs & handles objections",
                "Books straight into your calendar",
                "Logs the call + summary to your CRM",
              ].map((f) => (
                <motion.li variants={fadeUp} key={f} className="flex items-center gap-3 text-white/90 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  {f}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Button asChild className="h-12 px-7 rounded-full bg-primary hover:bg-primary/90 text-white font-bold">
                <Link href="/autodial">
                  Explore AutoDial <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* UI mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-3xl pointer-events-none" />
            <div className="relative grid sm:grid-cols-[1fr_1.1fr] gap-4">

              {/* Live call screen */}
              <div className="rounded-3xl bg-[#0d0a14] border border-white/[0.08] p-6 flex flex-col items-center text-center shadow-2xl">
                <div className="flex items-center gap-2 text-xs font-bold text-primary mb-6 self-start">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  AutoDial
                </div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-[0_0_40px_rgba(168,85,247,0.5)]">
                  <PhoneOutgoing className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-bold">Calling lead…</p>
                <p className="text-muted-foreground text-sm tabular-nums mb-6">00:24</p>
                <div className="flex items-center gap-3 mt-auto">
                  {[Mic, Grid3x3, Volume2].map((Icon, i) => (
                    <div key={i} className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white/80" />
                    </div>
                  ))}
                  <div className="w-11 h-11 rounded-full bg-red-500/90 flex items-center justify-center">
                    <PhoneOff className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Call summary */}
              <div className="rounded-3xl bg-[#0d0a14] border border-white/[0.08] p-6 shadow-2xl">
                <p className="text-white font-bold mb-5">Call Summary</p>
                <div className="space-y-3 mb-6">
                  {summaryRows.map((r) => (
                    <div key={r.label} className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-muted-foreground">{r.label}</span>
                      <span className={`font-bold text-right ${r.highlight ? "text-primary" : "text-white/90"}`}>
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-5 border-t border-white/[0.06]">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Recent calls</p>
                  <div className="space-y-3">
                    {recentCalls.map((c) => (
                      <div key={c.name} className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-white/90 font-medium truncate">{c.name}</span>
                        <span className="flex items-center gap-2 shrink-0">
                          <span className={`font-bold ${c.tone}`}>{c.status}</span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-3 h-3" />{c.time}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

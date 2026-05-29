import { motion, type Variants } from "framer-motion";
import {
  PhoneMissed, MessageSquare, Globe, Sparkles, CalendarCheck,
  Database, BellRing, ArrowRight,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const inputs = [
  { icon: PhoneMissed, title: "Missed calls", desc: "Every unanswered call" },
  { icon: MessageSquare, title: "Web enquiries", desc: "Chat, forms & DMs" },
  { icon: Globe, title: "After-hours leads", desc: "While you sleep" },
];

const outputs = [
  { icon: CalendarCheck, title: "Booked jobs", desc: "Straight into your calendar" },
  { icon: Database, title: "CRM updated", desc: "Every lead logged & synced" },
  { icon: BellRing, title: "You're notified", desc: "Summary to your phone" },
];

function NodeCard({
  icon: Icon, title, desc,
}: { icon: typeof PhoneMissed; title: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500 w-full">
      <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="min-w-0">
        <p className="text-white font-bold text-sm leading-snug truncate">{title}</p>
        <p className="text-muted-foreground text-xs leading-snug truncate">{desc}</p>
      </div>
    </div>
  );
}

export default function AutomationFlow() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 text-xs font-bold uppercase tracking-widest mb-8">
              How It Works
            </div>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
            One system. Everything handled.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
            Leads come in from everywhere. Your AI answers, qualifies and books them — then logs it all and pings you. No app to babysit.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
          className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-center"
        >
          {/* Inputs */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3 order-1">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1 lg:text-right">Leads in</p>
            {inputs.map((n) => <NodeCard key={n.title} {...n} />)}
          </motion.div>

          {/* Connector + hub */}
          <motion.div variants={fadeUp} className="order-2 flex flex-col lg:flex-row items-center justify-center gap-4 py-2 lg:py-0 lg:px-2">
            <ArrowRight className="w-6 h-6 text-primary/50 rotate-90 lg:rotate-0 shrink-0" />
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-2xl" />
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-primary to-secondary border border-primary/40 flex flex-col items-center justify-center text-center px-4 shadow-[0_0_60px_rgba(168,85,247,0.4)]">
                <Sparkles className="w-7 h-7 text-white mb-2" />
                <p className="text-white font-black text-sm sm:text-base leading-tight">AI Automation</p>
                <p className="text-white/80 text-[10px] sm:text-xs mt-1 leading-snug">Answers · qualifies · books — 24/7</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 text-primary/50 rotate-90 lg:rotate-0 shrink-0" />
          </motion.div>

          {/* Outputs */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3 order-3">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Results out</p>
            {outputs.map((n) => <NodeCard key={n.title} {...n} />)}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Clock, PhoneCall, Wallet, TrendingUp, ChevronRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function NumberField({
  label, suffix, prefix, value, onChange, min = 0, max = 1000, step = 1,
}: {
  label: string; suffix?: string; prefix?: string;
  value: number; onChange: (v: number) => void;
  min?: number; max?: number; step?: number;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-bold text-white tracking-wide">{label}</label>
        <div className="text-primary font-black text-lg tabular-nums">
          {prefix}{value.toLocaleString()}{suffix}
        </div>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground font-medium">
        <span>{prefix}{min}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
}

const AUD = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-AU");

export default function RoiCalculator() {
  const [adminHours, setAdminHours] = useState(12);
  const [hourlyValue, setHourlyValue] = useState(85);
  const [missedCalls, setMissedCalls] = useState(8);
  const [avgJob, setAvgJob] = useState(650);

  const { hoursSavedMonthly, adminSavings, leadRecovery, totalMonthly } = useMemo(() => {
    const ADMIN_AUTOMATION_RATE = 0.7;
    const MISSED_CALL_CONVERSION = 0.3;
    const WEEKS_PER_MONTH = 4.3;

    const hoursSavedMonthly = adminHours * ADMIN_AUTOMATION_RATE * WEEKS_PER_MONTH;
    const adminSavings = hoursSavedMonthly * hourlyValue;
    const leadRecovery = missedCalls * MISSED_CALL_CONVERSION * avgJob * WEEKS_PER_MONTH;
    const totalMonthly = adminSavings + leadRecovery;
    return { hoursSavedMonthly, adminSavings, leadRecovery, totalMonthly };
  }, [adminHours, hourlyValue, missedCalls, avgJob]);

  return (
    <section id="roi" className="py-16 px-6 relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 text-xs font-bold uppercase tracking-widest mb-8">
            ROI Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
            See what automation is worth to <span className="text-primary">your</span> business.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Move the sliders. Watch what you're really leaving on the table every month.
          </p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="grid lg:grid-cols-5 gap-6"
        >
          {/* INPUTS */}
          <div className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-8">
            <NumberField
              label="Hours/week spent on admin"
              value={adminHours} onChange={setAdminHours}
              min={1} max={40} step={1} suffix=" hrs"
            />
            <NumberField
              label="What's your time worth?"
              value={hourlyValue} onChange={setHourlyValue}
              min={25} max={300} step={5} prefix="$" suffix="/hr"
            />
            <NumberField
              label="Missed calls per week"
              value={missedCalls} onChange={setMissedCalls}
              min={0} max={50} step={1}
            />
            <NumberField
              label="Average job value"
              value={avgJob} onChange={setAvgJob}
              min={50} max={10000} step={50} prefix="$"
            />
          </div>

          {/* RESULTS */}
          <div className="lg:col-span-2 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/15 to-secondary/10 border border-primary/30 flex flex-col">
            <div className="text-xs font-bold tracking-[0.2em] text-primary mb-2">YOUR ESTIMATED LIFT</div>
            <div className="text-5xl md:text-6xl font-black text-white tracking-tight mb-1 tabular-nums">
              {AUD(totalMonthly)}
            </div>
            <div className="text-muted-foreground text-sm mb-8">recovered every month</div>

            <div className="space-y-4 flex-grow">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold tabular-nums">{Math.round(hoursSavedMonthly)} hrs/mo</div>
                  <div className="text-muted-foreground text-xs">given back to you</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold tabular-nums">{AUD(adminSavings)}/mo</div>
                  <div className="text-muted-foreground text-xs">in admin time recovered</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold tabular-nums">{AUD(leadRecovery)}/mo</div>
                  <div className="text-muted-foreground text-xs">from jobs you'd have missed</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/80 text-sm mb-5">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>TradieCatch ($99/mo) <span className="font-black text-primary">pays for itself.</span></span>
              </div>
              <Link href="/get-started">
                <Button className="w-full h-12 rounded-full bg-white text-black hover:bg-white/90 font-bold">
                  Get my free audit <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground/70 mt-8 max-w-2xl mx-auto">
          Indicative only. Based on 70% of admin time being automatable and a conservative 30% conversion on previously-missed calls.
        </p>
      </div>
    </section>
  );
}

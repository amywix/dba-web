import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { 
  Bot, PhoneCall, Globe, ArrowRight, Zap, PhoneOutgoing, Users, CheckCircle2, ChevronRight,
  Clock, TrendingUp, Wallet, MoonStar, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

import tcLogo from "@assets/tc_logo_1779201943317.png";
import tcScreen from "@assets/tc_screen_1779201943317.png";
import autoDialScreen from "../assets/autodial_nobg.png";
import yardYakkaApp from "../assets/yard_yakka_app_nobg.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 text-xs font-bold uppercase tracking-widest mb-8">
      {children}
    </div>
  );
}

export default function Home() {
  useSEO({
    title: "Done By Amy | AI Automation for Australian Small Businesses",
    description: "Premium AI chatbots, TradieCatch missed call systems, AutoDial AI calling agents, and workflow automations for Australian small businesses. Smart Systems. Real Results. Zero Overwhelm.",
    keywords: "AI automation Australia, TradieCatch, AI chatbot small business Australia, AutoDial AI calling, workflow automation Australia",
    canonical: "https://www.donebyamy.com",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 md:pt-56 md:pb-40 px-6 overflow-hidden">
        {/* Abstract Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[160px] opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Australia's Premier AI Automation Agency
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-[80px] font-black text-white mb-8 leading-[1.05] tracking-tight">
              Systems that run your business. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Not the other way around.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              We build AI chatbots, missed-call responders, and custom workflow automations that buy back 10+ hours of your week. Zero jargon. Zero overwhelm.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link href="/get-started">
                <Button
                  data-testid="hero-cta-button"
                  size="lg"
                  className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg rounded-full bg-white text-black hover:bg-white/90 font-black shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Your Free Audit
                </Button>
              </Link>
              <Button
                data-testid="hero-secondary-button"
                size="lg"
                variant="outline"
                className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg rounded-full border-white/10 hover:bg-white/5 text-white hover:border-white/20 transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY AUTOMATE (BENEFITS) ──────────────────────────────── */}
      <section id="benefits" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <SectionBadge>Why Automate</SectionBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              What automation actually does for your business.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              You don't need more hustle. You need leverage. Here's what happens the day your systems start doing the work for you.
            </motion.p>
          </motion.div>

          {/* Headline metrics */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
          >
            {[
              { stat: "10+", label: "hours given back to your week", sub: "Typical client result after 30 days" },
              { stat: "24/7", label: "lead capture, even while you sleep", sub: "Missed calls, after-hours enquiries, weekends" },
              { stat: "1 job", label: "is all it takes to pay for itself", sub: "Most setups break even in the first week" },
            ].map((m, i) => (
              <motion.div
                variants={fadeUp} key={i}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/40 transition-all duration-500"
              >
                <div className="text-5xl md:text-6xl font-black text-primary mb-3 tracking-tight">{m.stat}</div>
                <div className="text-white font-semibold mb-2 leading-snug">{m.label}</div>
                <div className="text-muted-foreground text-sm leading-relaxed">{m.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Six concrete benefits */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Clock,
                title: "Buy back your time",
                desc: "Quoting, invoicing, follow-ups, data entry — automated end to end. Your week stops being eaten by admin you shouldn't be doing."
              },
              {
                icon: PhoneCall,
                title: "Stop losing leads",
                desc: "Every missed call gets an instant SMS. Every web enquiry gets a reply in seconds. Leads that used to slip through now book themselves in."
              },
              {
                icon: Wallet,
                title: "Get paid faster",
                desc: "Invoices fire the moment a job is marked complete. Polite reminders chase the unpaid ones. Cash flow stops depending on you remembering."
              },
              {
                icon: MoonStar,
                title: "Operate 24/7",
                desc: "AI agents answer questions, book appointments and qualify leads while you're on the tools, with the kids, or asleep. Your business never closes."
              },
              {
                icon: TrendingUp,
                title: "Scale without hiring",
                desc: "Handle 2x the jobs, calls and enquiries without adding payroll. Systems absorb the volume that would otherwise force you to hire too early."
              },
              {
                icon: ShieldCheck,
                title: "Nothing falls through",
                desc: "Quotes get sent. Clients get reminded. NDIS paperwork gets reconciled. The mental load of remembering everything stops being yours."
              },
            ].map((b, i) => (
              <motion.div
                variants={fadeUp} key={i}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Before / After contrast */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="mt-20 grid md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeUp} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
              <div className="text-xs font-bold tracking-[0.2em] text-muted-foreground mb-6">BEFORE AUTOMATION</div>
              <ul className="space-y-4">
                {[
                  "Missed calls become missed jobs",
                  "Sundays disappear into invoicing and admin",
                  "Leads sit unanswered until 9pm",
                  "Quotes get forgotten in your inbox",
                  "Growth means hiring — and hiring means risk",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 line-through decoration-white/20">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="p-8 rounded-3xl bg-primary/[0.06] border border-primary/30">
              <div className="text-xs font-bold tracking-[0.2em] text-primary mb-6">AFTER AUTOMATION</div>
              <ul className="space-y-4">
                {[
                  "Every missed call books the next job",
                  "Sundays belong to you again",
                  "Enquiries get answered in 30 seconds, day or night",
                  "Quotes send themselves the moment a lead comes in",
                  "You scale by adding systems, not headcount",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ────────────────────────────────────── */}
      <section id="services" className="py-24 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
          >
            <div className="max-w-2xl">
              <motion.div variants={fadeUp}><SectionBadge>What We Build</SectionBadge></motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Enterprise-grade automation, scaled for small business.
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-md leading-relaxed">
              We don't sell software subscriptions. We sell outcomes. If it saves time, captures leads, or speeds up cash flow, we build it.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { 
                icon: Bot, 
                title: "AI Automations", 
                price: "From $99 + setup", 
                desc: "Intelligent chatbots, CRM syncs, and 24/7 virtual assistants that handle the repetitive work." 
              },
              { 
                icon: Globe, 
                title: "Conversion Websites", 
                price: "From $199", 
                desc: "Lightning-fast, SEO-optimized sites designed specifically to turn visitors into booked jobs." 
              },
              { 
                icon: Zap, 
                title: "Custom Apps", 
                price: "From $199", 
                desc: "Bespoke web tools that bridge the gap between your existing software stack." 
              },
            ].map((srv, i) => (
              <motion.div
                variants={fadeUp} key={i}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 transition-all duration-500 hover:bg-white/[0.04] flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                  <srv.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{srv.title}</h3>
                <p className="text-primary text-sm font-bold mb-4">{srv.price}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-auto">{srv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TRADIECATCH (FLAGSHIP) ───────────────────────────────── */}
      <section id="tradiecatch" className="py-24 px-6 overflow-hidden relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
              className="order-2 lg:order-1 space-y-8"
            >
              <motion.div variants={fadeUp}>
                <img src={tcLogo} alt="TradieCatch Logo" className="h-10 sm:h-12 object-contain mb-8" />
                <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white mb-6">
                  Never lose a job to<br/>a missed call again.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  When you're on the tools, you can't always answer the phone. TradieCatch automatically fires a custom SMS back to missed callers instantly, capturing the lead before they ring your competitor.
                </p>
              </motion.div>
              
              <motion.ul variants={stagger} className="space-y-4 pt-4">
                {[
                  "Works instantly — zero app downloads needed",
                  "Fully customizable auto-reply messaging",
                  "Captures job details while you keep working",
                  "Pays for itself with just one saved job",
                ].map((item, i) => (
                  <motion.li variants={fadeUp} key={i} className="flex items-start gap-4 text-white/80">
                    <div className="mt-1 bg-primary/20 p-1 rounded-full"><CheckCircle2 className="text-primary w-4 h-4" /></div>
                    <span className="leading-snug">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/get-started?service=TradieCatch">
                  <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-white/90 font-bold w-full sm:w-auto">
                    Get TradieCatch — $99/mo
                  </Button>
                </Link>
                <Button variant="outline" className="h-14 px-8 rounded-full border-white/10 hover:bg-white/5 hover:border-white/20 w-full sm:w-auto text-white">
                  SMS Demo: 0485 050 788
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
            >
              <div className="relative w-full max-w-[400px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[40px] blur-2xl transform rotate-6 scale-95" />
                <img src={tcScreen} alt="TradieCatch Interface" className="relative z-10 w-full object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ─── AUTODIAL ─────────────────────────────────────────────── */}
      <section id="autodial" className="py-24 px-6 overflow-hidden relative bg-white/[0.01] border-y border-white/[0.04]">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center lg:justify-start relative"
            >
              <div className="relative w-full max-w-[460px]">
                <div className="absolute inset-0 bg-primary/15 rounded-full blur-3xl scale-75" />
                <img src={autoDialScreen} alt="AutoDial Dashboard" className="relative z-10 w-full object-contain drop-shadow-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeUp}>
                <SectionBadge>AI Outbound Calling</SectionBadge>
                <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white mb-6">
                  AutoDial. Your tireless<br/>telemarketing agent.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  An AI voice agent that sounds human, works 24/7, handles objections, qualifies leads, and books appointments straight into your calendar. Scale your outreach instantly.
                </p>
              </motion.div>
              
              <motion.ul variants={stagger} className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  { title: "Human-Like Voice", desc: "Natural pauses, intonations, and instant replies." },
                  { title: "Smart Qualifying", desc: "Filters tire-kickers and finds the real buyers." },
                  { title: "Direct Booking", desc: "Integrates with Calendly to book appointments." },
                  { title: "Endless Scale", desc: "Make 10 calls or 10,000 calls simultaneously." },
                ].map((feature, i) => (
                  <motion.li variants={fadeUp} key={i} className="bg-white/[0.03] p-5 rounded-2xl border border-white/[0.06]">
                    <h4 className="text-white font-bold text-sm mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{feature.desc}</p>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div variants={fadeUp} className="pt-4">
                <Link href="/get-started?service=AutoDial">
                  <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold w-full sm:w-auto">
                    Deploy AutoDial
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY: YARD YAKKA ───────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            
            <motion.div variants={fadeUp} className="text-center mb-16">
              <SectionBadge>Case Study</SectionBadge>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                The Yard Yakka Boys
              </h2>
              <p className="text-muted-foreground text-lg">Lawn Care & NDIS Maintenance · Mackay, QLD</p>
            </motion.div>

            <div className="grid md:grid-cols-12 gap-12 items-center bg-white/[0.02] border border-white/[0.06] rounded-[40px] p-8 md:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
              
              <motion.div variants={fadeUp} className="md:col-span-7 space-y-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">From admin chaos to total clarity.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lucas was losing half his week to admin: generating invoices, uploading to NDIS portals, and chasing unpaid bills. The work was flowing in, but the back-office was choking the business.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We built a bespoke mobile app for his team and wired up a 6-step automation workflow. Now, when a job is marked complete on-site, the invoice is instantly generated in QuickBooks, the NDIS spreadsheet is updated, and automated follow-ups handle late payments.
                </p>
                <blockquote className="border-l-2 border-primary pl-5 py-2 mt-8">
                  <p className="text-white italic text-sm md:text-base leading-relaxed mb-3">
                    "What used to take me half a day every week now just happens. Invoices go out, the NDIS sheet fills itself, and I can actually see what's been paid without digging through emails."
                  </p>
                  <footer className="text-primary text-xs font-bold uppercase tracking-wider">— Lucas, Owner</footer>
                </blockquote>
              </motion.div>

              <motion.div variants={fadeUp} className="md:col-span-5 flex justify-center relative z-10">
                <img src={yardYakkaApp} alt="Yard Yakka App" className="w-full max-w-[260px] object-contain drop-shadow-2xl" />
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white/[0.01] border-t border-white/[0.04]">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
              Trusted by Australian Business Owners
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground">Real people getting real hours back in their week.</motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                quote: "I was losing two or three jobs a week just from missed calls while I was on the tools. TradieCatch fixed that overnight. Made my money back in the first week alone.",
                name: "Jake Morrish", role: "Electrician", location: "Strathpine, QLD"
              },
              {
                quote: "Amy set up our booking chatbot in two days. It now handles all our after-hours enquiries and books clients straight into our calendar. We wake up with new appointments every morning.",
                name: "Renee Alcott", role: "Remedial Massage Therapist", location: "Brendale, QLD"
              },
              {
                quote: "The workflow automation Amy built connects our quotes to our invoicing and sends follow-up texts automatically. I've saved probably 6 hours a week. Wish I did this years ago.",
                name: "Darren Schulz", role: "Plumber & Gas Fitter", location: "Aspley, QLD"
              },
            ].map((t, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed text-sm flex-1 mb-8">"{t.quote}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role} · {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-t-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Stop doing it all yourself.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            Get a free automation audit for your business. Zero pressure. Zero jargon. Just a clear roadmap to save you time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <Link href="/get-started">
              <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-white/90 font-black shadow-[0_0_40px_rgba(255,255,255,0.2)]">
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

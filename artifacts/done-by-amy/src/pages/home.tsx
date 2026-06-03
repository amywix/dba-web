import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RoiCalculator from "@/components/roi-calculator";
import AutomationFlow from "@/components/home/automation-flow";
import ProductShowcase from "@/components/home/product-showcase";
import { 
  Bot, PhoneCall, MessageSquare, ArrowRight, PhoneOutgoing, Users, CheckCircle2, ChevronRight,
  Clock, TrendingUp, Wallet, MoonStar, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

import lcPhone from "../assets/leadcatch_phone_nobg.webp";
import autoDialScreen from "../assets/autodial_nobg.webp";

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
    description: "Premium AI chatbots, LeadCatch missed call systems, AutoDial AI calling agents, and workflow automations for Australian small businesses. Smart Systems. Real Results. Zero Overwhelm.",
    keywords: "AI automation Australia, LeadCatch, AI chatbot small business Australia, AutoDial AI calling, workflow automation Australia",
    canonical: "https://www.donebyamy.com",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-6 sm:pt-32 sm:pb-12 md:pt-56 md:pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Abstract Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[160px] opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest backdrop-blur-md text-center">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Australia's Premier AI Automation Agency
              </div>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-[2.5rem] leading-[1.05] sm:text-6xl md:text-[80px] font-black text-white mb-6 sm:mb-8 tracking-tight">
              Systems that run your business. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Not the other way around.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
              We build AI chatbots, missed-call responders, and custom workflow automations that buy back 10+ hours of your week. Zero jargon. Zero overwhelm.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/get-started">
                <Button
                  data-testid="hero-cta-button"
                  size="lg"
                  className="h-14 sm:h-16 px-6 sm:px-10 text-base sm:text-lg rounded-full bg-white text-black hover:bg-white/90 font-black shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                >
                  Tell Us About Your Business
                </Button>
              </Link>
              <Button
                data-testid="hero-secondary-button"
                size="lg"
                variant="outline"
                className="h-14 sm:h-16 px-6 sm:px-10 text-base sm:text-lg rounded-full border-white/10 hover:bg-white/5 text-white hover:border-white/20 transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY AUTOMATE (BENEFITS) ──────────────────────────────── */}
      <section id="benefits" className="pt-2 pb-10 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-6">
              <SectionBadge>Why Automate</SectionBadge>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              What automation actually does for your business.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              You don't need more hustle. You need leverage. Here's what happens the day your systems start doing the work for you.
            </motion.p>
          </motion.div>

          {/* Six concrete benefits */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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
                className="group p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ────────────────────────────────────── */}
      <section id="services" className="pt-10 pb-16 px-4 sm:px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
          >
            <div className="max-w-2xl">
              <motion.div variants={fadeUp}><SectionBadge>What We Build</SectionBadge></motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Big-business systems, built for your business.
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-md leading-relaxed">
              We don't sell software subscriptions. We sell outcomes. If it saves time, captures leads, or speeds up cash flow, we build it.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
          >
            {[
              { 
                icon: Bot, 
                title: "AI Automations", 
                price: "$199/month", 
                desc: "Intelligent chatbots, CRM syncs, and 24/7 virtual assistants that handle the repetitive work." 
              },
              { 
                icon: MessageSquare, 
                title: "AI Chatbots", 
                price: "From $149/month", 
                desc: "Smart chat assistants that answer enquiries, qualify leads, and book jobs straight from your website 24/7." 
              },
            ].map((srv, i) => (
              <motion.div
                variants={fadeUp} key={i}
                className="group p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 transition-all duration-500 hover:bg-white/[0.04] flex flex-col h-full"
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

      <AutomationFlow />

      {/* ─── FEATURED PRODUCTS & CASE STUDY ───────────────────────── */}
      <section id="featured" className="py-12 sm:py-16 px-4 sm:px-6 overflow-hidden relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp} className="flex justify-center"><SectionBadge>Featured Work</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Flagship products. Hands-on support. Real results.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              Dive into the systems we're best known for — the automations that keep the wheels turning.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {/* LeadCatch card */}
            <motion.div variants={fadeUp} className="group flex flex-col p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">PRODUCT · $199/MO</div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-black text-white tracking-tight">LeadCatch</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight leading-snug">Never miss a job to a missed call.</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Instant SMS auto-reply to every missed call. Capture the lead before your competitor does.
                </p>
                <div className="mt-auto pt-6 flex justify-center h-48 items-end">
                  <img src={lcPhone} alt="LeadCatch screen" loading="lazy" decoding="async" className="max-h-44 w-auto object-contain drop-shadow-2xl mb-6" />
                </div>
                <Link href="/leadcatch" className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:text-primary transition-colors">
                  Explore LeadCatch <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* AutoDial card */}
            <motion.div variants={fadeUp} className="group flex flex-col p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">PRODUCT · AI VOICE</div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <PhoneOutgoing className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-2xl font-black text-white tracking-tight">AutoDial</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight leading-snug">Your tireless AI sales agent.</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  A human-sounding voice agent that qualifies leads, handles objections and books appointments — 24/7.
                </p>
                <div className="mt-auto pt-6 flex justify-center h-48 items-end">
                  <img src={autoDialScreen} alt="AutoDial" loading="lazy" decoding="async" className="max-h-44 w-auto object-contain drop-shadow-2xl mb-6" />
                </div>
                <Link href="/autodial" className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:text-primary transition-colors">
                  Explore AutoDial <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* AI Chatbot card */}
            <motion.div variants={fadeUp} className="group flex flex-col p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">PRODUCT · FROM $149/MO</div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-2xl font-black text-white tracking-tight">AI Chatbots</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight leading-snug">Answer every enquiry, instantly.</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  A smart chat assistant that answers questions, qualifies leads and books jobs straight from your website — 24/7.
                </p>
                <div className="mt-auto pt-6 flex flex-col justify-end h-48 gap-3">
                  <div className="self-start max-w-[80%] rounded-2xl rounded-bl-md bg-white/[0.05] border border-white/10 px-4 py-2.5 text-sm text-white/90">
                    Hi! Do you do same-day quotes?
                  </div>
                  <div className="self-end max-w-[85%] rounded-2xl rounded-br-md bg-primary/20 border border-primary/30 px-4 py-2.5 text-sm text-white">
                    Absolutely — I can book you in. What's your suburb?
                  </div>
                  <div className="self-start flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white/[0.05] border border-white/10 px-4 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse [animation-delay:300ms]" />
                  </div>
                </div>
                <Link href="/get-started" className="mt-6 inline-flex items-center gap-2 text-white font-bold text-sm group-hover:text-primary transition-colors">
                  Get a chatbot <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ProductShowcase />

      <RoiCalculator />

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/[0.01] border-t border-white/[0.04]">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
              Trusted by Australian Business Owners
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground">Real people getting real hours back in their week.</motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-4 sm:gap-6"
          >
            {[
              {
                quote: "I was losing two or three jobs a week just from missed calls while I was on the tools. LeadCatch fixed that overnight. Made my money back in the first week alone.",
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
                className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] flex flex-col h-full"
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
      <section className="py-12 sm:py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-t-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Stop doing it all yourself.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-base sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            Get a free automation audit for your business. Zero pressure. Zero jargon. Just a clear roadmap to save you time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            <Link href="/get-started">
              <Button size="lg" className="h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg rounded-full bg-white text-black hover:bg-white/90 font-black shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                Tell Us About Your Business <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

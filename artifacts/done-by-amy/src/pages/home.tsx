import { motion } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import { 
  Bot, PhoneCall, Workflow, Globe,
  CheckCircle2, ArrowRight, Zap, Briefcase, PhoneOutgoing, Users, Calendar, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

import logoMark from "@assets/ChatGPT_Image_May_14,_2026,_04_49_39_PM_-_Copy_1779201943316.png";
import linkBanner from "@assets/link_img_1779201943317.png";
import tcLogo from "@assets/tc_logo_1779201943317.png";
import tcScreen from "@assets/tc_screen_1779201943317.png";
import featureCards from "@assets/ChatGPT_Image_May_18,_2026,_11_32_20_AM_1779201943317.png";
import autoDialScreen from "../assets/autodial_nobg.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

function SectionLabel({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
      <Icon className="w-3.5 h-3.5" /> {children}
    </div>
  );
}

export default function Home() {
  useSEO({
    title: "Done By Amy | AI Automation for Australian Small Businesses | TradieCatch",
    description: "Done By Amy builds AI chatbots, TradieCatch missed call systems, AutoDial AI calling agents, and workflow automations for small businesses across Australia. Smart Systems. Real Results. Zero Overwhelm.",
    keywords: "AI automation Australia, TradieCatch, tradie missed call system, AI chatbot small business Australia, AutoDial AI calling, workflow automation Australia, virtual assistant Australia, AI automation Sydney Melbourne Brisbane, Done By Amy, small business automation",
    canonical: "https://www.donebyamy.com",
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-36 px-6 overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/15 rounded-full blur-[140px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              className="flex-1 text-center md:text-left"
            >
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/40 text-primary text-sm font-semibold mb-8">
                  <Sparkles className="w-4 h-4" /> AI Automation for Aussie Small Business
                </div>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-7 tracking-tight text-white">
                Smart<br />Systems.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                  Real Results.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
                I build AI chatbots, missed call systems, and automated workflows so you can get back to what you do best.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Link href="/get-started">
                  <Button data-testid="hero-cta-button" size="lg" className="h-14 px-9 text-base rounded-full font-bold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(168,85,247,0.65)] hover:-translate-y-0.5">
                    Get Your Free Audit
                  </Button>
                </Link>
                <Button
                  data-testid="hero-secondary-button"
                  size="lg"
                  variant="ghost"
                  className="h-14 px-8 text-base rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-muted-foreground hover:text-white transition-all"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See How It Works <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 relative w-full max-w-lg flex justify-center"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-[80px] scale-90" />
              <img src={tcScreen} alt="TradieCatch App" className="relative z-10 h-[480px] object-contain drop-shadow-2xl mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>


      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section id="services" className="py-14 px-6 bg-white/[0.02] border-y border-white/[0.04]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel icon={Bot}>What We Build</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Expert automation,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">done for you.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-lg mx-auto">
              Custom AI systems designed specifically for your daily operations — no tech knowledge required.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {[
              { icon: Bot,       title: "AI Automations",        price: "from $99 + setup", desc: "AI chatbots, missed call systems, workflows — all running 24/7 on autopilot." },
              { icon: Globe,     title: "Websites",              price: "from $199", desc: "Conversion-focused, SEO-ready sites that turn visitors into paying customers." },
              { icon: Zap,       title: "Apps",                  price: "from $199", desc: "Custom web apps and tools that connect your systems and automate the boring stuff." },
            ].map((srv, i) => (
              <motion.div
                variants={fadeUp} key={i}
                className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-primary/40 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                  <srv.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-black text-white mb-1">{srv.title}</h3>
                <p className="text-primary text-xs font-bold mb-2">{srv.price}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{srv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── AI CHATBOT ───────────────────────────────────────────── */}
      <section className="py-14 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">

            {/* Chat window */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex-1 max-w-[360px] mx-auto w-full"
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(168,85,247,0.15)] border border-white/[0.08]">
                <div className="bg-gradient-to-r from-primary to-secondary px-5 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center shrink-0">
                    <span className="text-white font-black text-sm">A</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm">Amy — AI Assistant</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      <span className="text-white/70 text-xs">Online now</span>
                    </div>
                  </div>
                  <Bot className="w-4 h-4 text-white/50 shrink-0" />
                </div>
                <div className="bg-[#f5f5f7] p-4 space-y-3">
                  {[
                    { from: "bot",  text: "Hi there! How can I help you today?" },
                    { from: "user", text: "Do you have availability this week?" },
                    { from: "bot",  text: "Absolutely! I can book you in right now. What day suits you best?" },
                    { from: "user", text: "Thursday afternoon would be great." },
                    { from: "bot",  text: "Done — you're booked for Thursday at 2pm. A confirmation is on its way! 🎉" },
                  ].map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`px-3.5 py-2.5 rounded-2xl text-xs max-w-[78%] leading-relaxed ${
                        msg.from === "bot"
                          ? "bg-white text-gray-700 rounded-tl-sm shadow-sm"
                          : "bg-gradient-to-r from-primary to-secondary text-white rounded-tr-sm"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#f5f5f7] border-t border-black/[0.06] px-4 py-3 flex items-center gap-3">
                  <div className="flex-1 bg-white rounded-full px-4 py-2 text-xs text-gray-400 shadow-sm">Type a message...</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shrink-0 shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="flex-1 space-y-6"
            >
              <motion.div variants={fadeUp}>
                <SectionLabel icon={Bot}>AI Chatbots & Virtual Assistants</SectionLabel>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
                Your business,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">always online.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
                Amy's AI virtual assistants handle customer enquiries, capture leads, and answer FAQs around the clock — so you never miss an opportunity, even at 2am.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3">
                {[
                  "Responds instantly to customer questions 24/7",
                  "Captures lead name, phone, and job details automatically",
                  "Handles FAQs, pricing queries, and booking requests",
                  "Automates your social media inboxes — Facebook, Instagram & more",
                  "Schedules and publishes social media posts automatically",
                  "Escalates complex issues to you when needed",
                  "Fully customised to your business, tone, and services",
                ].map((item, i) => (
                  <motion.li variants={fadeUp} key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link href="/get-started">
                  <Button data-testid="chatbot-cta-button" className="rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 transition-all">
                    Get Your AI Assistant <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TRADIECATCH ──────────────────────────────────────────── */}
      <section id="tradiecatch" className="py-14 px-6 overflow-hidden relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="space-y-7"
            >
              <motion.div variants={fadeUp}>
                <img src={tcLogo} alt="TradieCatch Logo" className="h-14 object-contain" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <SectionLabel icon={PhoneCall}>Flagship Product for Tradies</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
                  Never miss a job<br />lead again.
                </h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
                A mobile web app that catches every missed call and automatically sends an SMS reply — so you never lose a job while you're on the tools.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3">
                {[
                  "Mobile web app — no download required",
                  "Instant SMS auto-reply to missed calls",
                  "Captures job details automatically, 24/7",
                  "Just $99/month — pays for itself in one job",
                ].map((item, i) => (
                  <motion.li variants={fadeUp} key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="space-y-4">
                <Link href="/get-started">
                  <Button data-testid="tc-cta-button" className="rounded-full bg-white text-black hover:bg-gray-100 font-bold shadow-[0_4px_24px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_32px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 transition-all">
                    Get TradieCatch Today <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a
                  href="sms:0485050788&body=Hi%2C%20I%27d%20like%20to%20watch%20the%20TradieCatch%20demo"
                  data-testid="tc-sms-cta"
                  className="flex items-center gap-3 group w-fit"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/20 group-hover:border-white/40 transition-all">
                    <PhoneCall className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight group-hover:text-primary transition-colors">
                      SMS <span className="tracking-wide">0485 050 788</span>
                    </p>
                    <p className="text-white/50 text-xs">to watch the demo &amp; get signed up</p>
                  </div>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] scale-90" />
                <img src={tcScreen} alt="TradieCatch App" className="relative z-10 h-[480px] object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── AUTODIAL ─────────────────────────────────────────────── */}
      <section id="autodial" className="py-14 px-6 overflow-hidden relative bg-white/[0.02] border-y border-white/[0.04]">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex justify-center order-2 md:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/15 rounded-full blur-[60px] scale-90" />
                <img
                  src={autoDialScreen}
                  alt="AutoDial AI Calling Agent"
                  className="relative z-10 h-[500px] object-contain drop-shadow-2xl"
                  data-testid="autodial-screen-image"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="space-y-7 order-1 md:order-2"
            >
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest mb-2">
                  <PhoneOutgoing className="w-3.5 h-3.5" /> New Product
                </div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <SectionLabel icon={PhoneOutgoing}>AI Outbound Calling</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
                  AutoDial — your AI<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">telemarketing agent.</span>
                </h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
                AutoDial makes outbound calls for you — sounding just like a real person. It dials leads, starts natural conversations, handles objections, qualifies prospects, and books appointments straight into your calendar.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3">
                {[
                  { icon: CheckCircle2, text: "Automatically dials leads and starts natural conversations" },
                  { icon: CheckCircle2, text: "Sounds like a real person — builds trust instantly"         },
                  { icon: CheckCircle2, text: "Handles objections and qualifies leads for you"             },
                  { icon: Calendar,     text: "Books appointments directly into your calendar"             },
                  { icon: Users,        text: "Works 24/7 — more calls, more leads, zero fatigue"         },
                  { icon: CheckCircle2, text: "From $99/month based on call volume"                       },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.li variants={fadeUp} key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <Icon className="text-primary w-4 h-4 shrink-0" /> {text}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link href="/get-started?service=AI+Caller+(AutoDial)">
                  <Button data-testid="autodial-cta-button" className="rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 transition-all">
                    Activate AutoDial <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-14 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
            <motion.div variants={fadeUp}><SectionLabel icon={Users}>Real Results</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight">
              Businesses<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">love what we build.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                quote: "I was losing two or three jobs a week just from missed calls while I was on the tools. TradieCatch fixed that overnight. Made my money back in the first week alone.",
                name: "Jake Morrish",
                role: "Electrician",
                location: "Strathpine, QLD",
              },
              {
                quote: "Amy set up our booking chatbot in two days. It now handles all our after-hours enquiries and books clients straight into our calendar. We wake up with new appointments every morning.",
                name: "Renee Alcott",
                role: "Remedial Massage Therapist",
                location: "Brendale, QLD",
              },
              {
                quote: "The workflow automation Amy built connects our quotes to our invoicing and sends follow-up texts automatically. I've saved probably 6 hours a week. Wish I did this years ago.",
                name: "Darren Schulz",
                role: "Plumber & Gas Fitter",
                location: "Aspley, QLD",
              },
              {
                quote: "Amy automated our entire client onboarding — intake forms, welcome emails, calendar bookings. What used to take me an hour per client now just happens. Game changer.",
                name: "Melissa Tran",
                role: "Business Coach",
                location: "Chermside, QLD",
              },
              {
                quote: "Our social media inbox was a disaster — messages falling through the cracks, leads going cold. Amy's AI now responds instantly and flags hot leads for us. Our conversion rate is up.",
                name: "Tyler Buchanan",
                role: "Real Estate Agent",
                location: "Caboolture, QLD",
              },
              {
                quote: "I was sceptical about AI but Amy walked me through everything in plain English. Setup was fast, the bot handles our FAQ beautifully, and I finally get weekends back.",
                name: "Sandra Kowalski",
                role: "Salon Owner",
                location: "Redcliffe, QLD",
              },
            ].map((t, i) => (
              <motion.div
                key={i} variants={fadeUp}
                className="flex flex-col gap-5 p-7 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed text-sm flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                  <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 text-primary font-black text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role} · {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WHO WE HELP ──────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}><SectionLabel icon={Briefcase}>Industries</SectionLabel></motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight mb-10">
              Built for businesses like yours.
            </motion.h2>
            <motion.div variants={stagger} className="flex flex-wrap justify-center gap-3">
              {[
                "Tradies & Contractors",
                "Real Estate Agents",
                "Clinics & Allied Health",
                "Coaches & Consultants",
                "Hospitality & Cafes",
                "Retail & eCommerce",
              ].map((industry, i) => (
                <motion.div
                  variants={fadeUp} key={i}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-sm text-muted-foreground hover:text-white hover:border-primary/40 hover:bg-white/[0.07] transition-all cursor-default"
                >
                  <Briefcase className="w-3.5 h-3.5 text-primary shrink-0" /> {industry}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-primary/20" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto text-center relative z-10 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <img src={linkBanner} alt="Done By Amy" className="h-20 mx-auto mb-10 object-contain rounded-2xl shadow-2xl" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tight">
              Ready to stop doing<br />everything yourself?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Let's chat about your business bottlenecks and find the exact automations that will save you 10+ hours this week.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/get-started">
                <Button
                  data-testid="footer-cta-button"
                  size="lg"
                  className="h-16 px-12 text-lg rounded-full bg-white text-black hover:bg-white/90 font-black shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Your Free Audit <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] bg-background py-10 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-5 text-sm">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="Done By Amy" className="w-7 h-7 object-contain grayscale opacity-50" />
            <span className="font-black text-white tracking-tight">Done By Amy</span>
          </div>
          <div className="text-muted-foreground/60 text-center">
            <p>Australia-based · Working with businesses nationally</p>
            <p className="mt-1">
              <a href="mailto:admin@donebyamy.com" className="hover:text-primary transition-colors">admin@donebyamy.com</a>
              {" · "}
              <a href="https://www.donebyamy.com" className="hover:text-primary transition-colors">www.donebyamy.com</a>
            </p>
          </div>
          <p className="text-muted-foreground/40">&copy; {new Date().getFullYear()} Done By Amy.</p>
        </div>
      </footer>

    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import { ArrowRight, CheckCircle2, Zap, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMark from "@assets/ChatGPT_Image_May_14,_2026,_04_49_39_PM_-_Copy_1779201943316.png";
import daLogoWordmark from "@assets/da_logo_1779201943317.png";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function About() {
  useSEO({
    title: "About Amy | AI Automation Specialist for Australian Small Businesses | Done By Amy",
    description: "Meet Amy — Australia's AI automation specialist helping small businesses save time, catch more leads, and grow without the overwhelm. Creator of TradieCatch and AutoDial.",
    keywords: "Amy AI automation Australia, Done By Amy founder, AI specialist Australia, small business automation expert, TradieCatch creator, Australian AI consultant",
    canonical: "https://www.donebyamy.com/about",
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Nav */}
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial="hidden" animate="visible" variants={fadeIn}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-primary/30 text-primary text-sm font-medium mb-6">
                <Heart className="w-4 h-4" /> The person behind the systems
              </div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  I build systems that run themselves.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-lg">
                I'm an Australian AI automation specialist who helps small business owners stop drowning in repetitive tasks and start focusing on the work that actually grows their business.
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                I've seen too many brilliant tradespeople, health professionals, and small business owners miss leads, burn out on admin, and lose customers simply because they didn't have the right systems in place. That's what Done By Amy fixes.
              </p>
              <Link href="/get-started">
                <Button data-testid="about-hero-cta" size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  Work With Me <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-4">How I work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three principles that guide every automation I build.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Zap,
                title: "Results first",
                desc: "I don't build automations for the sake of it. Every system I create is designed to save you real time, catch real leads, or make you real money.",
              },
              {
                icon: Shield,
                title: "Zero overwhelm",
                desc: "I handle the technical heavy lifting so you don't have to. You get handed a working system with plain-English instructions — not a tutorial series.",
              },
              {
                icon: Users,
                title: "Built for your business",
                desc: "No copy-paste templates. Every solution is tailored to your exact workflow, tools, and goals — because your business isn't generic.",
              },
            ].map((v, i) => (
              <motion.div
                key={i} variants={fadeIn}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Amy does */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex-1">
              <h2 className="text-4xl font-black mb-6">What I specialise in</h2>
              <ul className="space-y-4">
                {[
                  "AI chatbots that handle enquiries, capture leads, and answer FAQs 24/7",
                  "Missed call automation — instant SMS replies so no lead slips away",
                  "AI calling systems that follow up, qualify, and book appointments",
                  "Workflow automations connecting your CRM, calendar, forms, and accounting",
                  "Conversion-focused website design built for real results",
                  "Products: TradieCatch & AutoDial — purpose-built for Australian businesses",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex-1 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "200+", label: "Businesses automated" },
                  { value: "$2M+", label: "Revenue recaptured" },
                  { value: "48hr", label: "Average setup time" },
                  { value: "5.0★", label: "Google rating" },
                ].map((s, i) => (
                  <div key={i} className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Ready to work together?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Tell me about your business and I'll put together a custom automation plan for you — no tech jargon, no hard sell.
          </p>
          <Link href="/get-started">
            <Button data-testid="about-footer-cta" size="lg" className="h-14 px-10 text-lg rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              Get Your Free Audit <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-background py-10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="Done By Amy" className="w-7 h-7 object-contain grayscale opacity-60" />
            <span className="font-bold text-white">Done By Amy</span>
          </div>
          <p>Australia-based, working with businesses nationally.</p>
          <p>&copy; {new Date().getFullYear()} Done By Amy. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

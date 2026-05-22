import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ChevronRight, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function About() {
  useSEO({
    title: "About Amy | AI Automation Specialist | Done By Amy",
    description: "Meet Amy — Australia's AI automation specialist helping small businesses scale without the overwhelm. Creator of TradieCatch and AutoDial.",
    keywords: "Amy AI automation Australia, Done By Amy founder, small business automation expert, TradieCatch creator",
    canonical: "https://www.donebyamy.com/about",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 text-xs font-bold uppercase tracking-widest mb-8">
              The person behind the systems
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8 text-white">
              I build systems that <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">run themselves.</span>
            </motion.h1>
            <motion.div variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto space-y-6 leading-relaxed text-left">
              <p>
                I'm an Australian AI automation specialist who helps small business owners stop drowning in repetitive tasks and start focusing on the work that actually grows their business.
              </p>
              <p>
                I've seen too many brilliant tradespeople, health professionals, and service business owners miss leads, burn out on admin, and lose customers simply because they didn't have the right infrastructure in place. The enterprise tools were too complex, and the cheap tools didn't talk to each other.
              </p>
              <p className="text-white font-medium">
                That's what Done By Amy fixes. I bring enterprise-grade automation down to the small business level, custom-built for how you actually work.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">How I work</h2>
            <p className="text-muted-foreground text-lg">Three non-negotiable principles for every system I build.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Zap,
                title: "Results, not features",
                desc: "I don't build automations for the sake of it. Every system is designed to save hours, catch leads, or accelerate cash flow. If it doesn't move the needle, we don't build it.",
              },
              {
                icon: Shield,
                title: "Zero overwhelm",
                desc: "I handle the technical heavy lifting completely. You get handed a working system that integrates with your current tools, along with plain-English instructions.",
              },
              {
                icon: Users,
                title: "Bespoke to your business",
                desc: "No copy-paste templates. Every solution is tailored to your exact workflow, tools, and goals because your business operations are unique.",
              },
            ].map((v, i) => (
              <motion.div
                key={i} variants={fadeIn}
                className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-8 hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 text-primary">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to build?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Tell me about your business and I'll map out a custom automation plan — zero technical jargon, no hard sell.
          </p>
          <Link href="/get-started">
            <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-white/90 font-black shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Get Your Free Audit <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

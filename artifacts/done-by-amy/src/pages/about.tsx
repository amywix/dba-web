import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ChevronRight } from "lucide-react";
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
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
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

      <Footer />
    </div>
  );
}

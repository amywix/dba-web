import { Link } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { useSEO } from "@/hooks/use-seo";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { posts } from "@/data/blog-posts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function Blog() {
  useSEO({
    title: "Blog | Done By Amy — AI Automation for Australian Small Business",
    description:
      "Practical guides, case studies, and playbooks on AI automation, chatbots, missed call systems and workflow automation for Australian small businesses.",
    keywords:
      "AI automation blog Australia, small business automation guides, AI chatbot tips, workflow automation, missed call SMS, business productivity Australia",
    canonical: "https://donebya.my/blog",
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/15 rounded-full blur-[140px]" />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/40 text-primary text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" /> The Done By Amy Blog
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white mb-5 tracking-tight leading-[1.05]">
              Automation playbooks for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Aussie small business.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-xl mx-auto">
              Practical guides, real client case studies, and no-fluff advice on AI chatbots, missed call systems and workflow automation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-6">
            {posts.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <Link href={`/blog/${post.slug}`}>
                  <article
                    data-testid={`blog-card-${post.slug}`}
                    className="group block p-7 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-primary/40 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-5">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-bold text-sm">
                      Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] bg-background py-10 px-6 mt-16">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Done By Amy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useSEO } from "@/hooks/use-seo";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { posts } from "@/data/blog-posts";

const fadeIn: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger: Variants = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Blog() {
  useSEO({
    title: "Blog | Done By Amy",
    description: "Practical guides, case studies, and playbooks on AI automation for Australian small businesses.",
    canonical: "https://www.donebyamy.com/blog",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <div className="flex-1 pt-32 pb-24 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center mb-16">
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">The Playbook.</motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-xl mx-auto">
              Real guides and case studies on implementing AI automation in Australian small businesses. Zero fluff.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid gap-8">
            {posts.map((post) => (
              <motion.div key={post.slug} variants={fadeIn}>
                <Link href={`/blog/${post.slug}`}>
                  <article className="group block p-8 md:p-10 rounded-[32px] bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/[0.04] text-white">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-3 transition-all">
                      Read article <ArrowRight className="w-4 h-4 text-primary" />
                    </span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

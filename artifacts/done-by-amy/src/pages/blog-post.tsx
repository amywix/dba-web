import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { useSEO } from "@/hooks/use-seo";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import { getPost } from "@/data/blog-posts";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = getPost(slug);

  useSEO({
    title: post ? `${post.title} | Done By Amy` : "Blog Post | Done By Amy",
    description: post?.description ?? "",
    keywords: post?.keywords,
    canonical: post ? `https://donebya.my/blog/${post.slug}` : undefined,
  });

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <article className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto max-w-3xl relative z-10">
          <Link href="/blog">
            <span data-testid="back-to-blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> All articles
            </span>
          </Link>

          <motion.header initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-5">
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.08] mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <p className="mt-6 text-sm text-muted-foreground">By <span className="text-white font-semibold">{post.author}</span></p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="prose-custom space-y-5"
          >
            {post.content.map((block, i) => {
              if (block.type === "h2") return (
                <h2 key={i} className="text-2xl md:text-3xl font-black text-white tracking-tight mt-12 mb-2">{block.text}</h2>
              );
              if (block.type === "h3") return (
                <h3 key={i} className="text-xl font-bold text-white mt-8 mb-1">{block.text}</h3>
              );
              if (block.type === "p") return (
                <p key={i} className="text-base md:text-lg text-muted-foreground leading-[1.8]">{block.text}</p>
              );
              if (block.type === "ul") return (
                <ul key={i} className="list-disc pl-6 space-y-2 text-base md:text-lg text-muted-foreground leading-[1.7]">
                  {block.items.map((it, j) => <li key={j}>{it}</li>)}
                </ul>
              );
              if (block.type === "quote") return (
                <blockquote key={i} className="my-8 p-6 rounded-2xl bg-primary/[0.07] border-l-4 border-primary">
                  <p className="text-lg text-white font-medium leading-relaxed italic">"{block.text}"</p>
                  {block.cite && <footer className="mt-3 text-sm text-primary font-semibold">— {block.cite}</footer>}
                </blockquote>
              );
              return null;
            })}
          </motion.div>

          {/* CTA */}
          <div className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-b from-primary/15 to-white/[0.02] border border-primary/30 text-center">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
              Ready to stop doing it all yourself?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Get a free one-page automation audit for your business — no obligations, no jargon.
            </p>
            <Link href="/get-started">
              <Button
                data-testid="blog-post-cta"
                size="lg"
                className="h-14 px-9 rounded-full bg-white text-black hover:bg-white/90 font-black shadow-[0_0_60px_rgba(255,255,255,0.2)]"
              >
                Get Your Free Audit <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <footer className="border-t border-white/[0.06] bg-background py-10 px-6">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Done By Amy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

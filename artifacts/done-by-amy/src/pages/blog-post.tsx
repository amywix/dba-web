import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useSEO } from "@/hooks/use-seo";
import { ArrowLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import { getPost } from "@/data/blog-posts";
import type { ReactNode } from "react";

// Parses inline markdown links — [text](url) — so affiliate links can be dropped
// straight into any paragraph, heading, list item or quote in blog-posts.ts.
// External links get rel="sponsored noopener noreferrer" for affiliate compliance;
// internal links (starting with /) render as normal same-tab links.
function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const label = match[1];
    const href = match[2];
    const isInternal = href.startsWith("/");
    const isSafeExternal = /^https?:\/\//i.test(href) || /^(mailto:|tel:)/i.test(href);
    if (isInternal) {
      parts.push(<a key={key++} href={href}>{label}</a>);
    } else if (isSafeExternal) {
      parts.push(<a key={key++} href={href} target="_blank" rel="sponsored noopener noreferrer">{label}</a>);
    } else {
      // Disallowed scheme (e.g. javascript:/data:) — render the label as plain text.
      parts.push(label);
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = getPost(slug);

  useSEO({
    title: post ? `${post.title} | Done By Amy` : "Blog | Done By Amy",
    description: post?.description ?? "",
    keywords: post?.keywords,
    canonical: post ? `https://www.donebyamy.com/blog/${post.slug}` : undefined,
  });

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <article className="flex-1 pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto max-w-3xl relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-white transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to playbooks
          </Link>

          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-14">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-muted-foreground mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/[0.04] text-white">{post.category}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.1] mb-6">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
          </motion.header>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-primary/50 prose-blockquote:bg-white/[0.02] prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-li:marker:text-primary">
            {post.content.map((block, i) => {
              if (block.type === "h2") return <h2 key={i} className="text-3xl mt-12 mb-6 text-white">{renderInline(block.text)}</h2>;
              if (block.type === "h3") return <h3 key={i} className="text-xl mt-8 mb-4 text-white">{renderInline(block.text)}</h3>;
              if (block.type === "p") return <p key={i} className="text-muted-foreground leading-relaxed mb-6">{renderInline(block.text)}</p>;
              if (block.type === "ul") return (
                <ul key={i} className="list-disc pl-5 space-y-2 mb-8 text-muted-foreground">
                  {block.items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
                </ul>
              );
              if (block.type === "quote") return (
                <blockquote key={i} className="my-10 border-l-4 border-primary bg-white/[0.02] p-8 rounded-r-3xl">
                  <p className="text-white text-lg font-medium leading-relaxed m-0 mb-4">"{renderInline(block.text)}"</p>
                  {block.cite && <footer className="text-sm font-bold text-primary m-0">— {block.cite}</footer>}
                </blockquote>
              );
              return null;
            })}
          </motion.div>

          <div className="mt-16 sm:mt-20 p-6 sm:p-10 md:p-12 rounded-[32px] bg-white/[0.02] border border-white/[0.06] text-center">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">Ready to map out your own system?</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Get a free automation audit for your business. We'll show you exactly what to automate first.</p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-white/90 font-bold">
                Tell Us About Your Business <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

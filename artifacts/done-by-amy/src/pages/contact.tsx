import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Globe, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Please enter your message"),
});
type FormData = z.infer<typeof formSchema>;

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  useSEO({
    title: "Contact | Done By Amy",
    description: "Get in touch with Done By Amy for AI automation, LeadCatch, and custom workflow enquiries.",
    canonical: "https://www.donebyamy.com/contact",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <div className="flex-1 pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Let's connect.</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Questions about our services? Need support? We're here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
            
            {/* Contact Info Sidebar */}
            <motion.div initial="hidden" animate="visible" variants={{...fadeIn, visible: {...fadeIn.visible, transition: {delay: 0.1}}}} className="md:col-span-5 space-y-6">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-[24px] p-8">
                <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-white/70" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:admin@donebyamy.com" className="text-white hover:text-primary transition-colors text-sm font-medium">admin@donebyamy.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4 text-white/70" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Location</p>
                      <p className="text-white text-sm font-medium">Australia-wide (Remote)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-[24px] p-8 text-center md:text-left">
                <p className="text-sm text-white font-bold mb-2">Want a full business assessment?</p>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">Fill out the detailed intake form for a custom automation roadmap.</p>
                <Button asChild className="w-full bg-white text-black hover:bg-white/90 font-bold rounded-full h-12">
                  <Link href="/get-started">Start Free Audit</Link>
                </Button>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" animate="visible" variants={{...fadeIn, visible: {...fadeIn.visible, transition: {delay: 0.2}}}} className="md:col-span-7">
              {!submitted ? (
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-[24px] p-6 sm:p-8 md:p-10 shadow-xl">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem><FormLabel className="text-white/70">Name</FormLabel><FormControl><Input className="bg-background border-white/10 text-white h-12 rounded-xl" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel className="text-white/70">Email</FormLabel><FormControl><Input type="email" className="bg-background border-white/10 text-white h-12 rounded-xl" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="subject" render={({ field }) => (
                        <FormItem><FormLabel className="text-white/70">Subject</FormLabel><FormControl><Input className="bg-background border-white/10 text-white h-12 rounded-xl" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem><FormLabel className="text-white/70">Message</FormLabel><FormControl><Textarea className="bg-background border-white/10 text-white rounded-xl min-h-[160px] resize-none p-4" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                      )} />
                      {submitError && (
                        <p className="text-sm text-red-400 -mt-2">{submitError}</p>
                      )}
                      <Button type="submit" disabled={submitting} className="w-full h-12 rounded-xl bg-white text-black hover:bg-white/90 font-bold shadow-md disabled:opacity-60">
                        {submitting ? "Sending…" : <>Send Message <Send className="w-4 h-4 ml-2" /></>}
                      </Button>
                    </form>
                  </Form>
                </div>
              ) : (
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-[24px] p-8 sm:p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Message Received</h3>
                  <p className="text-muted-foreground mb-8">We'll get back to you within 1 business day.</p>
                  <Button asChild variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-white">
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

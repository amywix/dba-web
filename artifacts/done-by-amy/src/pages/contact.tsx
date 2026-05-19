import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Globe, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import logoMark from "@assets/ChatGPT_Image_May_14,_2026,_04_49_39_PM_-_Copy_1779201943316.png";
import daLogoWordmark from "@assets/da_logo_1779201943317.png";
import amyAvatar from "@assets/avatar_1779201943316.png";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(20, "Please enter at least 20 characters"),
});

type FormData = z.infer<typeof formSchema>;

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  useSEO({
    title: "Contact Done By Amy | AI Automation for Australian Businesses | TradieCatch Enquiries",
    description: "Get in touch with Done By Amy for AI automation, TradieCatch missed call systems, AutoDial AI calling, or workflow automation for your Australian small business. Responds within 1 business day.",
    keywords: "contact Done By Amy, TradieCatch enquiry, AI automation enquiry Australia, small business automation contact, hello@donebyamy.com.au",
    canonical: "https://donebya.my/contact",
  });

  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  function onSubmit(data: FormData) {
    console.log("Contact form submitted:", data);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Nav */}
      <Navbar />

      <div className="pt-36 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">

          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-primary/30 text-primary text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" /> Get in touch
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-5 tracking-tight">
              Let's talk about<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                your business.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Whether you have a quick question or you're ready to get started — Amy is here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-10 items-start">

            {/* Contact info */}
            <motion.div
              initial="hidden" animate="visible" variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.5, delay: 0.1, ease: "easeOut" } } }}
              className="md:col-span-2 space-y-6"
            >
              {/* Amy card */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center">
                <img src={amyAvatar} alt="Amy" className="h-36 object-contain mb-3" data-testid="contact-amy-avatar" />
                <h3 className="text-lg font-bold text-white">Amy</h3>
                <p className="text-sm text-muted-foreground">Founder & AI Automation Specialist</p>
                <p className="text-sm text-primary mt-1 font-medium">Responds within 1 business day</p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "hello@donebyamy.com.au", href: "mailto:hello@donebyamy.com.au" },
                  { icon: Globe, label: "Website", value: "donebya.my", href: "https://donebya.my" },
                  { icon: Phone, label: "Location", value: "Australia — serving businesses nationally", href: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} data-testid={`contact-link-${item.label.toLowerCase()}`} className="text-white hover:text-primary transition-colors text-sm font-medium">{item.value}</a>
                      ) : (
                        <p className="text-white text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
                <p className="text-sm text-white font-semibold mb-1">Want a full assessment?</p>
                <p className="text-xs text-muted-foreground mb-3">Fill out the business intake form for a detailed AI recommendations report.</p>
                <Link href="/get-started">
                  <Button data-testid="contact-intake-link" size="sm" className="w-full rounded-lg bg-primary hover:bg-primary/90 text-white text-xs">
                    Tell Us About Your Business
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial="hidden" animate="visible" variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.5, delay: 0.2, ease: "easeOut" } } }}
              className="md:col-span-3"
            >
              {!submitted ? (
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-2">Send a message</h2>
                  <p className="text-sm text-muted-foreground mb-8">Have a question or want to explore options? Drop Amy a message below.</p>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80 text-sm">Full name</FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="contact-input-name"
                                  placeholder="Jane Smith"
                                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 h-11 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80 text-sm">Email address</FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="contact-input-email"
                                  type="email"
                                  placeholder="jane@business.com.au"
                                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 h-11 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80 text-sm">Phone <span className="text-muted-foreground/60">(optional)</span></FormLabel>
                            <FormControl>
                              <Input
                                data-testid="contact-input-phone"
                                type="tel"
                                placeholder="04xx xxx xxx"
                                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 h-11 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80 text-sm">Subject</FormLabel>
                            <FormControl>
                              <Input
                                data-testid="contact-input-subject"
                                placeholder="e.g. Question about TradieCatch, Automation pricing..."
                                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 h-11 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80 text-sm">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                data-testid="contact-input-message"
                                placeholder="Tell me what's on your mind..."
                                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 rounded-xl min-h-[130px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        data-testid="contact-submit-button"
                        type="submit"
                        size="lg"
                        className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-bold shadow-[0_0_24px_rgba(168,85,247,0.35)]"
                      >
                        Send Message <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </Form>
                </div>
              ) : (
                <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message sent!</h3>
                  <p className="text-muted-foreground mb-6">Amy will get back to you within 1 business day.</p>
                  <Link href="/">
                    <Button data-testid="contact-back-home" variant="outline" className="rounded-full border-white/20 hover:bg-white/5">
                      Back to home
                    </Button>
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

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

import { useState } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion, type Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const serviceOptions = [
  "AI Automations", "AI Chatbot", "LeadCatch — Missed Call SMS", "AI Caller (AutoDial)", "Website", "App", "Not sure — help me decide"
];

const timeWasterOptions = [
  "Answering the same enquiries over and over", "Missed calls / chasing missed leads",
  "Sending quotes & invoices manually", "Chasing unpaid invoices",
  "Following up cold leads", "Booking & rescheduling appointments",
  "Copying info between spreadsheets / apps", "Replying to social media DMs",
  "Onboarding new clients", "Posting on social media"
];

const leadChannelOptions = [
  "Phone calls", "Website enquiries", "Facebook / Instagram DMs", "Email",
  "Word of mouth / referrals", "Google Maps / local search", "Walk-ins"
];

const automationWishlistOptions = [
  "Auto-reply to missed calls (SMS)", "AI chatbot on my website", "AI chatbot on Facebook/Instagram",
  "Auto-create invoices from completed jobs", "Auto-follow-up unpaid invoices",
  "Auto-book appointments into my calendar", "Sync data between my apps (Xero, CRM, etc.)",
  "AI outbound calling (AutoDial)", "Custom workflow / something not listed"
];

const formSchema = z.object({
  serviceInterest: z.string().min(1, "Please select a service"),
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  websiteUrl: z.string().optional(),
  businessName: z.string().min(2, "Please enter your business name"),
  currentTools: z.string().optional(),
  timeWasters: z.array(z.string()).min(1, "Pick at least one"),
  leadChannels: z.array(z.string()).min(1, "Pick at least one"),
  automationWishlist: z.array(z.string()).min(1, "Pick at least one"),
  anythingElse: z.string().optional(),
  hearAboutUs: z.string().optional(),
});
type FormData = z.infer<typeof formSchema>;

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function GetStarted() {
  useSEO({
    title: "Get Started | Done By Amy Automation Audit",
    description: "Tell Done By Amy about your business and get a tailored AI automation plan. Zero obligation, zero jargon.",
    keywords: "get started AI automation, LeadCatch sign up, AutoDial intake, automation quote Australia",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const search = useSearch();
  const serviceParam = new URLSearchParams(search).get("service") ?? "";

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceInterest: serviceParam, firstName: "", lastName: "", email: "", phone: "",
      websiteUrl: "", businessName: "", currentTools: "", timeWasters: [], leadChannels: [],
      automationWishlist: [], anythingElse: "", hearAboutUs: "",
    },
  });

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/get-started", {
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

      <div className="flex-1 pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 relative">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="container mx-auto max-w-3xl relative z-10">
          {!submitted ? (
            <>
              <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                  Tell us about your business.
                </h1>
                <p className="text-lg text-muted-foreground">
                  Fill in a few details and we'll map out exactly where automation can save you time and money. No obligations.
                </p>
              </motion.div>

              <motion.div
                initial="hidden" animate="visible" variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { delay: 0.1 } } }}
                className="bg-white/[0.02] border border-white/[0.06] rounded-[32px] p-6 sm:p-8 md:p-12 shadow-xl"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                    
                    {/* Section 1: Interest */}
                    <div>
                      <h2 className="text-lg font-bold text-white mb-4">What can we help you with?</h2>
                      <FormField
                        control={form.control} name="serviceInterest"
                        render={({ field }) => (
                          <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background border-white/10 text-white h-12 rounded-xl">
                                  <SelectValue placeholder="Select a service…" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-card border-white/10">
                                {serviceOptions.map((opt) => (
                                  <SelectItem key={opt} value={opt} className="text-white focus:bg-primary/20 focus:text-white cursor-pointer">{opt}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <hr className="border-white/[0.04]" />

                    {/* Section 2: Contact Details */}
                    <div>
                      <h2 className="text-lg font-bold text-white mb-6">Your details</h2>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField control={form.control} name="firstName" render={({ field }) => (
                          <FormItem><FormLabel className="text-white/70">First name</FormLabel><FormControl><Input className="bg-background border-white/10 h-12 rounded-xl text-white" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                        )} />
                        <FormField control={form.control} name="lastName" render={({ field }) => (
                          <FormItem><FormLabel className="text-white/70">Last name</FormLabel><FormControl><Input className="bg-background border-white/10 h-12 rounded-xl text-white" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel className="text-white/70">Email</FormLabel><FormControl><Input type="email" className="bg-background border-white/10 h-12 rounded-xl text-white" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem><FormLabel className="text-white/70">Phone</FormLabel><FormControl><Input type="tel" className="bg-background border-white/10 h-12 rounded-xl text-white" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                        )} />
                        <FormField control={form.control} name="businessName" render={({ field }) => (
                          <FormItem className="sm:col-span-2"><FormLabel className="text-white/70">Business name</FormLabel><FormControl><Input className="bg-background border-white/10 h-12 rounded-xl text-white" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                        )} />
                        <FormField control={form.control} name="websiteUrl" render={({ field }) => (
                          <FormItem className="sm:col-span-2"><FormLabel className="text-white/70">Website URL (optional)</FormLabel><FormControl><Input className="bg-background border-white/10 h-12 rounded-xl text-white" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                        )} />
                      </div>
                    </div>

                    <hr className="border-white/[0.04]" />

                    {/* Section 3: Workflow Checkboxes */}
                    <div className="space-y-10">
                      <div>
                        <h2 className="text-lg font-bold text-white mb-2">Your workflow</h2>
                        <p className="text-sm text-muted-foreground mb-6">Select all that apply to help us understand your bottlenecks.</p>
                      </div>

                      {/* Time Wasters */}
                      <FormField control={form.control} name="timeWasters" render={() => (
                        <FormItem>
                          <FormLabel className="text-white font-medium text-base mb-4 block">What's eating your time right now?</FormLabel>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {timeWasterOptions.map((opt) => (
                              <FormField key={opt} control={form.control} name="timeWasters" render={({ field }) => {
                                const checked = field.value?.includes(opt);
                                return (
                                  <FormItem className="m-0">
                                    <FormLabel className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${checked ? "bg-primary/10 border-primary text-white" : "bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20"}`}>
                                      <FormControl>
                                        <Checkbox 
                                          checked={checked} 
                                          onCheckedChange={(c) => field.onChange(c ? [...field.value, opt] : field.value.filter(v => v !== opt))}
                                          className="mt-0.5 border-white/30 data-[state=checked]:bg-primary data-[state=checked]:text-white"
                                        />
                                      </FormControl>
                                      <span className="text-sm font-normal leading-snug">{opt}</span>
                                    </FormLabel>
                                  </FormItem>
                                );
                              }} />
                            ))}
                          </div>
                          <FormMessage className="text-red-400 pt-2" />
                        </FormItem>
                      )} />

                      {/* Lead Channels */}
                      <FormField control={form.control} name="leadChannels" render={() => (
                        <FormItem>
                          <FormLabel className="text-white font-medium text-base mb-4 block">How do leads currently reach you?</FormLabel>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {leadChannelOptions.map((opt) => (
                              <FormField key={opt} control={form.control} name="leadChannels" render={({ field }) => {
                                const checked = field.value?.includes(opt);
                                return (
                                  <FormItem className="m-0">
                                    <FormLabel className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${checked ? "bg-primary/10 border-primary text-white" : "bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20"}`}>
                                      <FormControl>
                                        <Checkbox 
                                          checked={checked} 
                                          onCheckedChange={(c) => field.onChange(c ? [...field.value, opt] : field.value.filter(v => v !== opt))}
                                          className="mt-0.5 border-white/30 data-[state=checked]:bg-primary"
                                        />
                                      </FormControl>
                                      <span className="text-sm font-normal leading-snug">{opt}</span>
                                    </FormLabel>
                                  </FormItem>
                                );
                              }} />
                            ))}
                          </div>
                          <FormMessage className="text-red-400 pt-2" />
                        </FormItem>
                      )} />

                      {/* Automation Wishlist */}
                      <FormField control={form.control} name="automationWishlist" render={() => (
                        <FormItem>
                          <FormLabel className="text-white font-medium text-base mb-4 block">What would you most like to automate?</FormLabel>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {automationWishlistOptions.map((opt) => (
                              <FormField key={opt} control={form.control} name="automationWishlist" render={({ field }) => {
                                const checked = field.value?.includes(opt);
                                return (
                                  <FormItem className="m-0">
                                    <FormLabel className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${checked ? "bg-primary/10 border-primary text-white" : "bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20"}`}>
                                      <FormControl>
                                        <Checkbox 
                                          checked={checked} 
                                          onCheckedChange={(c) => field.onChange(c ? [...field.value, opt] : field.value.filter(v => v !== opt))}
                                          className="mt-0.5 border-white/30 data-[state=checked]:bg-primary"
                                        />
                                      </FormControl>
                                      <span className="text-sm font-normal leading-snug">{opt}</span>
                                    </FormLabel>
                                  </FormItem>
                                );
                              }} />
                            ))}
                          </div>
                          <FormMessage className="text-red-400 pt-2" />
                        </FormItem>
                      )} />
                    </div>

                    {submitError && (
                      <p className="text-sm text-red-400">{submitError}</p>
                    )}
                    <Button type="submit" size="lg" disabled={submitting} className="w-full h-14 rounded-xl bg-white text-black hover:bg-white/90 font-bold text-base shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-60">
                      {submitting ? "Sending…" : <>Submit Audit Request <ChevronRight className="w-5 h-5 ml-2" /></>}
                    </Button>
                  </form>
                </Form>
              </motion.div>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/[0.02] border border-white/[0.06] rounded-[32px] p-8 sm:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Audit Request Sent</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Thanks for reaching out. Amy will review your details and be in touch within 1 business day with your personalized automation roadmap.
              </p>
              <Button asChild variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-white h-12 px-8">
                <Link href="/">Return Home</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

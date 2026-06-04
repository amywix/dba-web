import { useState } from "react";
import { Link, useSearch } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion, type Variants } from "framer-motion";
import { useForm, type Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Bot, Workflow, CheckCircle2, ChevronRight } from "lucide-react";
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

const chatbotChannelOptions = [
  "My website", "Facebook Messenger", "Instagram DMs", "WhatsApp", "Google Business Profile",
];
const chatbotGoalOptions = [
  "Answer FAQs", "Qualify leads", "Book appointments", "Quote prices / services",
  "Capture contact details", "Take orders / payments", "Support multiple languages",
];
const enquiryVolumeOptions = [
  "Under 10 a week", "10–50 a week", "50–100 a week", "100+ a week", "Not sure",
];
const toneOptions = [
  "Professional & polished", "Friendly & casual", "Premium / luxury", "Match my existing brand",
];

const workflowTaskOptions = [
  "Invoicing & billing", "Quotes & proposals", "Lead follow-ups",
  "Appointment booking & reminders", "Data entry / syncing apps",
  "Email & SMS nurture campaigns", "Reporting & dashboards",
  "Client / staff onboarding", "Inventory / stock updates",
];
const hoursOptions = [
  "1–5 hrs", "5–10 hrs", "10–20 hrs", "20+ hrs", "Not sure",
];
const timelineOptions = [
  "ASAP", "Within 2–4 weeks", "1–2 months", "Just exploring",
];

const formSchema = z.object({
  enquiryType: z.string().min(1, "Please choose what you need"),
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  businessName: z.string().min(2, "Please enter your business name"),
  websiteUrl: z.string().optional(),
  // AI Chatbot
  channels: z.array(z.string()).default([]),
  chatbotGoals: z.array(z.string()).default([]),
  enquiryVolume: z.string().optional(),
  toneOfVoice: z.string().optional(),
  existingSystems: z.string().optional(),
  // AI Workflow
  tasksToAutomate: z.array(z.string()).default([]),
  toolsUsed: z.string().optional(),
  currentProcess: z.string().optional(),
  hoursPerWeek: z.string().optional(),
  peopleInvolved: z.string().optional(),
  // Common
  timeline: z.string().optional(),
  anythingElse: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.enquiryType === "AI Chatbot") {
    if (data.channels.length === 0)
      ctx.addIssue({ code: "custom", path: ["channels"], message: "Pick at least one" });
    if (data.chatbotGoals.length === 0)
      ctx.addIssue({ code: "custom", path: ["chatbotGoals"], message: "Pick at least one" });
    if (!data.enquiryVolume)
      ctx.addIssue({ code: "custom", path: ["enquiryVolume"], message: "Please select an option" });
    if (!data.toneOfVoice)
      ctx.addIssue({ code: "custom", path: ["toneOfVoice"], message: "Please select an option" });
  }
  if (data.enquiryType === "AI Workflow") {
    if (data.tasksToAutomate.length === 0)
      ctx.addIssue({ code: "custom", path: ["tasksToAutomate"], message: "Pick at least one" });
    if (!data.currentProcess || data.currentProcess.trim().length < 10)
      ctx.addIssue({ code: "custom", path: ["currentProcess"], message: "Tell us a little about how it works today" });
    if (!data.hoursPerWeek)
      ctx.addIssue({ code: "custom", path: ["hoursPerWeek"], message: "Please select an option" });
  }
});
type FormData = z.infer<typeof formSchema>;

type ArrayFieldName = "channels" | "chatbotGoals" | "tasksToAutomate";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const inputClass = "bg-background border-white/10 h-12 rounded-xl text-white";

function MultiSelectField({
  control, name, label, options,
}: {
  control: Control<FormData>;
  name: ArrayFieldName;
  label: string;
  options: string[];
}) {
  return (
    <FormField control={control} name={name} render={() => (
      <FormItem>
        <FormLabel className="text-white font-medium text-base mb-4 block">{label}</FormLabel>
        <div className="grid sm:grid-cols-2 gap-3">
          {options.map((opt) => (
            <FormField key={opt} control={control} name={name} render={({ field }) => {
              const value = field.value ?? [];
              const checked = value.includes(opt);
              return (
                <FormItem className="m-0">
                  <FormLabel className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${checked ? "bg-primary/10 border-primary text-white" : "bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20"}`}>
                    <FormControl>
                      <Checkbox
                        checked={checked}
                        onCheckedChange={(c) => field.onChange(c ? [...value, opt] : value.filter((v) => v !== opt))}
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
  );
}

function SelectField({
  control, name, label, placeholder, options,
}: {
  control: Control<FormData>;
  name: "enquiryVolume" | "toneOfVoice" | "hoursPerWeek" | "timeline";
  label: string;
  placeholder: string;
  options: string[];
}) {
  return (
    <FormField control={control} name={name} render={({ field }) => (
      <FormItem>
        <FormLabel className="text-white/70">{label}</FormLabel>
        <Select onValueChange={field.onChange} value={field.value ?? ""}>
          <FormControl>
            <SelectTrigger className="bg-background border-white/10 text-white h-12 rounded-xl">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent className="bg-card border-white/10">
            {options.map((opt) => (
              <SelectItem key={opt} value={opt} className="text-white focus:bg-primary/20 focus:text-white cursor-pointer">{opt}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormMessage className="text-red-400" />
      </FormItem>
    )} />
  );
}

function normaliseType(raw: string): string {
  const v = raw.toLowerCase();
  if (v.includes("chat")) return "AI Chatbot";
  if (v.includes("workflow") || v.includes("automation")) return "AI Workflow";
  return "";
}

export default function Enquiry() {
  useSEO({
    title: "Enquire | AI Chatbot & Workflow Intake — Done By Amy",
    description: "Tell us whether you want an AI chatbot or an automated workflow and we'll tailor the questions. Get a custom plan for your Aussie business.",
    keywords: "AI chatbot intake, AI workflow automation enquiry, automation quote Australia, chatbot for small business",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const search = useSearch();
  const typeParam = normaliseType(new URLSearchParams(search).get("type") ?? "");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      enquiryType: typeParam, firstName: "", lastName: "", email: "", phone: "",
      businessName: "", websiteUrl: "",
      channels: [], chatbotGoals: [], enquiryVolume: "", toneOfVoice: "", existingSystems: "",
      tasksToAutomate: [], toolsUsed: "", currentProcess: "", hoursPerWeek: "", peopleInvolved: "",
      timeline: "", anythingElse: "",
    },
  });

  const enquiryType = form.watch("enquiryType");

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/enquiry", {
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
                  Let's build the right thing.
                </h1>
                <p className="text-lg text-muted-foreground">
                  Pick what you're after and we'll ask the right questions. Either way, you'll get a tailored plan — no jargon, no obligation.
                </p>
              </motion.div>

              <motion.div
                initial="hidden" animate="visible" variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { delay: 0.1 } } }}
                className="bg-white/[0.02] border border-white/[0.06] rounded-[32px] p-6 sm:p-8 md:p-12 shadow-xl"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">

                    {/* Enquiry type selector */}
                    <div>
                      <h2 className="text-lg font-bold text-white mb-4">What are you after?</h2>
                      <FormField
                        control={form.control} name="enquiryType"
                        render={({ field }) => (
                          <FormItem>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-background border-white/10 text-white h-12 rounded-xl">
                                  <SelectValue placeholder="Choose an enquiry type…" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-card border-white/10">
                                <SelectItem value="AI Chatbot" className="text-white focus:bg-primary/20 focus:text-white cursor-pointer">
                                  AI Chatbot — answer &amp; book enquiries 24/7
                                </SelectItem>
                                <SelectItem value="AI Workflow" className="text-white focus:bg-primary/20 focus:text-white cursor-pointer">
                                  AI Workflow / Automation — automate manual tasks
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />

                      {enquiryType && (
                        <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                          {enquiryType === "AI Chatbot" ? (
                            <><Bot className="w-4 h-4 text-primary" /> A smart assistant that talks to your customers across web &amp; social.</>
                          ) : (
                            <><Workflow className="w-4 h-4 text-primary" /> Hands-off automations that do the repetitive admin for you.</>
                          )}
                        </div>
                      )}
                    </div>

                    {enquiryType && (
                      <>
                        <hr className="border-white/[0.04]" />

                        {/* Contact details */}
                        <div>
                          <h2 className="text-lg font-bold text-white mb-6">Your details</h2>
                          <div className="grid sm:grid-cols-2 gap-5">
                            <FormField control={form.control} name="firstName" render={({ field }) => (
                              <FormItem><FormLabel className="text-white/70">First name</FormLabel><FormControl><Input className={inputClass} {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                            )} />
                            <FormField control={form.control} name="lastName" render={({ field }) => (
                              <FormItem><FormLabel className="text-white/70">Last name</FormLabel><FormControl><Input className={inputClass} {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                            )} />
                            <FormField control={form.control} name="email" render={({ field }) => (
                              <FormItem><FormLabel className="text-white/70">Email</FormLabel><FormControl><Input type="email" className={inputClass} {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                            )} />
                            <FormField control={form.control} name="phone" render={({ field }) => (
                              <FormItem><FormLabel className="text-white/70">Phone</FormLabel><FormControl><Input type="tel" className={inputClass} {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                            )} />
                            <FormField control={form.control} name="businessName" render={({ field }) => (
                              <FormItem className="sm:col-span-2"><FormLabel className="text-white/70">Business name</FormLabel><FormControl><Input className={inputClass} {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                            )} />
                            <FormField control={form.control} name="websiteUrl" render={({ field }) => (
                              <FormItem className="sm:col-span-2"><FormLabel className="text-white/70">Website URL (optional)</FormLabel><FormControl><Input className={inputClass} {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                            )} />
                          </div>
                        </div>

                        <hr className="border-white/[0.04]" />

                        {/* AI Chatbot branch */}
                        {enquiryType === "AI Chatbot" && (
                          <div className="space-y-10">
                            <div>
                              <h2 className="text-lg font-bold text-white mb-2">About your chatbot</h2>
                              <p className="text-sm text-muted-foreground">Tell us where it should live and what it should handle.</p>
                            </div>
                            <MultiSelectField control={form.control} name="channels" label="Where should the chatbot live?" options={chatbotChannelOptions} />
                            <MultiSelectField control={form.control} name="chatbotGoals" label="What should it do for you?" options={chatbotGoalOptions} />
                            <div className="grid sm:grid-cols-2 gap-5">
                              <SelectField control={form.control} name="enquiryVolume" label="Roughly how many enquiries a week?" placeholder="Select a range…" options={enquiryVolumeOptions} />
                              <SelectField control={form.control} name="toneOfVoice" label="Tone of voice" placeholder="Select a tone…" options={toneOptions} />
                            </div>
                            <FormField control={form.control} name="existingSystems" render={({ field }) => (
                              <FormItem><FormLabel className="text-white/70">Existing website / booking system (optional)</FormLabel><FormControl><Input className={inputClass} placeholder="e.g. Squarespace, Calendly, Cliniko" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                            )} />
                          </div>
                        )}

                        {/* AI Workflow branch */}
                        {enquiryType === "AI Workflow" && (
                          <div className="space-y-10">
                            <div>
                              <h2 className="text-lg font-bold text-white mb-2">About your workflow</h2>
                              <p className="text-sm text-muted-foreground">Tell us what's eating your time and what tools you use.</p>
                            </div>
                            <MultiSelectField control={form.control} name="tasksToAutomate" label="What would you like to automate?" options={workflowTaskOptions} />
                            <FormField control={form.control} name="toolsUsed" render={({ field }) => (
                              <FormItem><FormLabel className="text-white/70">Which tools / apps do you use? (optional)</FormLabel><FormControl><Input className={inputClass} placeholder="e.g. Xero, HubSpot, Google Sheets, ServiceM8" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                            )} />
                            <FormField control={form.control} name="currentProcess" render={({ field }) => (
                              <FormItem><FormLabel className="text-white/70">How does this work today?</FormLabel><FormControl><Textarea className="bg-background border-white/10 text-white rounded-xl min-h-[140px] resize-none p-4" placeholder="Walk us through the manual steps you'd love to hand off…" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                            )} />
                            <div className="grid sm:grid-cols-2 gap-5">
                              <SelectField control={form.control} name="hoursPerWeek" label="Hours spent on this per week" placeholder="Select a range…" options={hoursOptions} />
                              <FormField control={form.control} name="peopleInvolved" render={({ field }) => (
                                <FormItem><FormLabel className="text-white/70">People involved (optional)</FormLabel><FormControl><Input className={inputClass} placeholder="e.g. just me, 2–3 staff" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                              )} />
                            </div>
                          </div>
                        )}

                        <hr className="border-white/[0.04]" />

                        {/* Common closing */}
                        <div className="space-y-5">
                          <SelectField control={form.control} name="timeline" label="Timeline (optional)" placeholder="When are you hoping to start?" options={timelineOptions} />
                          <FormField control={form.control} name="anythingElse" render={({ field }) => (
                            <FormItem><FormLabel className="text-white/70">Anything else we should know? (optional)</FormLabel><FormControl><Textarea className="bg-background border-white/10 text-white rounded-xl min-h-[120px] resize-none p-4" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                          )} />
                        </div>

                        {submitError && (
                          <p className="text-sm text-red-400">{submitError}</p>
                        )}
                        <Button type="submit" size="lg" disabled={submitting} className="w-full h-14 rounded-xl bg-white text-black hover:bg-white/90 font-bold text-base shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-60">
                          {submitting ? "Sending…" : <>Send Enquiry <ChevronRight className="w-5 h-5 ml-2" /></>}
                        </Button>
                      </>
                    )}
                  </form>
                </Form>
              </motion.div>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/[0.02] border border-white/[0.06] rounded-[32px] p-8 sm:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Enquiry Sent</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                Thanks for reaching out. Amy will review your details and be in touch within 1 business day with the next steps.
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

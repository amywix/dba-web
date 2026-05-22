import { useState } from "react";
import { useLocation, useSearch } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logoMark from "@assets/ChatGPT_Image_May_14,_2026,_04_49_39_PM_-_Copy_1779201943316.png";
import amyAvatar from "@assets/avatar_1779201943316.png";

const serviceOptions = [
  "AI Automations",
  "TradieCatch — Missed Call SMS",
  "AI Caller (AutoDial)",
  "Website",
  "App",
  "Not sure — help me decide",
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

const timeWasterOptions = [
  "Answering the same enquiries over and over",
  "Missed calls / chasing missed leads",
  "Sending quotes & invoices manually",
  "Chasing unpaid invoices",
  "Following up cold leads",
  "Booking & rescheduling appointments",
  "Copying info between spreadsheets / apps",
  "Replying to social media DMs",
  "Onboarding new clients",
  "Posting on social media",
];

const leadChannelOptions = [
  "Phone calls",
  "Website enquiries",
  "Facebook / Instagram DMs",
  "Email",
  "Word of mouth / referrals",
  "Google Maps / local search",
  "Walk-ins",
];

const automationWishlistOptions = [
  "Auto-reply to missed calls (SMS)",
  "AI chatbot on my website",
  "AI chatbot on Facebook/Instagram",
  "Auto-create invoices from completed jobs",
  "Auto-follow-up unpaid invoices",
  "Auto-book appointments into my calendar",
  "Sync data between my apps (Xero, CRM, etc.)",
  "AI outbound calling (AutoDial)",
  "Custom workflow / something not listed",
];

const hearAboutOptions = [
  "Google Search",
  "Facebook / Instagram",
  "LinkedIn",
  "Referral from a friend or colleague",
  "TradieCatch",
  "Other",
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function GetStarted() {
  useSEO({
    title: "Get Started with AI Automation | Done By Amy | TradieCatch & AutoDial",
    description: "Tell Done By Amy about your business and get a tailored AI automation plan. Covering TradieCatch missed call systems, AutoDial AI calling, chatbots, and workflow automations for Australian small businesses.",
    keywords: "get started AI automation Australia, TradieCatch sign up, AutoDial AI calling Australia, AI chatbot setup Australia, Done By Amy intake form, small business automation quote Australia",
    canonical: "https://www.donebyamy.com/get-started",
  });

  const [, setLocation] = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const search = useSearch();
  const serviceParam = new URLSearchParams(search).get("service") ?? "";

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceInterest: serviceParam,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      websiteUrl: "",
      businessName: "",
      currentTools: "",
      timeWasters: [],
      leadChannels: [],
      automationWishlist: [],
      anythingElse: "",
      hearAboutUs: "",
    },
  });

  function onSubmit(data: FormData) {
    console.log("Form submitted:", data);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <Navbar />

      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-3xl">

          {!submitted ? (
            <>
              {/* Header */}
              <motion.div
                initial="hidden" animate="visible" variants={fadeIn}
                className="text-center mb-14"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-primary/30 text-primary text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" /> 100% Free — No Obligation
                </div>
                <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5 tracking-tight">
                  Get your free<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Automation Audit today.
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Fill in a few details and Amy will personally review your business and map out exactly where automation can save you time and money.
                </p>
              </motion.div>

              <motion.div
                initial="hidden" animate="visible" variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.5, delay: 0.15, ease: "easeOut" } } }}
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">

                    {/* Service Interest */}
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">What can we help you with?</h2>
                      <p className="text-sm text-muted-foreground mb-6">Select the service you're most interested in.</p>
                      <FormField
                        control={form.control}
                        name="serviceInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">I'm interested in</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service-interest" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary/60">
                                  <SelectValue placeholder="Select a service…" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-card border-white/10">
                                {serviceOptions.map((opt) => (
                                  <SelectItem key={opt} value={opt} className="text-white focus:bg-primary/20">{opt}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="border-t border-white/5" />

                    {/* Section 1 — Contact Details */}
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">Your contact details</h2>
                      <p className="text-sm text-muted-foreground mb-6">How should Amy get back to you?</p>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">First name</FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-first-name"
                                  placeholder="Jane"
                                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 h-12 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">Last name</FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-last-name"
                                  placeholder="Smith"
                                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 h-12 rounded-xl"
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
                              <FormLabel className="text-white/80">Email address</FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-email"
                                  type="email"
                                  placeholder="jane@yourbusiness.com.au"
                                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 h-12 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">Phone number</FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-phone"
                                  type="tel"
                                  placeholder="04xx xxx xxx"
                                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 h-12 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="businessName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">Business name</FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-business-name"
                                  placeholder="Smith Plumbing Pty Ltd"
                                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 h-12 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="websiteUrl"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">Website URL <span className="text-muted-foreground/60">(optional)</span></FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-website-url"
                                  placeholder="www.mybusiness.com.au"
                                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 h-12 rounded-xl"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="border-t border-white/5" />

                    {/* Section — Your workflow (checkbox-based) */}
                    <div className="space-y-10">
                      <div>
                        <h2 className="text-xl font-bold text-white mb-1">Your workflow</h2>
                        <p className="text-sm text-muted-foreground mb-6">Just tick what applies — takes 30 seconds.</p>
                      </div>

                      {/* Time wasters */}
                      <FormField
                        control={form.control}
                        name="timeWasters"
                        render={() => (
                          <FormItem>
                            <FormLabel className="text-white/90 text-base font-semibold">What's eating your time right now? <span className="text-muted-foreground/60 font-normal text-sm">(tick all that apply)</span></FormLabel>
                            <div className="grid sm:grid-cols-2 gap-2 mt-3">
                              {timeWasterOptions.map((opt) => (
                                <FormField
                                  key={opt}
                                  control={form.control}
                                  name="timeWasters"
                                  render={({ field }) => {
                                    const checked = field.value?.includes(opt);
                                    return (
                                      <FormItem className="m-0">
                                        <FormLabel
                                          className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                                            checked
                                              ? "bg-primary/15 border-primary/50 text-white"
                                              : "bg-white/[0.03] border-white/10 text-white/80 hover:border-white/20"
                                          }`}
                                        >
                                          <FormControl>
                                            <Checkbox
                                              data-testid={`checkbox-timewaster-${opt}`}
                                              checked={checked}
                                              onCheckedChange={(c) => {
                                                const next = c
                                                  ? [...(field.value ?? []), opt]
                                                  : (field.value ?? []).filter((v: string) => v !== opt);
                                                field.onChange(next);
                                              }}
                                              className="mt-0.5 border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                            />
                                          </FormControl>
                                          <span className="text-sm font-normal leading-snug">{opt}</span>
                                        </FormLabel>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Lead channels */}
                      <FormField
                        control={form.control}
                        name="leadChannels"
                        render={() => (
                          <FormItem>
                            <FormLabel className="text-white/90 text-base font-semibold">How do leads currently reach you? <span className="text-muted-foreground/60 font-normal text-sm">(tick all that apply)</span></FormLabel>
                            <div className="grid sm:grid-cols-2 gap-2 mt-3">
                              {leadChannelOptions.map((opt) => (
                                <FormField
                                  key={opt}
                                  control={form.control}
                                  name="leadChannels"
                                  render={({ field }) => {
                                    const checked = field.value?.includes(opt);
                                    return (
                                      <FormItem className="m-0">
                                        <FormLabel
                                          className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                                            checked
                                              ? "bg-primary/15 border-primary/50 text-white"
                                              : "bg-white/[0.03] border-white/10 text-white/80 hover:border-white/20"
                                          }`}
                                        >
                                          <FormControl>
                                            <Checkbox
                                              data-testid={`checkbox-leadchannel-${opt}`}
                                              checked={checked}
                                              onCheckedChange={(c) => {
                                                const next = c
                                                  ? [...(field.value ?? []), opt]
                                                  : (field.value ?? []).filter((v: string) => v !== opt);
                                                field.onChange(next);
                                              }}
                                              className="mt-0.5 border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                            />
                                          </FormControl>
                                          <span className="text-sm font-normal leading-snug">{opt}</span>
                                        </FormLabel>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Automation wishlist */}
                      <FormField
                        control={form.control}
                        name="automationWishlist"
                        render={() => (
                          <FormItem>
                            <FormLabel className="text-white/90 text-base font-semibold">What would you most like to automate? <span className="text-muted-foreground/60 font-normal text-sm">(tick all that apply)</span></FormLabel>
                            <div className="grid sm:grid-cols-2 gap-2 mt-3">
                              {automationWishlistOptions.map((opt) => (
                                <FormField
                                  key={opt}
                                  control={form.control}
                                  name="automationWishlist"
                                  render={({ field }) => {
                                    const checked = field.value?.includes(opt);
                                    return (
                                      <FormItem className="m-0">
                                        <FormLabel
                                          className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                                            checked
                                              ? "bg-primary/15 border-primary/50 text-white"
                                              : "bg-white/[0.03] border-white/10 text-white/80 hover:border-white/20"
                                          }`}
                                        >
                                          <FormControl>
                                            <Checkbox
                                              data-testid={`checkbox-wishlist-${opt}`}
                                              checked={checked}
                                              onCheckedChange={(c) => {
                                                const next = c
                                                  ? [...(field.value ?? []), opt]
                                                  : (field.value ?? []).filter((v: string) => v !== opt);
                                                field.onChange(next);
                                              }}
                                              className="mt-0.5 border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                            />
                                          </FormControl>
                                          <span className="text-sm font-normal leading-snug">{opt}</span>
                                        </FormLabel>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="currentTools"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">What tools or software do you currently use? <span className="text-muted-foreground/60">(optional)</span></FormLabel>
                            <FormControl>
                              <Input
                                data-testid="input-current-tools"
                                placeholder="e.g. ServiceM8, Xero, Mailchimp, Google Workspace, HubSpot..."
                                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 h-12 rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="anythingElse"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Anything else we should know? <span className="text-muted-foreground/60">(optional)</span></FormLabel>
                            <FormControl>
                              <Textarea
                                data-testid="textarea-anything-else"
                                placeholder="e.g. Specific deadline, a custom workflow you have in mind, the one thing that would change everything for you..."
                                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 rounded-xl min-h-[90px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="border-t border-white/5" />

                    {/* Section 4 — How did you hear */}
                    <div>
                      <FormField
                        control={form.control}
                        name="hearAboutUs"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">How did you hear about Done By Amy? <span className="text-muted-foreground/60">(optional)</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-hear-about-us" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary/60">
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-card border-white/10">
                                {hearAboutOptions.map((opt) => (
                                  <SelectItem key={opt} value={opt} className="text-white focus:bg-primary/20">{opt}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      data-testid="button-submit-form"
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-lg font-bold rounded-2xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all"
                    >
                      Send My Business Details <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <p className="text-center text-sm text-muted-foreground/60">
                      Amy personally reviews every submission and will be in touch within 1 business day.
                    </p>
                  </form>
                </Form>
              </motion.div>
            </>
          ) : (
            /* Success State */
            <motion.div
              initial="hidden" animate="visible" variants={fadeIn}
              className="text-center py-16"
            >
              <div className="flex justify-center mb-8">
                <img src={amyAvatar} alt="Amy Avatar" className="h-48 object-contain drop-shadow-2xl" />
              </div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border border-primary/40 mb-6 mx-auto">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Got it — thanks!
              </h2>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-10">
                Amy will review your details and reach out within 1 business day with tailored AI recommendations for your business.
              </p>
              <Button
                data-testid="back-home-success-button"
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 hover:bg-white/5 text-white"
                onClick={() => setLocation("/")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useLocation } from "wouter";
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

const formSchema = z.object({
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  businessName: z.string().min(2, "Please enter your business name"),
  industry: z.string().min(1, "Please select your industry"),
  businessSize: z.string().min(1, "Please select your team size"),
  currentTools: z.string().optional(),
  biggestChallenge: z.string().min(20, "Please describe your challenge in at least 20 characters"),
  automationGoals: z.string().min(20, "Please describe your goals in at least 20 characters"),
  monthlyRevenue: z.string().optional(),
  hearAboutUs: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const industries = [
  "Trades & Construction",
  "Real Estate",
  "Allied Health & Clinics",
  "Coaching & Consulting",
  "Hospitality & Cafes",
  "Retail & eCommerce",
  "Legal & Professional Services",
  "Beauty & Wellness",
  "Education & Training",
  "Finance & Accounting",
  "Other",
];

const businessSizes = [
  "Just me (solo operator)",
  "2–5 team members",
  "6–15 team members",
  "16–50 team members",
  "50+ team members",
];

const revenueRanges = [
  "Under $100k/year",
  "$100k – $250k/year",
  "$250k – $500k/year",
  "$500k – $1M/year",
  "Over $1M/year",
  "Prefer not to say",
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
    canonical: "https://donebya.my/get-started",
  });

  const [, setLocation] = useLocation();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      businessName: "",
      industry: "",
      businessSize: "",
      currentTools: "",
      biggestChallenge: "",
      automationGoals: "",
      monthlyRevenue: "",
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
                  <Zap className="w-4 h-4" /> Free AI Strategy Assessment
                </div>
                <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5 tracking-tight">
                  Tell us about<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    your business.
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  The more we know, the better we can tailor the right AI systems for your exact situation. Takes about 3 minutes.
                </p>
              </motion.div>

              <motion.div
                initial="hidden" animate="visible" variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.5, delay: 0.15, ease: "easeOut" } } }}
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
              >
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">

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
                      </div>
                    </div>

                    <div className="border-t border-white/5" />

                    {/* Section 2 — Business Info */}
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">About your business</h2>
                      <p className="text-sm text-muted-foreground mb-6">Help us understand your setup.</p>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="businessName"
                          render={({ field }) => (
                            <FormItem className="sm:col-span-2">
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
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">Industry</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-industry" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary/60">
                                    <SelectValue placeholder="Select your industry" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-card border-white/10">
                                  {industries.map((ind) => (
                                    <SelectItem key={ind} value={ind} className="text-white focus:bg-primary/20">{ind}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="businessSize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">Team size</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-business-size" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary/60">
                                    <SelectValue placeholder="Select team size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-card border-white/10">
                                  {businessSizes.map((size) => (
                                    <SelectItem key={size} value={size} className="text-white focus:bg-primary/20">{size}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="monthlyRevenue"
                          render={({ field }) => (
                            <FormItem className="sm:col-span-2">
                              <FormLabel className="text-white/80">Annual revenue <span className="text-muted-foreground/60">(optional)</span></FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-revenue" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary/60">
                                    <SelectValue placeholder="Select a range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-card border-white/10">
                                  {revenueRanges.map((r) => (
                                    <SelectItem key={r} value={r} className="text-white focus:bg-primary/20">{r}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="border-t border-white/5" />

                    {/* Section 3 — Automation needs */}
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">Your automation needs</h2>
                      <p className="text-sm text-muted-foreground mb-6">This is where the magic happens — be as specific as you like.</p>
                      <div className="space-y-5">
                        <FormField
                          control={form.control}
                          name="biggestChallenge"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">What is your biggest day-to-day challenge right now?</FormLabel>
                              <FormControl>
                                <Textarea
                                  data-testid="textarea-challenge"
                                  placeholder="e.g. I miss calls when I'm on a job, and I lose leads because I can't reply straight away. I also spend hours every week following up quotes manually..."
                                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 rounded-xl min-h-[110px] resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="automationGoals"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white/80">What would you most like to automate or improve?</FormLabel>
                              <FormControl>
                                <Textarea
                                  data-testid="textarea-goals"
                                  placeholder="e.g. Automatically reply to missed calls, send appointment reminders, follow up leads, connect my booking system to my invoicing..."
                                  className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 rounded-xl min-h-[110px] resize-none"
                                  {...field}
                                />
                              </FormControl>
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
                      </div>
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

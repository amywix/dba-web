import { useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Lock,
  ExternalLink,
} from "lucide-react";
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

/* ──────────────────────────────────────────────────────────────
   PAYMENT LINKS — paste your own Stripe / PayPal links below.
   Leave a field as "" and its button stays disabled until you add it.
   ────────────────────────────────────────────────────────────── */
type PlanId = "standard" | "advanced";

const PLANS: Record<
  PlanId,
  {
    name: string;
    monthly: number;
    setup: number;
    blurb: string;
    features: string[];
    setupPaymentUrl: string;
    subscriptionPaymentUrl: string;
  }
> = {
  standard: {
    name: "Standard",
    monthly: 199,
    setup: 399,
    blurb: "Everything a growing business needs to stop missing leads.",
    features: [
      "AI chatbot on your website",
      "Missed-call SMS auto-reply",
      "Lead capture & instant notifications",
      "Email + chat support",
    ],
    setupPaymentUrl: "", // ← paste your $399 setup-fee link
    subscriptionPaymentUrl: "", // ← paste your $199/mo subscription link
  },
  advanced: {
    name: "Advanced",
    monthly: 499,
    setup: 999,
    blurb: "Full automation suite with AI calling and custom workflows.",
    features: [
      "Everything in Standard",
      "AI outbound calling (AutoDial)",
      "Custom workflows & app integrations",
      "Priority support & monthly optimisation",
    ],
    setupPaymentUrl: "", // ← paste your $999 setup-fee link
    subscriptionPaymentUrl: "", // ← paste your $499/mo subscription link
  },
};

const serviceOptions = [
  "AI chatbot on my website",
  "AI chatbot on Facebook / Instagram",
  "Missed-call SMS auto-reply",
  "AI outbound calling (AutoDial)",
  "Auto-book appointments",
  "Auto-create / chase invoices",
  "Sync data between my apps",
  "Custom workflow (describe below)",
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

const websitePlatforms = [
  "WordPress",
  "Wix",
  "Squarespace",
  "Shopify",
  "Webflow",
  "GoDaddy",
  "Custom / coded site",
  "I don't have a website yet",
  "Not sure",
];

const formSchema = z.object({
  plan: z.enum(["standard", "advanced"], {
    message: "Please choose a plan",
  }),
  businessName: z.string().min(2, "Please enter your business name"),
  contactName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  website: z.string().optional(),
  industry: z.string().optional(),
  location: z.string().optional(),
  goals: z.string().min(5, "Tell us a little about what you want to achieve"),
  services: z.array(z.string()).min(1, "Pick at least one"),
  currentTools: z.string().optional(),
  leadChannels: z.array(z.string()).min(1, "Pick at least one"),
  bookingSystem: z.string().optional(),
  brandColours: z.string().optional(),
  toneOfVoice: z.string().optional(),
  mustKnow: z.string().optional(),
  avoid: z.string().optional(),
  websitePlatform: z.string().optional(),
  pageLocation: z.string().optional(),
  accessNotes: z.string().optional(),
  anythingElse: z.string().optional(),
});
type FormData = z.infer<typeof formSchema>;

type StepKey = keyof FormData;
const STEP_FIELDS: StepKey[][] = [
  ["plan"],
  ["businessName", "contactName", "email", "phone", "website", "industry", "location"],
  ["goals", "services"],
  ["currentTools", "leadChannels", "bookingSystem"],
  ["brandColours", "toneOfVoice", "mustKnow", "avoid"],
  ["websitePlatform", "pageLocation", "accessNotes", "anythingElse"],
];

const STEP_TITLES = [
  "Choose your plan",
  "About your business",
  "What you want to automate",
  "Your current setup",
  "Branding & tone",
  "Access & final details",
  "Review & confirm",
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const inputCls =
  "bg-background border-white/10 h-12 rounded-xl text-white";
const labelCls = "text-white/70";

function CheckboxGroup({
  form,
  name,
  options,
}: {
  form: ReturnType<typeof useForm<FormData>>;
  name: "services" | "leadChannels";
  options: string[];
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <div className="grid sm:grid-cols-2 gap-3">
            {options.map((opt) => (
              <FormField
                key={opt}
                control={form.control}
                name={name}
                render={({ field }) => {
                  const checked = (field.value as string[])?.includes(opt);
                  return (
                    <FormItem className="m-0">
                      <FormLabel
                        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                          checked
                            ? "bg-primary/10 border-primary text-white"
                            : "bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20"
                        }`}
                      >
                        <FormControl>
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(c) =>
                              field.onChange(
                                c
                                  ? [...(field.value as string[]), opt]
                                  : (field.value as string[]).filter((v) => v !== opt),
                              )
                            }
                            className="mt-0.5 border-white/30 data-[state=checked]:bg-primary data-[state=checked]:text-white"
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
          <FormMessage className="text-red-400 pt-2" />
        </FormItem>
      )}
    />
  );
}

export default function Onboarding() {
  useSEO({
    title: "Client Onboarding | Done By Amy",
    description: "Private onboarding for new Done By Amy clients.",
    noindex: true,
  });

  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [paid, setPaid] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      plan: undefined as unknown as PlanId,
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      industry: "",
      location: "",
      goals: "",
      services: [],
      currentTools: "",
      leadChannels: [],
      bookingSystem: "",
      brandColours: "",
      toneOfVoice: "",
      mustKnow: "",
      avoid: "",
      websitePlatform: "",
      pageLocation: "",
      accessNotes: "",
      anythingElse: "",
    },
  });

  const totalSteps = STEP_TITLES.length; // includes review
  const selectedPlan = form.watch("plan");

  async function next() {
    const fields = STEP_FIELDS[step];
    if (fields) {
      const ok = await form.trigger(fields);
      if (!ok) return;
    }
    setStep((s) => Math.min(s + 1, totalSteps - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function onSubmit(data: FormData) {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }
      setStep(totalSteps); // move to payment step
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const onPaymentStep = step === totalSteps;
  const progress = onPaymentStep
    ? 100
    : Math.round(((step + 1) / (totalSteps + 1)) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <div className="flex-1 pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 relative">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto max-w-3xl relative z-10">
          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary mb-4">
              <Lock className="w-3 h-3" /> Private client onboarding
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              {paid
                ? "You're all set 🎉"
                : onPaymentStep
                  ? "Last step — payment"
                  : "Let's get you set up."}
            </h1>
            {!onPaymentStep && !paid && (
              <p className="text-lg text-muted-foreground mt-3">
                A few quick questions so we can build your automation exactly the way
                your business needs it.
              </p>
            )}
          </motion.div>

          {/* Progress bar */}
          {!paid && (
            <div className="mb-10">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span>
                  {onPaymentStep
                    ? "Payment"
                    : `Step ${step + 1} of ${totalSteps} · ${STEP_TITLES[step]}`}
                </span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={false}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>
          )}

          <div className="bg-white/[0.02] border border-white/[0.06] rounded-[32px] p-6 sm:p-8 md:p-10 shadow-xl">
            {paid ? (
              <PaidScreen />
            ) : onPaymentStep ? (
              <PaymentScreen
                plan={selectedPlan}
                onPaid={() => setPaid(true)}
              />
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* STEP 0 — Plan */}
                      {step === 0 && (
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="plan"
                            render={({ field }) => (
                              <FormItem>
                                <div className="grid sm:grid-cols-2 gap-4">
                                  {(Object.keys(PLANS) as PlanId[]).map((id) => {
                                    const p = PLANS[id];
                                    const active = field.value === id;
                                    return (
                                      <button
                                        type="button"
                                        key={id}
                                        onClick={() => field.onChange(id)}
                                        className={`text-left p-6 rounded-2xl border transition-all ${
                                          active
                                            ? "bg-primary/10 border-primary shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                                            : "bg-white/[0.02] border-white/10 hover:border-white/25"
                                        }`}
                                      >
                                        <div className="flex items-center justify-between mb-2">
                                          <span className="text-lg font-bold text-white">
                                            {p.name}
                                          </span>
                                          {active && (
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                          )}
                                        </div>
                                        <div className="text-white mb-1">
                                          <span className="text-3xl font-black">
                                            ${p.monthly}
                                          </span>
                                          <span className="text-muted-foreground text-sm">
                                            {" "}
                                            /mo
                                          </span>
                                        </div>
                                        <div className="text-xs text-muted-foreground mb-4">
                                          + ${p.setup} one-off setup
                                        </div>
                                        <p className="text-sm text-white/70 mb-4">
                                          {p.blurb}
                                        </p>
                                        <ul className="space-y-2">
                                          {p.features.map((f) => (
                                            <li
                                              key={f}
                                              className="flex items-start gap-2 text-sm text-white/70"
                                            >
                                              <Sparkles className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
                                              {f}
                                            </li>
                                          ))}
                                        </ul>
                                      </button>
                                    );
                                  })}
                                </div>
                                <FormMessage className="text-red-400 pt-2" />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {/* STEP 1 — Business */}
                      {step === 1 && (
                        <div className="grid sm:grid-cols-2 gap-5">
                          <FormField control={form.control} name="businessName" render={({ field }) => (
                            <FormItem className="sm:col-span-2"><FormLabel className={labelCls}>Business name</FormLabel><FormControl><Input className={inputCls} {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                          )} />
                          <FormField control={form.control} name="contactName" render={({ field }) => (
                            <FormItem><FormLabel className={labelCls}>Your name</FormLabel><FormControl><Input className={inputCls} {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                          )} />
                          <FormField control={form.control} name="phone" render={({ field }) => (
                            <FormItem><FormLabel className={labelCls}>Phone</FormLabel><FormControl><Input type="tel" className={inputCls} {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                          )} />
                          <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem><FormLabel className={labelCls}>Email</FormLabel><FormControl><Input type="email" className={inputCls} {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                          )} />
                          <FormField control={form.control} name="website" render={({ field }) => (
                            <FormItem><FormLabel className={labelCls}>Website (optional)</FormLabel><FormControl><Input className={inputCls} placeholder="https://" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                          )} />
                          <FormField control={form.control} name="industry" render={({ field }) => (
                            <FormItem><FormLabel className={labelCls}>Industry (optional)</FormLabel><FormControl><Input className={inputCls} placeholder="e.g. Plumbing, Dental" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                          )} />
                          <FormField control={form.control} name="location" render={({ field }) => (
                            <FormItem><FormLabel className={labelCls}>Location (optional)</FormLabel><FormControl><Input className={inputCls} placeholder="e.g. Brisbane, QLD" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                          )} />
                        </div>
                      )}

                      {/* STEP 2 — What to automate */}
                      {step === 2 && (
                        <div className="space-y-8">
                          <FormField control={form.control} name="goals" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white font-medium text-base">What do you most want to achieve?</FormLabel>
                              <FormControl><Textarea rows={4} className="bg-background border-white/10 rounded-xl text-white" placeholder="e.g. Stop missing after-hours calls and book more jobs automatically." {...field} /></FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                          <div>
                            <FormLabel className="text-white font-medium text-base mb-4 block">Which of these should we set up?</FormLabel>
                            <CheckboxGroup form={form} name="services" options={serviceOptions} />
                          </div>
                        </div>
                      )}

                      {/* STEP 3 — Current setup */}
                      {step === 3 && (
                        <div className="space-y-8">
                          <div>
                            <FormLabel className="text-white font-medium text-base mb-4 block">How do leads currently reach you?</FormLabel>
                            <CheckboxGroup form={form} name="leadChannels" options={leadChannelOptions} />
                          </div>
                          <FormField control={form.control} name="currentTools" render={({ field }) => (
                            <FormItem>
                              <FormLabel className={labelCls}>What tools / software do you already use? (optional)</FormLabel>
                              <FormControl><Textarea rows={3} className="bg-background border-white/10 rounded-xl text-white" placeholder="e.g. Xero, HubSpot, Google Calendar, Cliniko…" {...field} /></FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="bookingSystem" render={({ field }) => (
                            <FormItem>
                              <FormLabel className={labelCls}>Booking / calendar system (optional)</FormLabel>
                              <FormControl><Input className={inputCls} placeholder="e.g. Calendly, Google Calendar" {...field} /></FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                        </div>
                      )}

                      {/* STEP 4 — Branding */}
                      {step === 4 && (
                        <div className="space-y-6">
                          <div className="grid sm:grid-cols-2 gap-5">
                            <FormField control={form.control} name="brandColours" render={({ field }) => (
                              <FormItem><FormLabel className={labelCls}>Brand colours (optional)</FormLabel><FormControl><Input className={inputCls} placeholder="e.g. navy & gold, or hex codes" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                            )} />
                            <FormField control={form.control} name="toneOfVoice" render={({ field }) => (
                              <FormItem><FormLabel className={labelCls}>Tone of voice (optional)</FormLabel><FormControl><Input className={inputCls} placeholder="e.g. friendly & casual, professional" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                            )} />
                          </div>
                          <FormField control={form.control} name="mustKnow" render={({ field }) => (
                            <FormItem>
                              <FormLabel className={labelCls}>Key info the assistant must know (optional)</FormLabel>
                              <FormControl><Textarea rows={3} className="bg-background border-white/10 rounded-xl text-white" placeholder="Opening hours, services, pricing, service areas, FAQs…" {...field} /></FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="avoid" render={({ field }) => (
                            <FormItem>
                              <FormLabel className={labelCls}>Anything it should avoid saying? (optional)</FormLabel>
                              <FormControl><Textarea rows={2} className="bg-background border-white/10 rounded-xl text-white" placeholder="e.g. never quote exact prices, don't promise same-day service" {...field} /></FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                        </div>
                      )}

                      {/* STEP 5 — Access */}
                      {step === 5 && (
                        <div className="space-y-6">
                          <FormField control={form.control} name="websitePlatform" render={({ field }) => (
                            <FormItem>
                              <FormLabel className={labelCls}>What is your website built on?</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-background border-white/10 text-white h-12 rounded-xl"><SelectValue placeholder="Select…" /></SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-card border-white/10">
                                  {websitePlatforms.map((p) => (
                                    <SelectItem key={p} value={p} className="text-white focus:bg-primary/20 focus:text-white cursor-pointer">{p}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="pageLocation" render={({ field }) => (
                            <FormItem>
                              <FormLabel className={labelCls}>Where should it go? (optional)</FormLabel>
                              <FormControl><Input className={inputCls} placeholder="e.g. every page, just the contact page" {...field} /></FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="accessNotes" render={({ field }) => (
                            <FormItem>
                              <FormLabel className={labelCls}>How will you give us access?</FormLabel>
                              <FormControl><Textarea rows={3} className="bg-background border-white/10 rounded-xl text-white" placeholder="e.g. I'll add you as an admin, or we can jump on a call." {...field} /></FormControl>
                              <p className="text-xs text-muted-foreground mt-2">Please don't enter passwords here — we'll arrange secure access after you sign up.</p>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="anythingElse" render={({ field }) => (
                            <FormItem>
                              <FormLabel className={labelCls}>Anything else we should know? (optional)</FormLabel>
                              <FormControl><Textarea rows={3} className="bg-background border-white/10 rounded-xl text-white" {...field} /></FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )} />
                        </div>
                      )}

                      {/* STEP 6 — Review */}
                      {step === 6 && (
                        <ReviewScreen form={form} />
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {submitError && (
                    <p className="text-sm text-red-400 mt-6">{submitError}</p>
                  )}

                  {/* Nav buttons */}
                  <div className="flex items-center gap-3 mt-10">
                    {step > 0 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={back}
                        className="h-12 px-6 rounded-xl border-white/10 hover:bg-white/5 text-white"
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back
                      </Button>
                    )}
                    {step < totalSteps - 1 ? (
                      <Button
                        type="button"
                        onClick={next}
                        className="flex-1 h-12 rounded-xl bg-white text-black hover:bg-white/90 font-bold"
                      >
                        Continue <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={submitting}
                        className="flex-1 h-12 rounded-xl bg-white text-black hover:bg-white/90 font-bold disabled:opacity-60"
                      >
                        {submitting ? "Submitting…" : <>Submit & continue to payment <ChevronRight className="w-4 h-4 ml-1" /></>}
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ReviewScreen({ form }: { form: ReturnType<typeof useForm<FormData>> }) {
  const v = form.getValues();
  const plan = v.plan ? PLANS[v.plan] : null;
  const rows: Array<[string, string]> = [
    ["Plan", plan ? `${plan.name} — $${plan.monthly}/mo + $${plan.setup} setup` : "—"],
    ["Business", v.businessName],
    ["Contact", `${v.contactName} · ${v.email} · ${v.phone}`],
    ["Website", v.website || "—"],
    ["Goals", v.goals],
    ["Services", v.services.join(", ") || "—"],
    ["Lead channels", v.leadChannels.join(", ") || "—"],
    ["Current tools", v.currentTools || "—"],
  ];
  return (
    <div>
      <p className="text-white/70 mb-6">
        Quick check before we go — everything look right?
      </p>
      <div className="space-y-3">
        {rows.map(([k, val]) => (
          <div key={k} className="flex flex-col sm:flex-row sm:gap-4 py-3 border-b border-white/[0.06]">
            <span className="text-sm text-muted-foreground sm:w-40 shrink-0">{k}</span>
            <span className="text-sm text-white whitespace-pre-wrap">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function isValidPayUrl(url: string): boolean {
  if (!url) return false;
  try {
    return new URL(url).protocol === "https:";
  } catch {
    return false;
  }
}

function PaymentScreen({
  plan,
  onPaid,
}: {
  plan: PlanId | undefined;
  onPaid: () => void;
}) {
  const [opened, setOpened] = useState(false);
  const p = plan ? PLANS[plan] : null;
  if (!p) {
    return <p className="text-white/70">No plan selected.</p>;
  }
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-8 h-8 text-primary" />
      </div>
      <h2 className="text-2xl font-black text-white mb-2">Details received!</h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        To lock in your <span className="text-white font-semibold">{p.name}</span> plan,
        complete payment below. We'll start your setup as soon as it's through.
      </p>

      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 max-w-sm mx-auto mb-8 text-left">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white font-semibold">{p.name} plan</span>
          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Selected</span>
        </div>
        <div className="flex items-center justify-between text-sm text-white/70 py-2 border-t border-white/[0.06]">
          <span>One-off setup</span>
          <span className="text-white font-semibold">${p.setup}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-white/70 py-2 border-t border-white/[0.06]">
          <span>Subscription</span>
          <span className="text-white font-semibold">${p.monthly}/mo</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 max-w-sm mx-auto">
        <PayButton
          label={`Pay setup fee — $${p.setup}`}
          url={p.setupPaymentUrl}
          onOpen={() => setOpened(true)}
        />
        <PayButton
          label={`Start subscription — $${p.monthly}/mo`}
          url={p.subscriptionPaymentUrl}
          onOpen={() => setOpened(true)}
          variant="outline"
        />
      </div>

      {opened && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-sm mx-auto mt-8 pt-6 border-t border-white/[0.06]"
        >
          <p className="text-sm text-white/70 mb-3">
            Payment opens in a new tab. Once it's gone through, confirm below.
          </p>
          <Button
            onClick={onPaid}
            className="w-full h-12 rounded-xl bg-primary text-white hover:bg-primary/90 font-bold"
          >
            I've completed payment
          </Button>
        </motion.div>
      )}

      <p className="text-xs text-muted-foreground mt-6">
        Payments are processed securely. Questions? Email{" "}
        <a href="mailto:admin@donebyamy.com" className="text-primary underline">admin@donebyamy.com</a>
      </p>
    </div>
  );
}

function PayButton({
  label,
  url,
  onOpen,
  variant = "default",
}: {
  label: string;
  url: string;
  onOpen: () => void;
  variant?: "default" | "outline";
}) {
  if (!isValidPayUrl(url)) {
    return (
      <Button
        disabled
        className="h-12 rounded-xl opacity-50 cursor-not-allowed"
        variant={variant === "outline" ? "outline" : "default"}
      >
        {label} (link coming soon)
      </Button>
    );
  }
  return (
    <Button
      asChild
      onClick={onOpen}
      className={
        variant === "outline"
          ? "h-12 rounded-xl border-white/10 hover:bg-white/5 text-white"
          : "h-12 rounded-xl bg-white text-black hover:bg-white/90 font-bold"
      }
      variant={variant === "outline" ? "outline" : "default"}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label} <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </Button>
  );
}

function PaidScreen() {
  return (
    <div className="text-center">
      <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-primary" />
      </div>
      <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Welcome aboard!</h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Thanks for signing up. Amy will be in touch shortly to kick off your setup. Keep
        an eye on your inbox.
      </p>
      <Button asChild variant="outline" className="rounded-full border-white/10 hover:bg-white/5 text-white h-12 px-8">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}

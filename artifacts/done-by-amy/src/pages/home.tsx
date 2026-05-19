import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Bot, PhoneCall, Workflow, Globe, 
  CheckCircle2, ArrowRight, Zap, Briefcase, Building2, Store
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import Brand Assets
import logoMark from "@assets/ChatGPT_Image_May_14,_2026,_04_49_39_PM_-_Copy_1779201943316.png";
import amyAvatar from "@assets/avatar_1779201943316.png";
import linkBanner from "@assets/link_img_1779201943317.png";
import daLogoWordmark from "@assets/da_logo_1779201943317.png";
import tcLogo from "@assets/tc_logo_1779201943317.png";
import tcScreen from "@assets/tc_screen_1779201943317.png";
import featureCards from "@assets/ChatGPT_Image_May_18,_2026,_11_32_20_AM_1779201943317.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="Done By Amy Logo" className="w-10 h-10 object-contain" />
            <img src={daLogoWordmark} alt="Done By Amy" className="h-5 hidden sm:block object-contain" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#tradiecatch" className="hover:text-primary transition-colors">TradieCatch</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </div>
          <Link href="/get-started">
            <Button data-testid="nav-cta-button" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              Tell Us About Your Business
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <motion.div 
              initial="hidden" animate="visible" variants={fadeIn}
              className="flex-1 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-primary/30 text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" /> AI Automation for Aussie Small Business
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight text-white drop-shadow-lg">
                Smart Systems. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Real Results.
                </span><br />
                Zero Overwhelm.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0 font-light">
                Feel like you need a Fortune 500 ops team? I build AI chatbots, missed call systems, and automated workflows so you can get back to what you do best.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Link href="/get-started">
                  <Button data-testid="hero-cta-button" size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                    Tell Us About Your Business
                  </Button>
                </Link>
                <Button data-testid="hero-secondary-button" size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/10 hover:bg-white/5" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  See How It Works
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="flex-1 relative w-full max-w-lg"
            >
              <div className="relative aspect-square">
                <img src={amyAvatar} alt="Amy Avatar" className="w-full h-full object-contain relative z-10 drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "200+", label: "Businesses Automated" },
              { value: "$2M+", label: "Recaptured Revenue" },
              { value: "48hr", label: "Average Setup Time" },
              { value: "5.0", label: "Google Rating", stars: true }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-1">
                  {stat.value}
                  {stat.stars && <span className="text-yellow-400 text-2xl">★</span>}
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="flex-1"
            >
              <img src={featureCards} alt="Feature Cards" className="w-full h-auto rounded-xl shadow-[0_0_40px_rgba(168,85,247,0.2)] border border-white/10" />
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="flex-1 space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Run your business. <br/>
                <span className="text-primary">Let the systems run the rest.</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Save Time Every Week",
                    desc: "Cut down repetitive tasks like follow-ups, bookings, reminders, invoicing and customer messages."
                  },
                  {
                    title: "Catch More Leads",
                    desc: "Reply to customers quickly, even when you are busy, offline, on another job or out of hours."
                  },
                  {
                    title: "Make Your Apps Work Together",
                    desc: "Connect your website, forms, emails, calendar, CRM, QuickBooks and other tools so nothing gets missed."
                  }
                ].map((prop, i) => (
                  <motion.div variants={fadeIn} key={i} className="flex gap-4">
                    <div className="mt-1 bg-primary/20 p-2 rounded-full h-fit border border-primary/30">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{prop.title}</h3>
                      <p className="text-muted-foreground">{prop.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-white/[0.02]">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Expert automation, <span className="text-primary">done for you.</span></h2>
          <p className="text-lg text-muted-foreground mb-16">Custom AI systems designed specifically for your daily operations.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { icon: Bot, title: "AI Chatbots & VAs", desc: "24/7 customer chat, lead capture, and instant FAQ handling." },
              { icon: PhoneCall, title: "AI Calling Systems", desc: "Automated outbound calls, appointment reminders, and follow-ups." },
              { icon: Workflow, title: "Workflow Automations", desc: "Connect your CRM, accounting, calendars & forms." },
              { icon: Globe, title: "Website Design", desc: "Conversion-focused, lightning-fast, SEO-ready modern sites." },
              { icon: Zap, title: "Custom Integration", desc: "If it has an API, we can connect it and automate it." }
            ].map((srv, i) => (
              <Card key={i} className="bg-white/5 border-primary/20 hover:border-primary/50 transition-colors backdrop-blur-sm group">
                <CardContent className="p-6">
                  <srv.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white mb-2">{srv.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{srv.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TradieCatch Feature */}
      <section id="tradiecatch" className="py-24 px-6 overflow-hidden relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative z-10 backdrop-blur-sm">
            <div className="flex-1 space-y-6">
              <img src={tcLogo} alt="TradieCatch Logo" className="h-16 object-contain mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Never miss a job lead again.</h2>
              <p className="text-lg text-muted-foreground">
                Amy's flagship product for tradies. A mobile web app that catches every missed call and automatically sends an SMS reply — so you never lose a job lead while you're on the tools.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-primary w-5 h-5"/> Mobile web app — no download required</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-primary w-5 h-5"/> Instant SMS auto-reply to missed calls</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-primary w-5 h-5"/> Capture job details 24/7</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-primary w-5 h-5"/> Just $99/month</li>
              </ul>
              <Link href="/get-started">
                <Button data-testid="tc-cta-button" className="mt-4 bg-white text-black hover:bg-gray-200 rounded-full">
                  Get TradieCatch Today <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={tcScreen} alt="TradieCatch App" className="h-[500px] object-contain drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Who We Help</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Tradies & Contractors", "Real Estate Agents", "Clinics & Allied Health", 
              "Coaches & Consultants", "Hospitality & Cafes", "Retail & eCommerce"
            ].map((industry, i) => (
              <div key={i} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:text-white hover:border-primary/50 transition-colors flex items-center gap-2 cursor-default">
                <Briefcase className="w-4 h-4 text-primary" /> {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-white/[0.02] relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Systems designed to make you money, not cost you.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-bold text-white mb-2">AI Automation Starter Pack</h3>
              <div className="text-primary text-3xl font-black mb-6">From $297 <span className="text-sm text-muted-foreground font-normal">one-off</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-muted-foreground"><CheckCircle2 className="text-primary shrink-0"/> Custom AI Chatbot Setup</li>
                <li className="flex gap-3 text-muted-foreground"><CheckCircle2 className="text-primary shrink-0"/> 1 Core Automation Workflow</li>
                <li className="flex gap-3 text-muted-foreground"><CheckCircle2 className="text-primary shrink-0"/> Training & Handoff</li>
              </ul>
              <Link href="/get-started" className="block">
                <Button data-testid="pricing-starter-cta" className="w-full" variant="outline">Tell Us About Your Business</Button>
              </Link>
            </Card>
            
            <Card className="bg-gradient-to-b from-primary/20 to-white/5 border-primary/50 backdrop-blur-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Done For You Suite</h3>
              <div className="text-primary text-3xl font-black mb-6">From $997 <span className="text-sm text-muted-foreground font-normal">one-off</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-muted-foreground"><CheckCircle2 className="text-primary shrink-0"/> Advanced AI Chatbots & Calling</li>
                <li className="flex gap-3 text-muted-foreground"><CheckCircle2 className="text-primary shrink-0"/> Full CRM Integration</li>
                <li className="flex gap-3 text-muted-foreground"><CheckCircle2 className="text-primary shrink-0"/> Multi-step Workflows</li>
                <li className="flex gap-3 text-muted-foreground"><CheckCircle2 className="text-primary shrink-0"/> Priority Support</li>
              </ul>
              <Link href="/get-started" className="block">
                <Button data-testid="pricing-suite-cta" className="w-full bg-primary hover:bg-primary/90 text-white">Tell Us About Your Business</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <img src={linkBanner} alt="Secondary Banner" className="h-24 mx-auto mb-8 object-contain rounded-xl shadow-2xl" />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Ready to stop doing everything yourself?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's chat about your business bottlenecks and find the exact automations that will save you 10+ hours this week.
          </p>
          <Link href="/get-started">
            <Button data-testid="footer-cta-button" size="lg" className="h-16 px-10 text-xl rounded-full bg-white text-primary hover:bg-gray-100 font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Tell Us About Your Business
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-background py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="Done By Amy Logo" className="w-8 h-8 object-contain grayscale opacity-70" />
            <span className="font-bold text-white tracking-wide">Done By Amy</span>
          </div>
          <div className="text-muted-foreground text-sm text-center md:text-left">
            <p>Australia-based, working with businesses nationally.</p>
            <p className="mt-1"><a href="mailto:hello@donebyamy.com.au" className="hover:text-primary">hello@donebyamy.com.au</a> • <a href="https://donebya.my" className="hover:text-primary">donebya.my</a></p>
          </div>
          <div className="text-sm text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Done By Amy. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}

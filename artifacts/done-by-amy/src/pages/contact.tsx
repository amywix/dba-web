import { motion, type Variants } from "framer-motion";
import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Mail, Globe } from "lucide-react";
import EnquiryForm from "@/components/enquiry-form";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  useSEO({
    title: "Contact | Done By Amy",
    description: "Get in touch with Done By Amy for AI chatbots, automated workflows, and general enquiries. Tailored automation for Australian small businesses.",
    canonical: "https://www.donebyamy.com/contact",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <div className="flex-1 pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Let's connect.</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Tell us what you're after and we'll ask the right questions. You'll get a tailored plan — no jargon, no obligation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" animate="visible" variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { delay: 0.05 } } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10"
          >
            <a href="mailto:admin@donebyamy.com" className="flex items-center gap-3 text-sm text-white/80 hover:text-primary transition-colors">
              <span className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-white/70" />
              </span>
              admin@donebyamy.com
            </a>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <span className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 text-white/70" />
              </span>
              Australia-wide (Remote)
            </div>
          </motion.div>

          <EnquiryForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

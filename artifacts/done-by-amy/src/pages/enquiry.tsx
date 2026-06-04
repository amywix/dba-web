import { useSEO } from "@/hooks/use-seo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion, type Variants } from "framer-motion";
import EnquiryForm from "@/components/enquiry-form";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Enquiry() {
  useSEO({
    title: "Enquire | AI Chatbot & Workflow Intake — Done By Amy",
    description: "Tell us whether you want an AI chatbot, an automated workflow, or have a general question and we'll tailor the questions. Get a custom plan for your Aussie business.",
    keywords: "AI chatbot intake, AI workflow automation enquiry, automation quote Australia, chatbot for small business",
    canonical: "https://www.donebyamy.com/contact",
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <div className="flex-1 pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 relative">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto max-w-3xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Let's build the right thing.
            </h1>
            <p className="text-lg text-muted-foreground">
              Pick what you're after and we'll ask the right questions. Either way, you'll get a tailored plan — no jargon, no obligation.
            </p>
          </motion.div>

          <EnquiryForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

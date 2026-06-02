import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };

const GREETING: Msg = {
  from: "bot",
  text: "G'day! I'm Amy's AI assistant 👋 I can tell you about our chatbots, pricing or book you a free audit. What are you after?",
};

const QUICK_REPLIES = [
  "How much does a chatbot cost?",
  "What can a chatbot do for me?",
  "Book a free audit",
  "How fast can it go live?",
];

function botReply(input: string): string {
  const q = input.toLowerCase();
  if (/(price|cost|how much|\$|pricing|month)/.test(q)) {
    return "Our AI chatbots start at $199/month — no lock-in contracts. That covers setup, training on your business, and ongoing tweaks. Most clients make it back from a single booked job.";
  }
  if (/(book|audit|demo|call|talk|contact|started|sign)/.test(q)) {
    return "Easy — head to our 'Get Your Free Audit' page (top right) and pop in your details. Amy will map out exactly what to automate first. Zero pressure, zero jargon.";
  }
  if (/(what|do|can|help|feature|capab|how does)/.test(q)) {
    return "I answer customer enquiries 24/7, qualify leads, answer FAQs about your services and pricing, and book jobs straight into your calendar — even at midnight while you're asleep.";
  }
  if (/(fast|quick|how long|live|setup|time|when)/.test(q)) {
    return "Most chatbots go live in 2–5 business days. We train it on your services, tone and FAQs, test it with you, then drop it on your site. Done by Amy 😉";
  }
  if (/(hi|hey|hello|g'day|gday|yo)/.test(q)) {
    return "Hey! Ask me anything about getting an AI chatbot for your business — pricing, what it does, or how to get started.";
  }
  if (/(human|person|real|amy|speak)/.test(q)) {
    return "Amy's the real deal behind all this. The quickest way to reach her is the 'Get Your Free Audit' form — she replies personally, usually same day.";
  }
  return "Great question! This is a quick demo of the kind of chatbot we build. For the full answer, book a free audit (top-right button) and Amy will sort you out. Want to know about pricing or what a chatbot can do?";
}

export default function ChatbotDemo() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    const reply = botReply(trimmed);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 700 + Math.min(trimmed.length * 15, 800));
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        data-testid="chatbot-launcher"
        onClick={() => setOpen((o) => !o)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_8px_30px_rgba(168,85,247,0.45)] flex items-center justify-center text-white"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent" />
          </span>
        )}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-[380px] h-[540px] max-h-[calc(100vh-8rem)] rounded-3xl bg-[#0d0a14] border border-white/10 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-white/[0.08] bg-gradient-to-r from-primary/15 to-secondary/15">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0d0a14]" />
              </div>
              <div className="min-w-0">
                <p className="text-white font-bold text-sm leading-tight">Amy's AI Assistant</p>
                <p className="text-white/50 text-xs">Online · replies instantly</p>
              </div>
              <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-full">Demo</span>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.from === "user"
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-white/[0.05] text-white/90 border border-white/[0.06] rounded-bl-md"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.05] border border-white/[0.06] rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick replies (only before user has typed) */}
              {messages.length === 1 && !typing && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-xs text-primary border border-primary/30 bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-full transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="p-3 border-t border-white/[0.08] flex items-center gap-2"
            >
              <input
                data-testid="chatbot-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="shrink-0 w-10 h-10 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-40 flex items-center justify-center text-white transition-colors"
                disabled={!input.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

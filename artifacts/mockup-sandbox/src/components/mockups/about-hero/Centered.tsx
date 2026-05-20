export function Centered() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #0f0a1a 100%)" }}>

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.18) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)" }} />

      <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
          style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)", color: "#a855f7" }}>
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/></svg>
          The person behind the systems
        </div>

        {/* Headline */}
        <h1 className="font-black leading-[1.05] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}>
          Hi, I'm Amy.
          <br />
          <span style={{ background: "linear-gradient(90deg, #a855f7, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            I build businesses<br />that run themselves.
          </span>
        </h1>

        {/* Divider line */}
        <div className="w-16 h-px mb-8" style={{ background: "linear-gradient(90deg, transparent, #a855f7, transparent)" }} />

        {/* Body */}
        <p className="mb-4 leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.1rem" }}>
          Australian AI automation specialist helping small business owners stop drowning in repetitive tasks and start focusing on the work that actually grows their business.
        </p>

        {/* CTA */}
        <button className="mt-6 px-8 py-4 rounded-full font-semibold text-white flex items-center gap-2"
          style={{ background: "linear-gradient(90deg, #a855f7, #6366f1)", boxShadow: "0 0 32px rgba(168,85,247,0.4)", fontSize: "1rem" }}>
          Work With Me
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
}

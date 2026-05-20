export function BoldAsymmetric() {
  return (
    <div className="min-h-screen flex flex-col justify-end pb-16 px-8 relative overflow-hidden"
      style={{ background: "#070711" }}>

      {/* Large decorative gradient orb top-right */}
      <div className="absolute top-[-100px] right-[-120px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.22) 0%, rgba(99,102,241,0.08) 50%, transparent 70%)" }} />

      {/* Thin horizontal rule across the page */}
      <div className="absolute top-[45%] left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.25) 40%, rgba(168,85,247,0.1) 100%)" }} />

      {/* Badge — top left */}
      <div className="absolute top-10 left-8 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
        style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)", color: "#a855f7" }}>
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/></svg>
        The person behind the systems
      </div>

      {/* Big "Hi, I'm Amy." — full-bleed top heading */}
      <div className="absolute top-[20%] left-0 right-0 px-8">
        <p className="font-black tracking-tighter leading-none select-none"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)", fontFamily: "Montserrat, sans-serif", color: "rgba(255,255,255,0.07)", letterSpacing: "-0.03em" }}>
          Hi, I'm Amy.
        </p>
      </div>

      {/* Main content — bottom aligned, two-column */}
      <div className="relative z-10 grid grid-cols-2 gap-12 items-end max-w-6xl">

        {/* Left — gradient headline */}
        <div>
          <h1 className="font-black leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", fontFamily: "Montserrat, sans-serif" }}>
            <span style={{ background: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #c084fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              I build businesses
              <br />that run
              <br />themselves.
            </span>
          </h1>
        </div>

        {/* Right — compact text block + CTA */}
        <div className="flex flex-col gap-5">
          <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "380px" }}>
            Australian AI automation specialist. I help small business owners stop drowning in repetitive tasks and start focusing on the work that actually grows their business.
          </p>

          <div className="flex items-center gap-4">
            <button className="px-7 py-3.5 rounded-full font-semibold text-white flex items-center gap-2"
              style={{ background: "linear-gradient(90deg, #a855f7, #6366f1)", boxShadow: "0 0 28px rgba(168,85,247,0.4)", fontSize: "0.95rem" }}>
              Work With Me
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.85rem" }}>↑ scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
}

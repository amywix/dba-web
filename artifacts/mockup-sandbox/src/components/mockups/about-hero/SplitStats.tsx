export function SplitStats() {
  const stats = [
    { value: "200+", label: "Businesses automated" },
    { value: "3 hrs", label: "Avg time saved daily" },
    { value: "$99", label: "Starting / month" },
    { value: "24/7", label: "AI never sleeps" },
  ];

  return (
    <div className="min-h-screen flex items-center px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #0f0a1a 100%)" }}>

      {/* Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.14) 0%, transparent 70%)" }} />

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
              style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)", color: "#a855f7" }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/></svg>
              The person behind the systems
            </div>

            <h1 className="font-black leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", fontFamily: "Montserrat, sans-serif", color: "#ffffff" }}>
              Hi, I'm Amy.
              <br />
              <span style={{ background: "linear-gradient(90deg, #a855f7, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                I build businesses<br />that run themselves.
              </span>
            </h1>

            <p className="mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", maxWidth: "440px" }}>
              Australian AI automation specialist helping small business owners stop drowning in repetitive tasks and focus on what grows their business.
            </p>

            <button className="mt-4 px-7 py-3.5 rounded-full font-semibold text-white flex items-center gap-2"
              style={{ background: "linear-gradient(90deg, #a855f7, #6366f1)", boxShadow: "0 0 28px rgba(168,85,247,0.4)", fontSize: "0.95rem" }}>
              Work With Me
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

          {/* Right — stats card */}
          <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(168,85,247,0.15)" }}>
            <p className="text-xs uppercase tracking-widest mb-6 font-semibold" style={{ color: "rgba(255,255,255,0.3)" }}>By the numbers</p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl p-5" style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.1)" }}>
                  <p className="font-black mb-1" style={{ fontSize: "2rem", fontFamily: "Montserrat, sans-serif", background: "linear-gradient(90deg, #a855f7, #6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {s.value}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <p className="italic leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>
                "Every small business deserves the same powerful systems big companies take for granted."
              </p>
              <p className="mt-2 text-xs font-semibold" style={{ color: "#a855f7" }}>— Amy, Founder of Done By Amy</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

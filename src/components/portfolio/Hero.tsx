import portrait from "@/assets/portrait.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-parchment grain">
      {/* Decorative top frame */}
      <div className="container-prose relative">
        <div className="flex items-center justify-between mb-12 animate-fade">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary/70">
            Est. 2014 · Researcher & Educator
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary/70 hidden sm:inline">
            Maharashtra, IN ⟶ New Mexico, USA
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text block */}
          <div className="lg:col-span-7 space-y-8 animate-rise">
            <p className="section-label">— Microbiologist · Virologist · Educator</p>
            <h1 className="font-serif text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.95] text-primary text-balance">
              Dr. Anirvan
              <br />
              <span className="italic font-light text-primary/85">Mukherjee</span>
            </h1>
            <div className="flex items-center gap-4">
              <span className="ornament" />
              <span className="font-serif italic text-lg text-muted-foreground">
                Ph.D., Post-Doctoral Fellow
              </span>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-foreground/80 text-balance">
              Advancing scientific knowledge across <em className="text-primary">microbiology, virology,
              and molecular biology</em> — from adenoviral trafficking at UNM to entomopathogenic biocontrol
              of papaya aphid in West Bengal.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="#research"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 hover:bg-primary/90 transition-all"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Explore Research</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#publications" className="ink-link font-serif italic text-lg">
                View publications
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5 relative animate-rise" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute -inset-3 border border-primary/30" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-gold/10" />
              <img
                src={portrait}
                alt="Portrait of Dr. Anirvan Mukherjee in a microbiology research laboratory"
                className="relative w-full h-full object-cover shadow-deep"
                width={1024}
                height={1280}
              />
              <div className="absolute -bottom-6 -left-6 bg-card border border-border px-5 py-3 shadow-elegant">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">CSIR-UGC NET</p>
                <p className="font-serif text-2xl text-primary">AIR Rank 48</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {[
            { n: "6+", l: "Peer-Reviewed Publications" },
            { n: "1", l: "Patent Granted (Govt. of India)" },
            { n: "9+", l: "Conference Presentations" },
            { n: "11+", l: "Years in Research" },
          ].map((s) => (
            <div key={s.l} className="bg-background p-6 md:p-8">
              <p className="font-serif text-4xl md:text-5xl text-primary">{s.n}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

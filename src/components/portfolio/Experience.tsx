export const Experience = () => {
  return (
    <section id="experience" className="py-28 bg-background">
      <div className="container-prose">
        <p className="section-label mb-4">— Current Occupation & Teaching</p>
        <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05] mb-16 max-w-3xl text-balance">
          Currently shaping young minds at <em className="font-light">Sanjivani University</em>.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="paper-card p-10 relative">
            <span className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-3 py-1">
              Current
            </span>
            <p className="font-mono text-xs uppercase tracking-widest text-primary/70 mb-3">
              Jul 2025 — Present
            </p>
            <h3 className="font-serif text-3xl text-primary leading-tight">Assistant Professor</h3>
            <p className="mt-2 italic font-serif text-lg text-foreground/75">
              Department of Microbiology
            </p>
            <p className="mt-4 text-foreground/75">
              Sanjivani University, Kopargaon, Ahalyanagar (Ahmednagar), Maharashtra, India
            </p>
          </article>

          <article className="paper-card p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-primary/70 mb-3">
              Sep 2014 — Feb 2015
            </p>
            <h3 className="font-serif text-3xl text-primary leading-tight">Guest Lecturer</h3>
            <p className="mt-2 italic font-serif text-lg text-foreground/75">
              Department of Microbiology
            </p>
            <p className="mt-4 text-foreground/75">
              Kulti College, affiliated with The University of Burdwan, West Bengal
            </p>
          </article>
        </div>

        {/* Achievements */}
        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border border border-border">
          <div className="bg-background p-8">
            <p className="section-label">Achievement</p>
            <h4 className="font-serif text-2xl text-primary mt-3">CSIR-UGC NET (LS), 2014</h4>
            <p className="text-foreground/70 mt-2">All India Rank <span className="text-gold font-semibold">48</span></p>
          </div>
          <div className="bg-background p-8">
            <p className="section-label">Award</p>
            <h4 className="font-serif text-2xl text-primary mt-3">Best Presentation</h4>
            <p className="text-foreground/70 mt-2">VECMAN 2020, St. Xavier's College (Autonomous), Tamil Nadu</p>
          </div>
          <div className="bg-primary text-primary-foreground p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary-foreground/70">Patent</p>
            <h4 className="font-serif text-2xl mt-3">Patent No. 519238</h4>
            <p className="text-primary-foreground/80 mt-2 italic">
              "A novel composition for trapping and killing mosquitoes" — Govt. of India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

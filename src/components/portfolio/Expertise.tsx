const expertise = [
  "Research Guidance",
  "Animal Cell Culture & Cell Line Maintenance",
  "Academic Writing",
  "Virus Isolation, Purification & Propagation",
  "Microbial Interaction",
  "Western Blot",
  "ELISA, q-PCR",
  "siRNA Transfection & Gene Knockdown",
  "Biological Control (Insect & Plant Pathogens)",
  "Bioinformatics",
  "Mycology",
  "Cell Signaling Pathway",
  "Agriculture",
  "Human Keratoconjunctivitis",
  "Entomopathology",
];

const strengths = [
  "Basic and Applied Research in Interdisciplinary Field",
  "Microbiology, Mycology, Agriculture, Entomopathology, Virology, Molecular & Cell Biology",
  "Practical-based experience with ethical industrial laboratory practices",
  "Concept of developing new techniques and analysis",
  "Project Design, Management & Execution",
  "Scientific Writing, Presentation, and Publication",
  "Research Guidance",
  "International-standard institutional and laboratory experience",
];

const labs = ["University of New Mexico", "Hindu College, Delhi University", "Indian Agricultural Research Institute (IARI)", "R.K.M.V.C. College, Rahara"];
const fellowships = ["UGC Major Research Project", "ICAR", "WB-DST", "SVMCM", "NIH"];

export const Expertise = () => {
  return (
    <section id="expertise" className="py-28 bg-background">
      <div className="container-prose">
        <p className="section-label mb-4">— Expertise & Strengths</p>
        <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05] mb-16 max-w-3xl text-balance">
          A <em className="font-light">deep and broad</em> technical repertoire.
        </h2>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl text-primary mb-6">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {expertise.map((e) => (
                <span
                  key={e}
                  className="font-mono text-xs tracking-wide border border-primary/25 text-primary/90 px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {e}
                </span>
              ))}
            </div>

            <h3 className="font-serif text-2xl text-primary mt-14 mb-6">Core Strengths</h3>
            <ul className="space-y-3">
              {strengths.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-mono text-xs text-gold mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-foreground/80 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5 space-y-10">
            <div className="bg-primary text-primary-foreground p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold mb-4">Laboratories</p>
              <ul className="space-y-3">
                {labs.map((l) => (
                  <li key={l} className="font-serif text-xl border-b border-primary-foreground/15 pb-3 last:border-0">{l}</li>
                ))}
              </ul>
            </div>
            <div className="border border-border p-8 bg-secondary/40">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary/70 mb-4">Fellowships Drawn</p>
              <div className="flex flex-wrap gap-2">
                {fellowships.map((f) => (
                  <span key={f} className="font-serif italic text-lg text-primary">
                    {f}
                    <span className="text-gold ml-2">·</span>
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

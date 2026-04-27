const pubs = [
  {
    n: "01",
    year: "2023",
    authors: "Mukherjee, A., Ghosh, S. K.",
    title: "An eco-friendly approach to biocontrol of aphid (Aphis gossypii Glover) by Trichoderma harzianum.",
    journal: "Environmental Monitoring and Assessment",
    cite: "195(1), 102",
    impact: "IF 3.307",
  },
  {
    n: "02",
    year: "2021",
    authors: "Ghosh, S. K., Podder, D., & Mukherjee, A.",
    title: "An insight of anopheline larvicidal mechanism of Trichoderma asperellum (TaspSKGN2).",
    journal: "Scientific Reports",
    cite: "11(1), 1-13",
    impact: "IF 4.996",
  },
  {
    n: "03",
    year: "2020",
    authors: "Mukherjee, A., Debnath, P., Ghosh, S. K., Medda, P. K.",
    title: "Biological control of papaya aphid (Aphis gossypii Glover) using entomopathogenic fungi.",
    journal: "VEGETOS",
    cite: "33(1), 1-10",
    impact: "IF 0.469",
  },
  {
    n: "04",
    year: "2018",
    authors: "Ghosh, S. K., Mukherjee, A.",
    title: "Papaya ring spot virus — its structure, type, epidemiology, and detection: A review.",
    journal: "Journal of Biology and Nature",
    cite: "9(2), 47–55",
    impact: "NAAS 3.63",
  },
  {
    n: "05",
    year: "2018",
    authors: "Mukherjee, A., Debnath, P., Ghosh, S. K.",
    title: "Growth promotion of Carica papaya by entomopathogenic fungus Beauveria bassiana.",
    journal: "Proc. Nat. Sem. on Biotechnology in Human Health and Environment",
    cite: "p. 96-98 · ISBN 978-93-80736-83-9",
    impact: "Book Chapter",
  },
  {
    n: "06",
    year: "2016",
    authors: "Banerjee, S., Pal, S., Mukherjee, S., Podder, D., Mukherjee, A., Nandi, A., Debnath, P., Sur, P. K., Ghosh, S. K.",
    title: "Cellular abnormalities induced by Trichoderma spp. during in vitro interaction and control of white & green muscardine disease of silkworm Bombyx mori.",
    journal: "Journal of Biopesticides",
    cite: "9(2), 104-112",
    impact: "IF 0.37",
  },
];

export const Publications = () => {
  return (
    <section id="publications" className="py-28 bg-background">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <p className="section-label mb-4">— Selected Publications</p>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05] text-balance">
              Six contributions to the <em className="font-light">scientific record</em>.
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground tracking-widest">Journals · Book Chapter</span>
        </div>

        <ol className="border-t border-border">
          {pubs.map((p) => (
            <li
              key={p.n}
              className="group grid grid-cols-12 gap-6 py-8 border-b border-border hover:bg-secondary/30 transition-colors px-2 md:px-6 -mx-2 md:-mx-6"
            >
              <div className="col-span-2 md:col-span-1 font-mono text-xs text-gold tracking-widest pt-1">{p.n}</div>
              <div className="col-span-10 md:col-span-2 font-mono text-sm text-primary tracking-widest">{p.year}</div>
              <div className="col-span-12 md:col-span-7">
                <p className="text-sm text-muted-foreground italic mb-1">{p.authors}</p>
                <h3 className="font-serif text-xl md:text-2xl text-primary leading-snug text-balance">
                  {p.title}
                </h3>
                <p className="mt-2 text-foreground/70">
                  <span className="italic">{p.journal}</span>
                  <span className="text-muted-foreground"> · {p.cite}</span>
                </p>
              </div>
              <div className="col-span-12 md:col-span-2 md:text-right">
                <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] bg-primary/8 text-primary px-3 py-1 border border-primary/15">
                  {p.impact}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

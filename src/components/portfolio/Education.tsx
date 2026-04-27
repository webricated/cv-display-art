const items = [
  { year: "2024", title: "Post Doctoral Research", detail: "Adenoviral Research, University of New Mexico, USA" },
  { year: "2022", title: "Doctor of Philosophy (Ph.D.)", detail: "Botany — West Bengal State University, India" },
  { year: "2010", title: "Masters in Microbiology", detail: "Jiwaji University, Madhya Pradesh, India" },
  { year: "2008", title: "Graduation in Microbiology", detail: "The University of Burdwan, India" },
  { year: "2005", title: "Higher Secondary — Science", detail: "W.B.C.H.S.E." },
  { year: "2003", title: "Secondary — General", detail: "W.B.B.S.E." },
];

export const Education = () => {
  return (
    <section className="py-28 bg-secondary/40 relative grain">
      <div className="container-prose">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">— Academic Qualification</p>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05]">
              Two decades of <em className="font-light">disciplined study</em>.
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground tracking-widest">2003 — 2024</span>
        </div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0">
          {items.map((it, i) => (
            <div key={i} className="relative pl-10 md:grid md:grid-cols-12 md:gap-8 pb-12 last:pb-0 group">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-gold transition-colors" />
              <div className="md:col-span-2 font-mono text-sm text-primary/80 tracking-widest mb-2 md:mb-0">
                {it.year}
              </div>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl md:text-3xl text-primary">{it.title}</h3>
                <p className="mt-1 text-foreground/70 italic font-serif text-lg">{it.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const confs = [
  { award: true, title: "Behavioural and ovipositional response of adult Culex sp. mosquitoes to a novel entomopathogen Trichoderma asperellum (TaspskgN2) in vitro", venue: "VECMAN 2020 · St. Xavier's College, Tamil Nadu", year: "2020", note: "Best Presentation Award" },
  { award: true, title: "Effect of Paecilomyces lilacinus and Trichoderma asperellum on the behavior of Aphis gossypii in vitro", venue: "VECMAN 2020 · St. Xavier's College, Tamil Nadu", year: "2020", note: "Poster Award" },
  { title: "Barcoding of residential Trichoderma asperellum in North 24 Parganas, West Bengal", venue: "MSDSA-2017, BBAU, Lucknow · 58th AMI Conf.", year: "2017" },
  { title: "Host-pathogen interaction between Aphis gossypii and entomopathogenic Beauveria bassiana in molecular aspect", venue: "Bose Institute Centenary Conf., Kolkata", year: "2017" },
  { title: "Isolation and molecular identification of fungi & their antagonistic efficacy against Papaya aphid (Aphis gossypii)", venue: "57th AMI Conf., Gauhati University, Assam", year: "2016" },
  { title: "Growth promotion of Carica papaya by entomopathogenic fungus Beauveria bassiana", venue: "Seth Anandram Jaipuria College, Kolkata", year: "2018" },
  { title: "A study of relation between PRSV and its aphid vector", venue: "1st Regional Sci. & Tech. Congress, W.B.", year: "2016", note: "Oral Presentation" },
  { title: "In vitro biological control of White & Green-muscardine disease of silkworm (Bombyx mori)", venue: "Chandraketugarh Sahidullah Smriti Mahavidyalaya, W.B.", year: "2016" },
  { title: "Metagenomic Studies", venue: "Biocynosure-09, MITS Gwalior", year: "2009" },
];

const seminars = [
  { title: "Diversity of Entomopathogenic Fungi in North 24 Parganas", venue: "1st Regional Sci. & Tech. Congress · NITTTR Kolkata, 2016" },
  { title: "International Seminar — Micro-biotechnology for Environment & Cancer Management", venue: "R.K.M.V.C. College, Rahara, Kolkata · 2018" },
  { title: "Role of complement & its receptor in health & disease (Prof. L. M. Shrivastava)", venue: "Gajara Raja Medical College, Gwalior · 2009" },
];

const workshops = [
  { title: "Biopython Training", host: "RKMVC College · IIT Bombay (Spoken Tutorial Project, MHRD)" },
  { title: "Bioinformatics Workshop", host: "Alcove Life Science · Boston College, Gwalior · Jan 2009" },
  { title: "Advance Course on Computer (6 months · Grade A)", host: "Govt. Registered Electro-Computech, Burdwan · 2006" },
];

export const Conferences = () => {
  return (
    <section className="py-28 bg-secondary/40 grain">
      <div className="container-prose">
        <p className="section-label mb-4">— Conferences, Seminars & Workshops</p>
        <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05] mb-16 max-w-3xl text-balance">
          Sharing research with the <em className="font-light">scientific community</em>.
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl text-primary mb-6">Poster & Oral Presentations</h3>
            <div className="space-y-5">
              {confs.map((c, i) => (
                <article key={i} className="bg-card border border-border p-6 hover:border-primary/40 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary/70">{c.year}</span>
                    {c.note && (
                      <span className="font-mono text-[10px] uppercase tracking-widest bg-gold/15 text-gold px-2 py-0.5">
                        ★ {c.note}
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-xl text-primary leading-snug text-balance">{c.title}</h4>
                  <p className="mt-2 text-sm italic text-muted-foreground">{c.venue}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-12">
            <div>
              <h3 className="font-serif text-3xl text-primary mb-6">Seminars Attended</h3>
              <ul className="space-y-5">
                {seminars.map((s, i) => (
                  <li key={i} className="border-l-2 border-gold/60 pl-4">
                    <p className="font-serif text-lg text-primary leading-snug">{s.title}</p>
                    <p className="text-sm italic text-muted-foreground mt-1">{s.venue}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-primary mb-6">Workshops & Courses</h3>
              <ul className="space-y-5">
                {workshops.map((w, i) => (
                  <li key={i} className="border-l-2 border-primary/40 pl-4">
                    <p className="font-serif text-lg text-primary leading-snug">{w.title}</p>
                    <p className="text-sm italic text-muted-foreground mt-1">{w.host}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

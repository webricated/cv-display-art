import virus from "@/assets/virus.jpg";
import papaya from "@/assets/papaya.jpg";
import researchBg from "@/assets/research-bg.jpg";

const research = [
  {
    range: "2023 — 2024",
    place: "University of New Mexico, Albuquerque, USA",
    title: "Post Doctoral Research — Adenoviral Research",
    body: "NIH-funded study on Keratoconjunctivitis: role of V-ATPase in cellular trafficking and cell signaling. Department of Molecular Genetics and Microbiology.",
    img: virus,
    tag: "Post-Doc",
  },
  {
    range: "2019 — 2022",
    place: "R.K.M.V.C. College, Rahara · West Bengal State University",
    title: "Doctoral Research",
    body: "Screening of entomopathogenic fungi against papaya aphid (Aphis gossypii Glover), and its growth-promoting effect on Carica papaya Linn. under field conditions.",
    img: papaya,
    tag: "Ph.D.",
  },
  {
    range: "2016 — 2019",
    place: "R.K.M.V.C. College (Autonomous), Kolkata",
    title: "DHESTBT (W.B) Funded Project",
    body: "Agricultural application of entomopathogenic fungi and their natural products as biocontrol agents against aphid insect of papaya & growth-promoting factor of papaya.",
    img: researchBg,
    tag: "Funded",
  },
];

const minor = [
  { year: "2015", place: "IARI, New Delhi", title: "SRF — ICAR Chain Project", body: "Diagnosis and Management of Leaf Spot Disease of Field and Horticultural Crops, Dept. of Plant Pathology." },
  { year: "2012 — 2013", place: "Hindu College, Delhi University", title: "UGC Major Research Project Fellow", body: "Biological Control of toxigenic strain of Aspergillus flavus and Aflatoxin by isolating microbes from rhizospheric soil — ultrastructural mechanism." },
  { year: "2010", place: "Azyme Biosciences Pvt. Ltd., Bangalore", title: "M.Sc. Dissertation", body: "Characterization of anthracene (xenobiotics) degrading enzyme (Laccase) from Aspergillus niger & A. flavus and their molecular characterization." },
  { year: "2009 — 10", place: "Boston College for Professional Studies, Gwalior", title: "Minor Research Project", body: "Identification of Medically Important Microorganisms — under Dr. Reena Jain." },
  { year: "2008 — 09", place: "Boston College for Professional Studies, Gwalior", title: "Minor Research Project", body: "Isolation of Microorganisms from Soil producing industrially important enzymes (Cellulase, Amylase, Pectinase, Lipase)." },
];

export const Research = () => {
  return (
    <section id="research" className="relative py-28 overflow-hidden">
      {/* dark band */}
      <div className="absolute inset-0 bg-hero" />
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-screen"
        style={{ backgroundImage: `url(${researchBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/40" />

      <div className="container-prose relative text-primary-foreground">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
          — Research Experience
        </p>
        <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] max-w-4xl mb-20 text-balance">
          From <em className="font-light">papaya fields</em> in Bengal to <em className="font-light">viral capsids</em> at UNM.
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {research.map((r, i) => (
            <article key={i} className="group bg-card text-card-foreground border border-primary-foreground/10 overflow-hidden hover:shadow-deep transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={r.img} alt={r.title} loading="lazy" width={1024} height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary/70">{r.range}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5">{r.tag}</span>
                </div>
                <h3 className="font-serif text-2xl text-primary leading-tight">{r.title}</h3>
                <p className="mt-2 italic text-sm text-muted-foreground">{r.place}</p>
                <p className="mt-4 text-foreground/75 leading-relaxed text-[15px]">{r.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Earlier projects */}
        <div className="border-t border-primary-foreground/15 pt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-8">Earlier Projects & Fellowships</p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {minor.map((m, i) => (
              <div key={i} className="border-l border-gold/40 pl-6">
                <p className="font-mono text-xs text-gold tracking-widest">{m.year}</p>
                <h4 className="font-serif text-2xl mt-1">{m.title}</h4>
                <p className="italic text-primary-foreground/70 text-sm">{m.place}</p>
                <p className="text-primary-foreground/80 mt-3 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

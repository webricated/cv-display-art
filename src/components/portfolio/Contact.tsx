export const Contact = () => {
  return (
    <section id="contact" className="relative py-28 bg-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, hsl(var(--gold) / 0.3), transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--primary-glow) / 0.5), transparent 50%)"
      }} />

      <div className="container-prose relative">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold mb-6">— Get in Touch</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] text-balance">
              Open to <em className="font-light">collaboration</em>, mentorship & inquiry.
            </h2>
            <p className="mt-8 text-lg text-primary-foreground/80 max-w-md leading-relaxed">
              For research collaboration, guest lectures, peer review or doctoral mentoring,
              please reach out via any of the channels listed.
            </p>
          </div>

          <div className="space-y-8">
            <Field label="Email" lines={["anirvanmukherjeessc@sanjivani.edu.in", "micro.anirvan@gmail.com"]} />
            <Field label="Phone" lines={["+91 9775971577"]} />
            <Field label="LinkedIn" lines={["www.linkedin.com/in/anirvan-mukherjee"]} />
            <Field label="ResearchGate" lines={["researchgate.net/profile/Anirvan-Mukherjee"]} />
            <Field label="Languages" lines={["English · Hindi · Bengali"]} />
            <Field label="Permanent Address" lines={["Village Khargram, P.O. Kharga-Karanda", "Purba Barddhaman, West Bengal, India — 713149"]} />
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-primary-foreground/15 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-serif italic text-2xl text-primary-foreground/85">
              "I hereby declare that the above-mentioned information is correct to the best of my knowledge."
            </p>
            <p className="font-serif text-3xl mt-4">— Anirvan Mukherjee</p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">
            Hobbies · Books · Photography · Gardening · Writing
          </p>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, lines }: { label: string; lines: string[] }) => (
  <div className="border-l border-gold/50 pl-5">
    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-2">{label}</p>
    {lines.map((l) => (
      <p key={l} className="font-serif text-lg leading-relaxed">{l}</p>
    ))}
  </div>
);

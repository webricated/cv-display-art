import specimen from "@/assets/specimen.jpg";

export const About = () => {
  return (
    <section id="about" className="py-28 bg-background relative">
      <div className="container-prose grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <p className="section-label mb-6">— Career Objective</p>
          <h2 className="font-serif text-5xl md:text-6xl text-primary leading-[1.05] text-balance">
            A life in service of <em className="font-light">scientific inquiry</em>.
          </h2>
          <div className="mt-8 ornament-gold ornament" />
        </div>

        <div className="lg:col-span-7 space-y-8">
          <p className="font-serif text-2xl leading-relaxed text-foreground/85 text-balance">
            "Dedicated to pursuing a career as an Educator and Researcher in Microbiology, Cell &
            Molecular Biology, Virology, and Human/Plant Pathology."
          </p>
          <p className="text-lg leading-relaxed text-foreground/75">
            Passionate about advancing scientific knowledge through innovative research and
            collaborative efforts in dynamic academic and research environments. With extensive
            interdisciplinary experience, I aim to contribute meaningful solutions to global
            challenges in health and agriculture — while nurturing the next generation of scientific
            minds.
          </p>
          <div className="aspect-[4/3] overflow-hidden border border-border">
            <img
              src={specimen}
              alt="Vintage scientific illustration of Trichoderma fungi and aphid"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

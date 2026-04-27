export const Footer = () => (
  <footer className="bg-background border-t border-border py-10">
    <div className="container-prose flex flex-col md:flex-row items-center justify-between gap-4 text-center">
      <p className="font-serif text-lg text-primary">Dr. Anirvan Mukherjee · Ph.D.</p>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        © {new Date().getFullYear()} · Designed in service of science
      </p>
    </div>
  </footer>
);

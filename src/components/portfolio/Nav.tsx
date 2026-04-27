import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="container-prose flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-serif text-xl tracking-tight text-primary">A. Mukherjee</span>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">PhD</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary border-b border-primary/40 pb-0.5 hover:border-primary"
        >
          Get in touch →
        </a>
      </nav>
    </header>
  );
};

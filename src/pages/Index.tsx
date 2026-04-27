import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Research } from "@/components/portfolio/Research";
import { Publications } from "@/components/portfolio/Publications";
import { Conferences } from "@/components/portfolio/Conferences";
import { Expertise } from "@/components/portfolio/Expertise";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Research />
      <Publications />
      <Conferences />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

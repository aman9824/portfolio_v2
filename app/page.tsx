import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Marquee } from "@/components/Marquee";
import { Section } from "@/components/ui/Section";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { about } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Marquee />

        <Section id="about" eyebrow="About" title={about.heading}>
          <About />
        </Section>

        <Section id="projects" eyebrow="Selected work" title="Flagship Projects">
          <Projects />
        </Section>

        <Section id="experience" eyebrow="Track record" title="Experience">
          <Experience />
        </Section>

        <Section id="skills" eyebrow="Toolkit" title="Skills">
          <Skills />
        </Section>

        <Section
          id="certifications"
          eyebrow="Credentials"
          title="Certifications"
        >
          <Certifications />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}

import AboutHero from "../components/AboutHero"; 
import About from "../components/About";
import Skills from "../components/Skills";
import Reveal from "../components/Reveal";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
    </main>
  );
}
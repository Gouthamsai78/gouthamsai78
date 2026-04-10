import GrainOverlay from "@/components/GrainOverlay";
import Hero from "@/components/sections/Hero";
import Origin from "@/components/sections/Origin";
import Grind from "@/components/sections/Grind";
import Pivot from "@/components/sections/Pivot";
import Projects from "@/components/sections/Projects";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <GrainOverlay />

      <nav className="top-nav">
        <a
          href="https://github.com/Gouthamsai78"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/gouthamsai78"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://huggingface.co/gouthamsai78"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hugging Face
        </a>
      </nav>

      <Hero />
      <Origin />
      <Grind />
      <Pivot />
      <Projects />
      <CTA />
    </>
  );
}

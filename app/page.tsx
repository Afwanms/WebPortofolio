import Hero from "./components/Hero";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Work />
      <Project />
      <Experience />
    </main>
  );
}
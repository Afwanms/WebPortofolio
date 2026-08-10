import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function ProjectHero() {
  return (
    <section className="projectPageHero">
      <div className="projectPageHeroGrid" />
      <div className="projectPageHeroGlow" />
      <div className="projectPageHeroLine" />

      <div className="projectPageHeroContent">
        <h1>
          Finished
          <span>Project</span>
        </h1>
      </div>

      <a
        href="#all-projects"
        className="projectPageHeroScroll"
      >
        <span>EXPLORE MY PROJECTS</span>

        <span className="projectPageHeroScrollArrow">
          <HiOutlineChevronDoubleDown />
        </span>
      </a>
    </section>
  );
}
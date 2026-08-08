import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function ExperienceHero() {
  return (
    <section className="experienceHero">
      <div className="experienceHeroGrid" />
      <div className="experienceHeroGlow" />
      <div className="experienceHeroLine" />

      <div className="experienceHeroContent">
        <h1>
          <span>Achievements</span>
        </h1>
      </div>

      <a
        href="#experience-list"
        className="experienceHeroScroll"
      >
        <span>EXPLORE MY EXPERIENCE</span>

        <span className="experienceHeroScrollArrow">
          <HiOutlineChevronDoubleDown />
        </span>
      </a>
    </section>
  );
}
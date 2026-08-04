import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function WorkHero() {
  return (
    <section className="workHero">
      <div className="workHeroGrid" />
      <div className="workHeroGlow" />
      <div className="workHeroLine" />
      <div className="workHeroContent">
        <h1>
          CAREER <span>JOURNEY</span>
        </h1>
      </div>

      <a href="#work-list" className="workHeroScroll">
        <span>SCROLL TO EXPLORE</span>

        <span className="workHeroScrollArrow">
          <HiOutlineChevronDoubleDown />
        </span>
      </a>
    </section>
  );
}
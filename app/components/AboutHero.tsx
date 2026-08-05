import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function AboutHero() {
  return (
    <section className="aboutHero">
      <div className="aboutHeroGrid" />
      <div className="aboutHeroGlow" />
      <div className="aboutHeroLine" />

      <div className="aboutHeroContent">
        <h1>
          GET TO
          <span>KNOW ME.</span>
        </h1>
      </div>

      <a
        href="#about-content"
        className="aboutHeroScroll"
      >
        <span>DISCOVER MORE</span>

        <span className="aboutHeroScrollArrow">
          <HiOutlineChevronDoubleDown />
        </span>
      </a>
    </section>
  );
}
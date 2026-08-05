import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="gridBackground" />
      <div className="blueGlow" />
      <div className="heroLine" />

      <div className="heroContent">
        <p className="intro">I&apos;M</p>

        <h1 className="heroTitle">
          <span className="gradientText">AFWAN</span>
        </h1>

        <p className="welcome">
          WELCOME TO MY
          <br />
          PORTFOLIO
        </p>
      </div>

      <a href="#work" className="scroll">
        SCROLL TO EXPLORE
        <span className="scrollArrow">
          <HiOutlineChevronDoubleDown />
        </span>
      </a>
    </section>
  );
}
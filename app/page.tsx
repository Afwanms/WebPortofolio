import Image from "next/image";
import HighlightedProjects from "./components/HighlightedProjects";

export default function Home() {
  return (
    <main className="home">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          AMS<span>.</span>
        </div>

        <div className="navLinks">
          <a href="#home" className="active">
            HOME
          </a>
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        {/* Background decorations */}
        <div className="gridBackground" />
        <div className="blueGlow" />
        <div className="heroLine" />

        {/* Hero Content */}
        <div className="heroContent">
          <p className="intro">HI, I&apos;M</p>

          <h1 className="heroTitle">
            <span>AFWAN</span>
            <span className="gradientText">MAULANA.</span>
          </h1>

          <p className="welcome">
            WELCOME TO MY
            <br />
            PORTFOLIO
          </p>

          <div className="fields">
            <span>AI</span>
            <i />
            <span>DATA</span>
            <i />
            <span>IoT</span>
          </div>
        </div>

        {/* Side index */}
        <div className="pageIndex">
          <span>01</span>
          <div />
          <p>HOME</p>
        </div>

        {/* Scroll */}
        <a href="#about" className="scroll">
          <span>SCROLL TO EXPLORE</span>
          <div className="scrollArrow">↓</div>
        </a>
      </section>
      {/* ABOUT */}
      <section className="about" id="about">
        <div className="aboutGlow" />

        <div className="sectionNumber">
          <span>02</span>
          <div />
          <p>ABOUT</p>
        </div>

        <div className="aboutContainer">

          {/* PHOTO */}
          <div className="aboutPhotoArea">
            <div className="aboutPhotoWrapper">
              <Image
                src="/my-photo.jpg"
                alt="Afwan Maulana"
                fill
                className="aboutPhoto"
              />
            </div>

            <div className="photoAccent" />
          </div>

          {/* CONTENT */}
          <div className="aboutContent">
            <p className="sectionLabel">ABOUT ME</p>

            <h2>
              BUILDING SOLUTION
              <span> USING TECHNOLOGY.</span>
            </h2>

            <p className="aboutDescription">
              Hi, I'm Afwan Maulana Sidqi. I'm passionate about building
              technology and exploring how Artificial Intelligence, Data,
              and Internet of Things can be used to solve real-world
              problems.
            </p>
          </div>

        </div>
      </section>
      {/* HIGHLIGHTED PROJECTS */}
      <HighlightedProjects />
    </main>
  );
}
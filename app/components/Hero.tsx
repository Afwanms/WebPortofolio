export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="gridBackground" />
      <div className="blueGlow" />
      <div className="heroLine" />

      <div className="heroContent">
        <p className="intro">Hello, I'M</p>

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

      <div className="pageIndex">
        <span>01</span>
        <div />
        <p>HOME</p>
      </div>

      <a href="#about" className="scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scrollArrow">↓</div>
      </a>
    </section>
  );
}
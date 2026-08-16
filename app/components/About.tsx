import Image from "next/image";

export default function About() {
    return (
      <section id="about-content" className="aboutSection">
        <div className="aboutContainer">

          {/* PHOTO */}
          <div className="aboutPhotoArea">
            <div className="aboutPhotoWrapper revealItem">
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
          <div className="aboutContent revealItem">
            <p className="sectionLabel">ABOUT ME</p>

            <h2>
              "Using Data To Build Better Solutions."
            </h2>

            <p className="aboutDescription">
              Hi, I'm Afwan Maulana Sidqi. I enjoy working with data, exploring AI, and building technology that solves real-world problems. With a background in Computer Engineering, I'm always curious about how technology can turn ideas and data into something useful.
            </p>
          </div>

        </div>
      </section>
    )
}
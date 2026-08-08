import Image from "next/image";
export default function About() {
    return (
      <section id="about-content" className="aboutSection">
        <div className="aboutGlow" />
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
              "ENJOYING BUILDING THINGS
              <span> WITH TECHNOLOGY."</span>
            </h2>

            <p className="aboutDescription">
              Hi, My name is Afwan Maulana Sidqi. I&apos;m a computer engineering graduate who is passionate about building
              technology and exploring how Artificial Intelligence, Data, and Internet of Things can be used to solve real-world
              problems.
            </p>
          </div>

        </div>
      </section>
    )
}
import Image from "next/image";
export default function About() {
    return (
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
                      Hi, My name is Afwan Maulana Sidqi. I'm a computer engineering graduate who is passionate about building
                      technology and exploring how Artificial Intelligence, Data,
                      and Internet of Things can be used to solve real-world
                      problems.
                    </p>
                  </div>
        
                </div>
              </section>
    )
}
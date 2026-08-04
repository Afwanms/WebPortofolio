"use client";

import { useRef } from "react";
import Image from "next/image";

const works = [
  {
    id: 1,
    company: "Company Name",
    role: "AI Engineer Intern",
    period: "Jun 2025 - Aug 2025",
    image: "/work-01.jpg",
  },
];

export default function Work() {
  const workRef = useRef<HTMLDivElement>(null);

  const scrollWork = (direction: "left" | "right") => {
    if (!workRef.current) return;

    const card = workRef.current.querySelector(
      ".workCard"
    ) as HTMLElement | null;

    if (!card) return;

    workRef.current.scrollBy({
      left:
        direction === "right"
          ? card.offsetWidth + 38
          : -(card.offsetWidth + 38),
      behavior: "smooth",
    });
  };

  return (
    <section className="workSection" id="work">
      <div className="workHeader">
        <div>
          <p className="workLabel">WORK EXPERIENCE</p>
          <h2>Where I've Worked</h2>
        </div>

        <div className="workActions">
          <button
            className="workArrow workArrowInactive"
            onClick={() => scrollWork("left")}
            aria-label="Previous work"
          >
            ←
          </button>

          <button
            className="workArrow"
            onClick={() => scrollWork("right")}
            aria-label="Next work"
          >
            →
          </button>
        </div>
      </div>

      <div className="workSlider" ref={workRef}>
        {works.map((work) => (
          <article className="workCard" key={work.id}>
            <Image
              src={work.image}
              alt={`${work.company} - ${work.role}`}
              fill
              className="workImage"
            />

            <div className="workOverlay" />

            <div className="workInfo">
              <span>{work.period}</span>
              <h3>{work.company}</h3>
              <p>{work.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
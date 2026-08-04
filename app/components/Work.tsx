"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { works } from "../data/work";

export default function Work() {
  const workRef = useRef<HTMLDivElement>(null);

  // Latest → Oldest
  const latestWorks = [...works].sort(
    (a, b) => b.sortDate.localeCompare(a.sortDate)
  );

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
          <h2>Where I&apos;ve Worked</h2>
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

          <Link href="/work" className="workViewAll">
            <span>VIEW ALL WORK</span>
            <span className="workViewAllArrow">→</span>
          </Link>
        </div>
      </div>

      <div className="workSlider" ref={workRef}>
        {latestWorks.map((work) => (
          <Link
            href={work.href}
            className="workCard"
            key={work.id}
          >
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
          </Link>
        ))}
      </div>
    </section>
  );
}
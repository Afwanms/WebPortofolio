"use client";

import { useRef } from "react";
import Link from "next/link";
import { experiences } from "../data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement>(null);

  const scrollExperience = (direction: "left" | "right") => {
    if (!experienceRef.current) return;

    const card = experienceRef.current.querySelector(
      ".experienceCard"
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    experienceRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Reveal>
      <section className="experienceSection" id="experience">
        <div className="experienceHeader">
          <div>
            <p className="experienceLabel">ACTIVITIES & EXPERIENCES</p>
            <h2>What I&apos;ve Been Part Of</h2>
          </div>

          <div className="experienceActions">
            <button
              className="experienceNav experienceNavInactive"
              onClick={() => scrollExperience("left")}
              aria-label="Previous experience"
            >
              ←
            </button>

            <button
              className="experienceNav"
              onClick={() => scrollExperience("right")}
              aria-label="Next experience"
            >
              →
            </button>

            <Link href="/experience" className="experienceViewAll">
              <span>VIEW ALL EXPERIENCE</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div
          className="experienceSlider"
          ref={experienceRef}
        >
          {experiences.map((experience, index) => (
          <Link
            href={`/experience/${experience.slug}`}
            className="experienceCard revealItem"
            key={experience.id}
          >
            <div className="experienceCardTop">
              <span className="experienceYear">
                {experience.period}
              </span>
            </div>

            <div className="experienceCardContent">
              <p className="experienceCategory">
                {experience.type}
              </p>

              <h3>{experience.title}</h3>

              <p className="experienceRole">
                {experience.role}
              </p>
            </div>

            <div className="experienceCardBottom">
              <p>{experience.description}</p>

              <span>↗</span>
            </div>
          </Link>
        ))}
      </div>
      </section>
    </Reveal>
  );
}
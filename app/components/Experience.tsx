"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "../data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement>(null);

  const sortedExperiences = [...experiences].sort(
    (a, b) => b.sortDate.localeCompare(a.sortDate)
  );

  const scrollExperience = (
    direction: "left" | "right"
  ) => {
    if (!experienceRef.current) return;

    const card = experienceRef.current.querySelector(
      ".experienceCard"
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 38;
    const scrollAmount = card.offsetWidth + gap;

    experienceRef.current.scrollBy({
      left:
        direction === "right"
          ? scrollAmount
          : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Reveal>
      <section className="experienceSection">

        {/* HEADER */}
        <div className="experienceHeader">
          <div>
            <p className="experienceLabel">
              ACTIVITIES & EXPERIENCES
            </p>

            <h2>
              What I&apos;ve Been Part Of
            </h2>
          </div>

          <div className="experienceActions">
            <button
              className="experienceNav experienceNavInactive"
              onClick={() =>
                scrollExperience("left")
              }
              aria-label="Previous experience"
            >
              ←
            </button>

            <button
              className="experienceNav"
              onClick={() =>
                scrollExperience("right")
              }
              aria-label="Next experience"
            >
              →
            </button>

            <Link
              href="/experience"
              className="experienceViewAll"
            >
              <span>VIEW ALL EXPERIENCE</span>
              <span className="experienceViewAllArrow">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* SLIDER */}
        <div
          className="experienceSlider"
          ref={experienceRef}
        >
          {sortedExperiences.map((experience) => (
            <Link
              href={`/experience/${experience.slug}`}
              className="experienceCard"
              key={experience.id}
            >
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                sizes="(max-width: 600px) 85vw, 31vw"
                className="experienceImage"
              />

              <div className="experienceOverlay" />

              <div className="experienceOpen">
                ↗
              </div>

              <div className="experienceInfo">
                <span>
                  {experience.type}
                </span>

                <h3>
                  {experience.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </Reveal>
  );
}
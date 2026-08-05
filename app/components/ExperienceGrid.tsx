"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "../data/experience";

const categories = [
  "ALL",
  "ORGANIZATION",
  "COMPETITION",
  "PROGRAM",
];

export default function ExperienceGrid() {
  const [activeCategory, setActiveCategory] =
    useState("ALL");

  // Latest → Oldest
  const sortedExperiences = [...experiences].sort(
    (a, b) => b.sortDate.localeCompare(a.sortDate)
  );

  const filteredExperiences =
    activeCategory === "ALL"
      ? sortedExperiences
      : sortedExperiences.filter(
          (experience) =>
            experience.type === activeCategory
        );

  return (
    <section
      className="experienceSection"
      id="experience-list"
    >
      {/* FILTER */}
      <div className="experienceFilters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? "experienceFilter active"
                : "experienceFilter"
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="experienceGrid">
        {filteredExperiences.map(
          (experience, index) => (
            <Link
              href={experience.href}
              className="experienceCard"
              key={experience.id}
            >
              <div className="experienceImage">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  sizes="
                    (max-width: 600px) 100vw,
                    (max-width: 1000px) 50vw,
                    33vw
                  "
                />

                <div className="experienceOverlay" />

                <span className="experienceNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="experienceOpen">
                  ↗
                </span>

                <div className="experienceInfo">
                  <p className="experienceType">
                    {experience.type}
                  </p>

                  <h3>{experience.title}</h3>

                  <p className="experienceRole">
                    {experience.role}
                  </p>

                  <span className="experiencePeriod">
                    {experience.period}
                  </span>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
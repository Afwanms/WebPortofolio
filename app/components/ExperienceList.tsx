"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "../data/experience";

const categories = [
  "ALL",
  "CAMPUS ACTIVITY",
  "CERTIFICATION",
  "COMMUNITY SERVICE",
];

export default function ExperienceList() {
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
      className="experiencePageSection"
      id="experience-list"
    >
      {/* FILTER */}
      <div className="experiencePageFilters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? "experiencePageFilter active"
                : "experiencePageFilter"
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="experiencePageGrid">
        {filteredExperiences.map(
          (experience, index) => (
            <Link
              href={`/experience/${experience.slug}`}
              className="experiencePageCard"
              key={experience.id}
            >
              <div className="experiencePageImage">
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

                <div className="experiencePageOverlay" />

                <span className="experiencePageOpen">
                  ↗
                </span>

                <div className="experiencePageInfo">
                  <p className="experiencePageType">
                    {experience.type}
                  </p>

                  <h3>{experience.title}</h3>

                  <p className="experiencePageRole">
                    {experience.role}
                  </p>

                  <span className="experiencePagePeriod">
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
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/project";
import Reveal from "./Reveal";

export default function Project() {
  const projectsRef = useRef<HTMLDivElement>(null);

  // TERBARU → TERLAMA
  const latestProjects = [...projects].sort(
    (a, b) => b.sortDate.localeCompare(a.sortDate)
  );

  const scrollProjects = (
    direction: "left" | "right"
  ) => {
    if (!projectsRef.current) return;

    const card = projectsRef.current.querySelector(
      ".projectCard"
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 38;
    const scrollAmount = card.offsetWidth + gap;

    projectsRef.current.scrollBy({
      left:
        direction === "right"
          ? scrollAmount
          : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Reveal>
      <section className="projectSection">

        {/* HEADER */}
        <div className="projectHeader">
          <div>
            <p className="projectLabel">
              LATEST PROJECTS
            </p>

            <h2>
              What I&apos;ve Been Working On
            </h2>
          </div>

          <div className="projectActions">
            <button
              className="projectArrow projectArrowInactive"
              onClick={() =>
                scrollProjects("left")
              }
              aria-label="Previous project"
            >
              ←
            </button>

            <button
              className="projectArrow"
              onClick={() =>
                scrollProjects("right")
              }
              aria-label="Next project"
            >
              →
            </button>

            <Link
              href="/projects"
              className="projectViewAll"
            >
              <span>VIEW ALL PROJECTS</span>

              <span className="projectViewAllArrow">
                →
              </span>
            </Link>
          </div>
        </div>


        {/* SLIDER */}
        <div
          className="projectSlider"
          ref={projectsRef}
        >
          {latestProjects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              className="projectCard"
              key={project.id}
            >
              {/* IMAGE */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 600px) 85vw, 31vw"
                className="projectImage"
              />

              {/* OVERLAY */}
              <div className="projectOverlay" />

              {/* OPEN */}
              <div className="projectOpen">
                ↗
              </div>

              {/* INFORMATION */}
              <div className="projectInfo">

                <span>
                  {project.period}
                </span>

                <h3>
                  {project.title}
                </h3>

              <div className="projectTags">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span key={`${tag}-${index}`}>
                    {tag}
                  </span>
                ))}

                {project.tags.length > 3 && (
                  <span className="projectTagsMore">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              </div>
            </Link>
          ))}
        </div>

      </section>
    </Reveal>
  );
}
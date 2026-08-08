"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/project";
import Reveal from "./Reveal";

export default function Project() {
  const projectsRef = useRef<HTMLDivElement>(null);

  // URUTKAN PROJECT TERBARU → TERLAMA
  const latestProjects = [...projects].sort(
    (a, b) => b.sortDate.localeCompare(a.sortDate)
  );

  const scrollProjects = (direction: "left" | "right") => {
    if (!projectsRef.current) return;

    const card = projectsRef.current.querySelector(
      ".projectCard"
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 28;
    const scrollAmount = card.offsetWidth + gap;

    projectsRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Reveal>
      <section className="projectsSection" id="projects">
        <div className="projectsHeader">
          <div>
            <p className="projectsLabel">LATEST PROJECTS</p>
            <h2>What I&apos;ve Been Working On</h2>
          </div>

          <div className="projectsActions">
            <button
              className="projectArrow projectArrowDisabled"
              onClick={() => scrollProjects("left")}
              aria-label="Previous project"
            >
              ←
            </button>

            <button
              className="projectArrow"
              onClick={() => scrollProjects("right")}
              aria-label="Next project"
            >
              →
            </button>

            <Link href="/projects" className="viewAllButton">
              <span>VIEW ALL PROJECTS</span>
              <span className="viewAllArrow">→</span>
            </Link>
          </div>
        </div>

        <div className="projectsGrid" ref={projectsRef}>
          {latestProjects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              className="projectCard"
              key={project.id}
            >
              <div className="projectImage">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 600px) 85vw, 400px"
                />

                <span className="projectNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="projectOpen">↗</div>
              </div>

              <div className="projectInfo">
                <h3>{project.title}</h3>

                <div className="projectTags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={`${project.id}-${tag}-${tagIndex}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
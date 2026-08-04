"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Project 01",
    image: "/project-ai.jpg",
    href: "/projects/project-01",
    tags: ["AI", "LLM", "Python"],
  },
  {
    id: 2,
    title: "Project 02",
    image: "/project-data.jpg",
    href: "/projects/project-02",
    tags: ["Data", "Kafka", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Project 03",
    image: "/project-iot.jpg",
    href: "/projects/project-03",
    tags: ["IoT", "ESP8266", "Sensor"],
  },
  {
    id: 4,
    title: "Project 04",
    image: "/project-04.jpg",
    href: "/projects/project-04",
    tags: ["Lorem", "Lorem", "Lorem"],
  },
];

export default function Project() {
  const projectsRef = useRef<HTMLDivElement>(null);

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
    <section className="projectsSection" id="work">
      {/* HEADER */}
      <div className="projectsHeader">
        <div>
          <p className="projectsLabel">LATEST PROJECTS</p>
          <h2>What I've Been Working On</h2>
        </div>

        <div className="projectsActions">
          {/* LEFT */}
          <button
            className="projectArrow projectArrowDisabled"
            onClick={() => scrollProjects("left")}
            aria-label="Previous project"
          >
            ←
          </button>

          {/* RIGHT */}
          <button
            className="projectArrow"
            onClick={() => scrollProjects("right")}
            aria-label="Next project"
          >
            →
          </button>

          {/* VIEW ALL */}
          <Link href="/projects" className="viewAllButton">
            <span>VIEW ALL PROJECTS</span>
            <span className="viewAllArrow">→</span>
          </Link>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="projectsGrid" ref={projectsRef}>
        {projects.map((project, index) => (
          <Link
            href={project.href}
            className="projectCard"
            key={project.id}
          >
            {/* IMAGE */}
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

            {/* INFO */}
            <div className="projectInfo">
              <h3>{project.title}</h3>

              <div className="projectTags">
                {project.tags.map((tag, index) => (
                  <span key={`${project.id}-${tag}-${index}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="projectsBottom">
        <span>03 / PROJECTS</span>
        <div />
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { projects } from "../data/project";

const categories = ["ALL", "AI", "DATA", "IOT"];

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="allProjectsSection" id="all-projects">

      {/* FILTER */}
      <div className="projectFilters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "projectFilter active"
                : "projectFilter"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="allProjectsGrid">
        {filteredProjects.map((project, index) => (
          <Link
            href={project.href}
            className="allProjectCard"
            key={project.id}
          >
            <div className="allProjectImage">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="
                  (max-width: 600px) 100vw,
                  (max-width: 1000px) 50vw,
                  33vw
                "
              />

              <span className="allProjectNumber">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="allProjectOpen">
                ↗
              </span>
            </div>

            <div className="allProjectInfo">
              <div className="allProjectTitle">
                <h3>{project.title}</h3>

                <span>{project.category}</span>
              </div>

              <div className="allProjectTags">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={`${project.id}-${tag}-${tagIndex}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
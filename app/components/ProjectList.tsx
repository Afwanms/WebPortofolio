"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { projects } from "../data/project";

const categories = ["ALL", "AI", "DATA", "IOT"];

export default function ProjectList() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const sortedProjects = [...projects].sort(
    (a, b) => b.sortDate.localeCompare(a.sortDate)
  );

  const filteredProjects =
    activeCategory === "ALL"
      ? sortedProjects
      : sortedProjects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="ProjectsPageSection" id="all-projects">

      {/* FILTER */}
      <div className="ProjectsPageFilters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "ProjectsPageFilter active"
                : "ProjectsPageFilter"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="ProjectsPageGrid">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.id}>
            <Link
              href={`/projects/${project.slug}`}
              className="ProjectsPageCard"
            >
            <div className="ProjectsPageImage">
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

              <span className="ProjectsPageOpen">
                ↗
              </span>
            </div>

            <div className="ProjectsPageInfo">
              <div className="ProjectsPageTitle">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>

              <p className="ProjectsPagePeriod">
                {project.period}
              </p>

              <div className="ProjectsPageTags">
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
        </Reveal>
        ))}
      </div>
    </section>
  );
}
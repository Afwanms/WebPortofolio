import Image from "next/image";
import Link from "next/link";
import Documentation from "./Documentation";

type Project = {
  id: number;
  slug: string;

  title: string;
  image: string;

  category: string;

  tags: string[];
  concepts: string[];

  period: string;
  sortDate: string;

  description: string;
  implementation: string;
  impact: string;

  github: string;

  documentation?: string[];
};

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({
  project,
}: ProjectDetailProps) {
  return (
    <>
      <section className="projectDetail">
        <div className="projectDetailGrid">

          {/* LEFT */}
          <div className="projectDetailLeft">
            <h1>{project.title}</h1>

            <div className="projectDetailImage">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="projectDetailRight">

            {/* ABOUT */}
            <div className="projectDetailBlock">
              <p className="projectDetailBlockLabel">
                ABOUT THE PROJECT
              </p>

              <p className="projectDetailDescription">
                {project.description}
              </p>
            </div>

            {/* META */}
            <div className="projectDetailMeta">
              <div>
                <span>PERIOD</span>
                <p>{project.period}</p>
              </div>

              <div>
                <span>CATEGORY</span>
                <p>{project.category}</p>
              </div>
            </div>

            {/* TECH STACK */}
            <div className="projectDetailBlock">
              <p className="projectDetailBlockLabel">
                TECH STACK
              </p>

              <div className="projectDetailTags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* CONCEPTS */}
            <div className="projectDetailBlock">
              <p className="projectDetailBlockLabel">
                CONCEPTS LEARNED
              </p>

              <div className="projectDetailTags">
                {project.concepts.map((concept) => (
                  <span key={concept}>{concept}</span>
                ))}
              </div>
            </div>

            {/* IMPLEMENTATION */}
            <div className="projectDetailBlock">
              <p className="projectDetailBlockLabel">
                IMPLEMENTATION
              </p>

              <p className="projectDetailDescription">
                {project.implementation}
              </p>
            </div>

            {/* GITHUB */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="projectDetailGithub"
            >
              <span>VIEW ON GITHUB</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          IMPACT
      ========================== */}
      <section className="projectImpact">
        <div className="projectImpactHeader">
          <h2>
            Results & Impact
          </h2>
        </div>

        <div className="projectImpactContent">
          <p>{project.impact}</p>
        </div>
      </section>
      <Documentation
        images={project.documentation ?? []}
        title={project.title}
      />
      <div className="projectDetailBack">
        <Link href="/projects">
          <span>←</span>
          BACK TO PROJECTS
        </Link>
      </div>
    </>
  );
}
import Image from "next/image";
import Link from "next/link";
import Documentation from "./Documentation";
import Reveal from "./Reveal";

type Experience = {
  id: number;
  slug: string;

  title: string;
  type: string;

  organization: string;
  role?: string;

  period: string;
  sortDate: string;
  location?: string;

  image: string;

  description: string;

  highlights: string[];

  documentation?: string[];

  externalLink?: {
    label: string;
    url: string;
  };
};

type ExperienceDetailProps = {
  experience: Experience;
};

export default function ExperienceDetail({
  experience,
}: ExperienceDetailProps) {
  return (
    <>
      {/* =========================
          OVERVIEW
      ========================== */}
      <section className="experienceDetailOverview">
        <div className="experienceDetailOverviewGrid">

        <Reveal>
          <div className="experienceDetailImage">
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              priority
              sizes="(max-width: 700px) 100vw, 45vw"
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="experienceDetailContent">

            <p className="experienceDetailLabel">
              {experience.type}
            </p>

            <h1>{experience.title}</h1>

            <p className="experienceDetailOrganization">
              {experience.organization}
            </p>

            {experience.role && (
              <p className="experienceDetailRole">
                {experience.role}
              </p>
            )}

            {/* META */}
            <div className="experienceDetailMeta">
              <div>
                <span>DATE</span>
                <p>{experience.period}</p>
              </div>

              <div>
                <span>TYPE</span>
                <p>{experience.type}</p>
              </div>

              {experience.location && (
                <div>
                  <span>LOCATION</span>
                  <p>{experience.location}</p>
                </div>
              )}
            </div>

            {/* ABOUT */}
            <div className="experienceDetailAbout">
              <p className="experienceDetailSectionLabel">
                ABOUT THE EXPERIENCE
              </p>

              <p className="experienceDetailDescription">
                {experience.description}
              </p>
            </div>

            {/* EXTERNAL LINK */}
            {experience.externalLink && (
              <a
                href={experience.externalLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="experienceDetailExternal"
              >
                {experience.externalLink.label}
                <span>↗</span>
              </a>
            )}
          </div>
        </Reveal>
        </div>
      </section>

      {/* =========================
          KEY HIGHLIGHTS
      ========================== */}
      <section className="experienceDetailHighlights">

        <div className="experienceDetailHighlightsHeader">
          <h2>
            Experience
            <br />
            Highlights
          </h2>
        </div>

        <Reveal>
          <div className="experienceDetailHighlightsList">
            {experience.highlights.map(
              (highlight, index) => (
                <div
                  className="experienceDetailHighlight revealItem"
                  key={index}
                >
                  <span className="experienceDetailHighlightNumber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p>{highlight}</p>
                </div>
              )
            )}
          </div>
        </Reveal>
      </section>

      {/* =========================
          DOCUMENTATION
      ========================== */}
      {experience.documentation &&
        experience.documentation.length > 0 && (
          <Documentation
            images={experience.documentation}
            title={experience.title}
          />
        )}

      {/* =========================
          BACK
      ========================== */}
      <div className="experienceDetailBack">
        <Link href="/experience">
          <span>←</span>
          BACK TO EXPERIENCE
        </Link>
      </div>
    </>
  );
}


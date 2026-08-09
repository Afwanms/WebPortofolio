"use client";

import Image from "next/image";
import Link from "next/link";
import { works } from "../data/work";
import Reveal from "./Reveal";

export default function WorkList() {
  return (
    <section id="work-list" className="workPageSection">
      <div className="workPageHeader">
        <p>WORK EXPERIENCE</p>
        <h2>Where I&apos;ve Worked</h2>
      </div>

      <div className="workPageList">
        {works.map((work, index) => (
          <Reveal key={work.id}>
            <article
              className={`workPageItem ${
                index % 2 !== 0 ? "workPageItemReverse" : ""
              }`}
            >
              <Link
                href={`/work/${work.slug}`}
                className="workPageImage"
              >
                <Image
                  src={work.image}
                  alt={`${work.company} - ${work.role}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                />
              </Link>

              <div className="workPageInfo">
                <p className="workPageCompany">
                  {work.company}
                </p>

                <h3>{work.role}</h3>

                <span className="workPagePeriod">
                  {work.period}
                </span>

                <p className="workPageDescription">
                  {work.description}
                </p>

                <Link
                  href={`/work/${work.slug}`}
                  className="workPageLink"
                >
                  VIEW EXPERIENCE <span>→</span>
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
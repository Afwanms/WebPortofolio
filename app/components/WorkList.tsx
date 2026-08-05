import Image from "next/image";
import Link from "next/link";
import { works } from "../data/work";

export default function WorkList() {
  return (
    <section className="workPageSection" id="work-list">
      <div className="workPageList">
        {works.map((work, index) => (
          <article
            className={`workPageItem ${
              index % 2 !== 0 ? "workPageItemReverse" : ""
            }`}
            key={work.id}
          >
            {/* IMAGE */}
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

            {/* INFORMATION */}
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
        ))}
      </div>
    </section>
  );
}
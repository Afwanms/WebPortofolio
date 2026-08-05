import Image from "next/image";
import Link from "next/link";
import WorkDocumentation from "./WorkDocumentation";

type Work = {
id: number;
slug: string;

company: string;
role: string;

period: string;
sortDate: string;

location: string;
type: string;

image: string;

description: string;

responsibilities: string[];

documentation?: string[];
};

type WorkDetailProps = {
work: Work;
};

export default function WorkDetail({
work,
}: WorkDetailProps) {
return (
    <>
    <section className="workDetailOverview">
        <div className="workDetailOverviewGrid">

        <div className="workDetailImage">
            <Image
            src={work.image}
            alt={work.company}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 40vw"
            />
        </div>
        <div className="workDetailContent">
            <h1>{work.company}</h1>
            <p className="workDetailRole">
            {work.role}
            </p>

            <div className="workDetailMeta">
            <div>
                <span>PERIOD</span>
                <p>{work.period}</p>
            </div>

            <div>
                <span>LOCATION</span>
                <p>{work.location}</p>
            </div>

            <div>
                <span>TYPE</span>
                <p>{work.type}</p>
            </div>
            </div>

            <div className="workDetailAbout">
            <p className="workDetailSectionLabel">
                ABOUT THE COMPANY
            </p>

            <p className="workDetailDescription">
                {work.description}
            </p>
            </div>
        </div>

        </div>
    </section>
    <section className="workDetailResponsibilities">
        <div className="workDetailResponsibilitiesHeader">
        <h2>
            My
            <br />
            Responsibilities
        </h2>
        </div>

        <div className="workDetailResponsibilitiesList">
        {work.responsibilities.map(
            (responsibility, index) => (
            <div
                className="workDetailResponsibility"
                key={index}
            >
                <span className="workDetailResponsibilityNumber">
                {String(index + 1).padStart(2, "0")}
                </span>

                <p>{responsibility}</p>
            </div>
            )
        )}
        </div>
    </section>
    <WorkDocumentation
        images={work.documentation ?? []}
        company={work.company}
    />
    <div className="workDetailBack">
        <Link href="/work">
        <span>←</span>
        BACK TO WORK
        </Link>
    </div>
    </>
);
}
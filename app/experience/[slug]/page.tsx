import { notFound } from "next/navigation";

import { experiences } from "../../data/experience";
import ExperienceDetail from "../../components/ExperienceDetail";

type ExperiencePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ExperiencePage({
  params,
}: ExperiencePageProps) {
  const { slug } = await params;

  const experience = experiences.find(
    (experience) => experience.slug === slug
  );

  if (!experience) {
    notFound();
  }

  return (
    <main>
      <ExperienceDetail experience={experience} />
    </main>
  );
}
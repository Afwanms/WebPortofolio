import { notFound } from "next/navigation";
import { works } from "../../data/work";
import WorkDetail from "../../components/WorkDetail";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps) {
  const { slug } = await params;

  const work = works.find(
    (work) => work.slug === slug
  );

  if (!work) {
    notFound();
  }

  return (
    <main>
      <WorkDetail work={work} />
    </main>
  );
}
import { notFound } from "next/navigation";

import { projects } from "../../data/project";
import ProjectDetail from "../../components/ProjectDetail";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectDetail project={project} />
    </main>
  );
}
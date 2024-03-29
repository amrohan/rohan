import ProjectCard from "@/components/ProjectCard";
import ProjectCardSkeleton from "@/components/skeleton/projectCardSkeleton";
import React, { Suspense } from "react";

export const metadata = {
  title: "Project",
  description: "A list of projects I have worked on.",
};
export default async function page() {
  return (
    <section>
      <div className="mt-20">
        <h1 className="text-2xl text-center font-bold">Project</h1>
        <Suspense fallback={<ProjectCardSkeleton />}>
          <ProjectCard />
        </Suspense>
      </div>
    </section>
  );
}

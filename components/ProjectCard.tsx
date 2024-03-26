import React from "react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import Link from "next/link";

type project = {
  id: number;
  slug: string;
  img: string;
  title: string;
  date: any;
  tag: string[];
  content: string;
};

async function fetchProject() {
  const project = await fetch(
    `https://script.google.com/macros/s/AKfycbzmQ-LIv9fNtAXMk_iifc9k1y72zgHMi8dDLv3uoQGhCV3bhdB5OTsewisvlnL6jPz_rQ/exec`,
    {
      next: {
        revalidate: 10000,
      },
    }
  );
  const data = (await project.json()) as project[];

  return data;
}

export default async function ProjectCard() {
  const data = await fetchProject();
  // sort data by date
  data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="mt-4 grid md:grid-cols-2 gap-6 items-start animate-in fade-in">
      {data.map((project: project) => (
        <Link href={`/project/${project.slug}`} key={project.id}>
          <div className="min-h-72 h-fit rounded-md w-full mt-1">
            <div className="h-56 rounded-md object-cover w-full relative  overflow-hidden">
              <img
                src={project.img}
                alt="{project.title}"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="p-2 flex flex-col items-start justify-center gap-2">
              {/* <!-- Chips --> */}
              <div className="mt-1 flex justify-start items-center gap-1">
                {project.tag.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
              <p
                className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
bg-no-repeat
transition-[background-size]
duration-500
hover:bg-[length:100%_3px]
group-hover:bg-[length:100%_10px]
dark:from-purple-800 dark:to-purple-900 font-semibold "
              >
                {project.title}
              </p>

              <p className="text-xs">{format(project.date, "dd MMM yyyy")}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

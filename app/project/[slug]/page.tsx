import React from "react";
import { format } from "date-fns";
import { marked } from "marked";

export const runtime = "edge";

export const metadata = {
  title: "Project",
  description: "A list of projects I have worked on.",
};

type project = {
  id: number;
  slug: string;
  img: string;
  title: string;
  date: any;
  tag: string[];
  content: string;
};

{
}
async function getProject(slug: string) {
  const project = await fetch(
    `https://script.google.com/macros/s/AKfycbzmQ-LIv9fNtAXMk_iifc9k1y72zgHMi8dDLv3uoQGhCV3bhdB5OTsewisvlnL6jPz_rQ/exec`,
    {
      next: {
        revalidate: 10000,
      },
    }
  );
  const data = await project.json();
  return data.find((project: project) => project.slug === slug);
}

export default async function page({ params }: { params: { slug: string } }) {
  const data: project = await getProject(params.slug);

  return (
    <div className="h-full gap-2 mt-16">
      <div className="mb-6 w-full">
        <img src={data.img} className="rounded-md w-full md:h-96 h-40" />
        <h1 className="text-3xl mt-6">{data.title} </h1>
        <span className="text-xs">{format(data.date, "dd MMM yyyy")}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: marked(data.content) }}
        className="prose prose-sm dark:prose-invert prose-cyan prose-img:rounded-md prose-img:mx-auto max-w-none"
      ></div>
    </div>
  );
}

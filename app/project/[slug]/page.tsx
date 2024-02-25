import React from "react";
import { format } from "date-fns";
import { db } from "@/app/firebaseConfig";

import { query, where, getDocs, collection } from "firebase/firestore";
import { marked } from "marked";

type project = {
  slug: string;
  img: string;
  title: string;
  date: any;
  tag: string[];
  content: string;
};

export const runtime = "edge";

async function getProject(slug: string) {
  const q = query(collection(db, "project"), where("slug", "==", slug));
  const querySnapshot = await getDocs(q);
  const project = querySnapshot.docs.map((doc) => doc.data())[0] as project;
  return project;
}

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getProject(params.slug);
  return (
    <div className="h-full gap-2 mt-16">
      <div className="mb-6 w-full">
        <img src={data.img} className="rounded-md w-full" />
        <h1 className="text-3xl mt-6">{data.title} </h1>
        <span className="text-xs">
          {format(data.date.seconds * 1000, "dd MMM yyyy")}
        </span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: marked(data.content) }}
        className="prose prose-sm dark:prose-invert prose-cyan prose-img:rounded-md prose-img:mx-auto max-w-none"
      ></div>
    </div>
  );
}

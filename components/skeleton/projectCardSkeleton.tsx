import React from "react";

export default function ProjectCardSkeleton() {
  return (
    <article className="grid md:grid-cols-2 gap-6 items-start animate-pulse mt-4">
      <div className="min-h-72 h-fit rounded-md w-ful mt-1">
        <div className="h-52 bg-gray-300 dark:bg-zinc-600 rounded-md object-cover w-full relative  overflow-hidden"></div>
        <div className="p-2 flex flex-col items-start justify-center gap-2">
          {/* <!-- Chips --> */}
          <p className="mt-1 flex justify-start items-center gap-1">
            <span className="dark:bg-zinc-600 bg-gray-300 h-4 w-16 mt-1 rounded-md"></span>
          </p>
          <p className=" dark:bg-zinc-600 bg-gray-300 h-2 w-48 mt-1 rounded-md"></p>
          <p className=" dark:bg-zinc-600 bg-gray-300 h-2 w-32 mt-1 rounded-md"></p>
        </div>
      </div>
      {/* <!-- Skeleton 2 --> */}
      <div className="min-h-72 h-fit rounded-md w-ful mt-1">
        <div className="h-52 bg-gray-300 dark:bg-zinc-600 rounded-md object-cover w-full relative  overflow-hidden"></div>
        <div className="p-2 flex flex-col items-start justify-center gap-2">
          {/* <!-- Chips --> */}
          <p className="mt-1 flex justify-start items-center gap-1">
            <span className="dark:bg-zinc-600 bg-gray-300 h-4 w-16 mt-1 rounded-md"></span>
          </p>
          <p className=" dark:bg-zinc-600 bg-gray-300 h-2 w-48 mt-1 rounded-md"></p>
          <p className=" dark:bg-zinc-600 bg-gray-300 h-2 w-32 mt-1 rounded-md"></p>
        </div>
      </div>
    </article>
  );
}

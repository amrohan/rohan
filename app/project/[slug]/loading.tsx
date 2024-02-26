import React from "react";

export default function loading() {
  return (
    <div className="h-full gap-2 mt-16 animate-pulse">
      <div className="mb-6 w-full">
        <div className=" dark:bg-zinc-600 bg-gray-300 md:h-96 h-40 w-full rounded-md"></div>
        <h1 className="text-3xl mt-6 h-6 w-10/12 dark:bg-zinc-600 bg-gray-300 rounded-md">
          {" "}
        </h1>
        <p className="text-xs mt-2 dark:bg-zinc-600 bg-gray-300 rounded-md h-4 w-20"></p>
      </div>
      <div>
        <p className="text-xs mt-2 dark:bg-zinc-600 bg-gray-300 rounded-md h-2 w-full"></p>
        <p className="text-xs mt-2 dark:bg-zinc-600 bg-gray-300 rounded-md h-2 w-11/12"></p>
        <p className="text-xs mt-2 dark:bg-zinc-600 bg-gray-300 rounded-md h-2 w-10/12"></p>
        <p className="text-xs mt-2 dark:bg-zinc-600 bg-gray-300 rounded-md h-2 w-10/12"></p>
        <p className="text-xs mt-2 dark:bg-zinc-600 bg-gray-300 rounded-md h-2 w-9/12"></p>
        <p className="text-xs mt-2 dark:bg-zinc-600 bg-gray-300 rounded-md h-2 w-8/12"></p>
        <p className="text-xs mt-2 dark:bg-zinc-600 bg-gray-300 rounded-md h-2 w-8/12"></p>
        <p className="text-xs mt-2 dark:bg-zinc-600 bg-gray-300 rounded-md h-2 w-7/12"></p>
        <p className="text-xs mt-2 dark:bg-zinc-600 bg-gray-300 rounded-md h-2 w-6/12"></p>
      </div>
    </div>
  );
}

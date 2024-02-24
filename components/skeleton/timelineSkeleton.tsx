import React from "react";

export default function TimelineSkeleton() {
  return (
    <div className="h-fit w-full mt-4">
      <div className="flex gap-x-3 mt-4">
        <div className="w-16 text-end ">
          <span className="text-xs text-gray-500 dark:text-gray-400 h-4 w-4"></span>
        </div>

        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
          <div className="relative z-10 w-7 h-7 flex justify-center items-center">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          </div>
        </div>

        <div className="grow pt-0.5 pb-8 animate-pulse flex flex-col gap-1.5">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white dark:bg-zinc-600 bg-gray-300 h-3 w-64 mt-1 rounded-md"></h3>
          <p className=" dark:bg-zinc-600 bg-gray-300 h-3 w-48 mt-1 rounded-md"></p>
          <div className="grid gap-1">
            <p className=" dark:bg-zinc-600 bg-gray-300 h-2 w-40 mt-1 rounded-md"></p>
            <p className=" dark:bg-zinc-600 bg-gray-300 h-2 w-40 mt-1 rounded-md"></p>
            <p className=" dark:bg-zinc-600 bg-gray-300 h-2 w-36 mt-1 rounded-md"></p>
            <p className=" dark:bg-zinc-600 bg-gray-300 h-2 w-28 mt-1 rounded-md"></p>
            <p className=" dark:bg-zinc-600 bg-gray-300 h-2 w-24 mt-1 rounded-md"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

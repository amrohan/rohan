import React from "react";
import { format } from "date-fns";

async function getData() {
  const res = await fetch(
    "https://script.googleusercontent.com/macros/echo?user_content_key=TrTiy8UVRDTpF8dFf2obFk78x1R1ZEyHzkHEUluoT1DGiOBKWpJgIO-X09UFI5SmUtP0ickSYFSb-kYidiRYil5xa6ZCC3E_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNiewqCxX0lATezlMmlGfBTFID018lC9XaIN4FO89keQHQ25q0Dvw1qIkbZpuhWL-hXHd-9fjx_hEePl1ANAAMxGPpe1g-Ihztz9Jw9Md8uu&lib=M2Z4E6dkDNS2cflLcyLdmfREM-8-p-jCS"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function TimeLine() {
  const data = await getData();
  return (
    <div className="h-fit w-full mt-4 animate-fade animate-once animate-ease-in-out">
      {data.map((item: any, index: number) => {
        return (
          <div key={index} className="flex gap-x-3">
            {/* <!-- Left Content --> */}
            <div className="w-16 text-end">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {format(new Date(item.startYear), "yyyy")}
              </span>
            </div>
            {/* Icon */}
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
              <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
              </div>
            </div>

            {/* Right Content */}

            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                {item.company}
              </h3>
              <p className="mt-1 text-sm text-zinc-900 dark:text-gray-200">
                {item.position}
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {item.description}
              </p>

              <button
                type="button"
                className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <img
                  className="flex-shrink-0 w-4 h-4 rounded-full"
                  src="https://avatars.githubusercontent.com/u/73811790?s=400&u=7b81fb28f1d47be6c0230fec7f10b75a04a1f100&v=4"
                  alt="Image Description"
                />
                Rohan Salunkhe
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

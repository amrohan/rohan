import { Suspense } from "react";
import TimeLine from "../components/timeline";
import TimelineSkeleton from "../components/skeleton/timelineSkeleton";

export default async function Home() {
  return (
    <>
      <div className="md:flex md:flex-none md:justify-between md:items-center h-[35rem] gap-2 mt-20">
        <img
          src="https://amrohan.com/assets/hero.svg"
          alt="hero image"
          className="size-96 w-full mb-2 md:mb-0"
        />
        <div className="flex flex-col justify-start items-start gap-4 mt-4">
          <p>
            My name is Rohan Salunkhe. I am a full-stack developer and
            passionate about building various software applications.
          </p>
          <a
            href="https://docs.google.com/document/d/1SYPGkTmxTxBqdw1lucrSAUDtsRgHv-VQX0jzZIjD2U0/edit?usp=sharing"
            target="_blank"
            className="border flex justify-center items-center gap-1 hover:bg-black hover:text-slate-50 hover:dark:bg-zinc-50 hover:dark:text-zinc-900 dark:border-zinc-300 border-zinc-500 p-1.5 rounded-md px-4"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      {/* Work Exp */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <div className="mt-4">
          <p>
            I have worked on various projects and have experience in various
            technologies.
          </p>
        </div>
        <Suspense fallback={<TimelineSkeleton />}>
          <TimeLine />
        </Suspense>
      </div>
    </>
  );
}

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-3">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/6">
              <div className="text-6xl flex p-4 items-center">
              <i class="devicon-javascript-plain"></i>
              </div>
            </div>
            <div className="p-2 sm:w-1/6">
              <div className="text-6xl flex p-4 items-center">
              <i class="devicon-ruby-plain-wordmark"></i>
              </div>
            </div>
            <div className="p-2 sm:w-1/6">
              <div className="text-6xl flex p-4 h-full items-center">
              <i class="devicon-html5-plain-wordmark"></i>
              </div>
            </div>
            <div className="p-2 sm:w-1/6">
              <div className="text-6xl flex p-4 h-full items-center">
              <i class="devicon-css3-plain-wordmark"></i>
              </div>
            </div>
            <div className="p-2 sm:w-1/6">
              <div className="text-6xl flex p-4 h-full items-center">
              <i class="devicon-postgresql-plain-wordmark"></i>
              </div>
            </div>
        </div>
        <div className="flex justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="text-6xl flex p-2 h-full items-center">
              <i class="devicon-rails-plain-wordmark"></i>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="text-6xl flex p-2 h-full items-center">
               <i class="devicon-react-original-wordmark"></i>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="text-6xl flex p-4 h-full items-center">
              <i class="devicon-bootstrap-plain-wordmark"></i>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="text-6xl flex p-4 h-full items-center">
              <i class="devicon-sass-original"></i>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="text-6xl flex p-4 h-full items-center">
              <i class="devicon-github-original-wordmark"></i>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="text-6xl flex p-4 h-full items-center">
              <i class="devicon-git-plain-wordmark"></i>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="text-6xl flex p-4 h-full items-center">
              <i class="devicon-heroku-original-wordmark"></i>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

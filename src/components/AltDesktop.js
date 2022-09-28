import React from "react";
import { projects } from "../data";
export default function AltDesktop() {
  return (
        <div data-aos="fade-right" data-aos-duration="2000">
        {projects.map((project) => (
          <div data-aos="fade-left" data-aos-duration="2000">
          <div class="flex flex-wrap  mt-5">
            <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
              <div class="site-text">
                <h2 class="title-shadow text-4xl mb-2">{project.title}</h2>
                <h4 class="title-shadow text-1.5xl font-bold mb-2">{project.role}</h4>
                <p>{project.description}</p>
              </div>
              <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4 mt-4">
                <div class="dev-icons grid gap-2 grid-cols-4 text-5xl">
                  <i class="devicon-typescript-plain"></i>
                  <i class="devicon-nextjs-original"></i>
                  <i class="devicon-javascript-plain"></i>
                  <i class="devicon-html5-plain"></i>
                  <i class="devicon-tailwindcss-original-wordmark"></i>
                  <i class="devicon-graphql-plain-wordmark"></i>
                  <i class="devicon-github-original-wordmark"></i>
                  <i class="devicon-git-plain-wordmark"></i>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
              <img src={project.image} class=" max-w-full h-auto site-image" alt="image of tofuture home site" />
              <div className="flex justify-between">
                    <a href={project.link}className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-globe"></i> Site</a>
                    <a href={project.repos}className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-code"></i> Code</a>
              </div>
            </div>
          </div>
        </div>
           ))}
        </div>
  );
}

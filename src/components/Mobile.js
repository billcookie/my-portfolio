import React from "react";
import { projects } from "../data";
export default function Mobile() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div

              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 transition delay-100 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="flex justify-between">
                    <a href={project.link} className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-globe"></i> Site</a>
                    <a href={project.repos} className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-code"></i> Code</a>
                  </div>


                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}

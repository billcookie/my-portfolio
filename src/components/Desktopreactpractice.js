import React from "react";
import { projects } from "../data";
export default function Mobile() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div data-aos="fade-up" data-aos-duration="2000">
        <div className="container px-5 py-2 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Projects
            </h1>
          </div>
        </div>
      </div>
      <div class="container mx-auto sm:px-4 main-wrapper">


        <div data-aos="fade-right" data-aos-duration="2000">
        {projects.map((project, i) => (
          <div className={`row ${i%2 ? 'left' : 'right'}`}>
          <div class="flex flex-wrap mt-5">
            <div class="w-full md:w-1/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
              <img src={project.image} class=" max-w-full h-auto site-image" id="vinyl-img" alt="Tokyo Vinyl" />
              <div className="flex justify-between">
                    <a href={project.link}className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-globe"></i> Site</a>
                    <a href={project.repos}className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-code"></i> Code</a>
              </div>
            </div>
            <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
              <div class="site-text">
                <h2 class="title-shadow text-4xl mb-2">{project.title}</h2>
                <h4 class="title-shadow text-1.5xl font-bold mb-2">{project.role}</h4>
                <p>{project.description}</p>
              </div>
              <div className="space-x-3 w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4 mt-4">
                <div className="dev-icons grid gap-2 grid-cols-4 text-5xl">
                  {project.devicon.map((devi) => (
                  <i className={devi}></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
           ))}
        </div>
      </div>
    </section >
  );
}

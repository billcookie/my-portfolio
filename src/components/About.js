import React from "react";
export default function About() {
  return (
    <section id="about">
      <div data-aos="fade-up" data-aos-duration="2000">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white">
              Hi, I'm Bill.
              {/* <br className="hidden lg:inline-block" />I love to build amazing
            apps. */}
            </h1>
            <h2 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
              I'm a fullstack developer.
            </h2>
            <h2 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-white">
              About me
            </h2>
            <p className="mb-8 leading-relaxed">
              I am originally from the UK <span>🇬🇧</span>, but currently living in Tokyo <span>🇯🇵</span>. <br />I love watching rugby 🏉 and playing video games with my friends 🎮.

            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>

          <img
            className="profile-pic"
            alt="hero"
            src="./profile_picture.png"
          />

        </div>
      </div>

    </section>
  );
}

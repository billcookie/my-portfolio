import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div data-aos="fade-down" data-aos-duration="2000">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
          <h2 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white">
            Contact me
            {/* <br className="hidden lg:inline-block" />I love to build amazing
            apps. */}
          </h2>
        </div>
        <div className="px-5 py-10 flex justify-center ">
          <p>Whether it is just to chat or to collab, please feel free to reach out to me on linkedin or Github!</p>
        </div>
        <div className="px-5 py-10 flex justify-center ">
          <a href="https://www.linkedin.com/in/bill--cook/"><i class="devicon-linkedin-plain text-6xl flex p-4 items-center"></i></a>
          <a href="https://github.com/billcookie"><i class="devicon-github-original-wordmark text-6xl flex p-4 items-center"></i></a>
        </div>

      </div>
    </section>
  );
}

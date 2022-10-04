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
          <div class="flex flex-wrap mt-5">
            <div class="w-full md:w-1/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
              <img src="./tokyovinyl_screenshot.png" class=" max-w-full h-auto site-image" id="vinyl-img" alt="Tokyo Vinyl" />
              <div className="flex justify-between">
                    <a href="https://tokyo-vinyls.herokuapp.com"className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-globe"></i> Site</a>
                    <a href="https://github.com/billcookie/tokyo-vinyls"className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-code"></i> Code</a>
              </div>
            </div>

            <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">

              <div class="site-text">
                <h2 class="title-shadow text-4xl mb-2">Tokyo Vinyls</h2>
                <h4 class="title-shadow text-1.5xl font-bold mb-2">Role: Lead Developer</h4>
                <p>Tokyo Vinyls is an airbnb like web application that allows vinyl enthusiasts to connect by either renting vinyls or offering vinyls to be rented. This project was built in a week and taught me much about N:1 and N:N relationships. I learnt alot about how APIs work and how to intergrate them effectivly into an app as well how to depoly apps using Heroku. </p>
              </div>
              <div className="space-x-3 w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4 mt-4">
                <div className="dev-icons grid gap-2 grid-cols-4 text-5xl">
                  <i className="devicon-rails-plain-wordmark"></i>
                  <i className="devicon-ruby-plain-wordmark"></i>
                  <i className="devicon-javascript-plain"></i>
                  <i class="devicon-html5-plain"></i> <i class="devicon-sass-original"></i>
                  <i class="devicon-postgresql-plain-wordmark"></i>
                  <i class="devicon-heroku-original-wordmark"></i>
                  <i class="devicon-github-original-wordmark"></i>
                  <i class="devicon-git-plain-wordmark"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="splitter opacity-30"></div>

        <div data-aos="fade-left" data-aos-duration="2000">
          <div class="flex flex-wrap  mt-5">
            <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
              <div class="site-text">
                <h2 class="title-shadow text-4xl mb-2">Bill's Guitars</h2>
                <h4 class="title-shadow text-1.5xl font-bold mb-2">Personal Project</h4>
                <p>A headless shopify guitar store that was built with Next.js, Typescript, GraphQL, Tailwind and hosted on Vercel. It allows users to browse a selection of Fender guitars. In this project, I learnt the fundamentals of Typescript and pushed my knowledge of react and Next.js to create a fully functioning shopify app. </p>
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
              <img src="./Bills-guitars-screenshot.png" class=" max-w-full h-auto site-image" alt="image of tofuture home site" />
              <div className="flex justify-between">
                    <a href="https://bills-guitars.vercel.app/"className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-globe"></i> Site</a>
                    <a href="https://github.com/billcookie/shopify-guitar"className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-code"></i> Code</a>
              </div>
            </div>
          </div>
        </div>
        <div class="splitter opacity-30"></div>


        <div data-aos="fade-right" data-aos-duration="2000">
          <div class="flex flex-wrap  mt-5">
            <div class="w-full md:w-1/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
              <img src="./tofuture_screenshot.png" class=" max-w-full h-auto site-image" id="mobile-img" alt="image of StarWars Meme" />
              <div className="flex justify-between">
                    <a href="https://tofuture.herokuapp.com"className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-globe"></i> Site</a>
                    <a href="https://github.com/billcookie/tofuture"className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-code"></i> Code</a>
              </div>
            </div>

            <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">

              <div class="site-text">
                <h2 class="title-shadow text-4xl mb-2">toFuture</h2>
                <h4 class="title-shadow text-1.5xl font-bold mb-2">Role: Backend Developer</h4>
                <p>toFuture allows users to discover sustainable investment opportunities and share their discoveries with other users through their board. The app uses a ESG scoring API to find sustainble companies listed on the stock market. It also recommends smaller companies that are not listed on the stock market, but that are associated with other ethical standards.</p>
              </div>
              <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4 mt-4">
                <div class="dev-icons grid gap-2 grid-cols-4 text-5xl">
                  <i class="devicon-rails-plain-wordmark"></i>
                  <i class="devicon-ruby-plain-wordmark"></i>
                  <i class="devicon-javascript-plain"></i>
                  <i class="devicon-html5-plain"></i> <i class="devicon-sass-original"></i>
                  <i class="devicon-postgresql-plain-wordmark"></i>
                  <i class="devicon-heroku-original-wordmark"></i>
                  <i class="devicon-github-original-wordmark"></i>
                  <i class="devicon-git-plain-wordmark"></i>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div class="splitter opacity-30"></div>

        <div data-aos="fade-left" data-aos-duration="2000">
          <div class="flex flex-wrap  mt-5">
            <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
              <div class="site-text">
                <h2 class="title-shadow text-4xl mb-2">Star War Meme Machine</h2>
                <h4 class="title-shadow text-1.5xl font-bold mb-2">Personal Project</h4>
                <p>The Star Wars Meme Machine is an app that allows users to search for gifs with anyword and it will retrieve a Star Wars related gift. In this project I learnt alot about the fundamentals of React and how to use components, props and hooks. Made with help from LeWagon.</p>
              </div>
              <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4 mt-4">
                <div class="dev-icons grid gap-2 grid-cols-4 text-5xl">
                <i class="devicon-react-original-wordmark"></i>
                  <i class="devicon-javascript-plain"></i>
                  <i class="devicon-html5-plain"></i> <i class="devicon-sass-original"></i>
                  <i class="devicon-github-original-wordmark"></i>
                  <i class="devicon-git-plain-wordmark"></i>
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
              <img src="./meme_screenshot.png" class=" max-w-full h-auto site-image" alt="image of super battle knight screenshot" />
              <div className="flex justify-between">
              <a href="http://billcook.me/react-starwars-meme-machine/"className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-globe"></i> Site</a>
                    <a href="https://github.com/billcookie/react-starwars-meme-machine"className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-code"></i> Code</a>
              </div>
            </div>
          </div>
        </div>

        <div class="splitter opacity-30"></div>

        <div data-aos="fade-right" data-aos-duration="2000">
          <div class="flex flex-wrap  mt-5">
            <div class="w-full md:w-1/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
              <img src="./superbattleknight_screenshot.png" class=" max-w-full h-auto site-image" id="vinyl-img" alt="Slack clone image" />
              <div className="flex justify-between">
              <a href="https://super-battle-knight.herokuapp.com"className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-globe"></i> Site</a>
              <a href="https://github.com/billcookie/super-battle-knight"className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-code"></i> Code</a>
              </div>
            </div>


            <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">

              <div class="site-text">
                <h2 class="title-shadow text-4xl mb-2">Super Battle Knight</h2>
                <h4 class="title-shadow text-1.5xl font-bold mb-2">Personal Project</h4>
                <p>Super Battle Knight allows users to add "characters" to "battles". It was a personal project to practice N:N relationships and how to integrate cloudinary into web application as well as geocoding.</p>
              </div>
              <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4 mt-4">
                <div class="dev-icons grid gap-2 grid-cols-4 text-5xl">
                <i class="devicon-rails-plain-wordmark"></i>
                  <i class="devicon-ruby-plain-wordmark"></i>
                  <i class="devicon-javascript-plain"></i>
                  <i class="devicon-html5-plain"></i> <i class="devicon-sass-original"></i>
                  <i class="devicon-postgresql-plain-wordmark"></i>
                  <i class="devicon-heroku-original-wordmark"></i>
                  <i class="devicon-github-original-wordmark"></i>
                  <i class="devicon-git-plain-wordmark"></i>

                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="splitter opacity-30"></div>

        <div data-aos="fade-left" data-aos-duration="2000">
          <div class="flex flex-wrap  mt-5">
            <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
              <div class="site-text">
                <h2 class="title-shadow text-4xl mb-2">Star Wars Slack Clone</h2>
                <h4 class="title-shadow text-1.5xl font-bold mb-2">Personal Project</h4>
                <p>The Star Wars slack clone was a I challenge I gave myself to practice React components and CSS styling by using both CSS and Bootstrap.</p>
              </div>
              <div class="w-full md:w-2/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4 mt-4">
                <div class="dev-icons grid gap-2 grid-cols-4 text-5xl">
                <i class="devicon-react-original-wordmark"></i>
                  <i class="devicon-javascript-plain"></i>
                  <i class="devicon-html5-plain"></i>
                  <i class="devicon-css3-plain"></i>
                  <i class="devicon-github-original-wordmark"></i>
                  <i class="devicon-git-plain-wordmark"></i>
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/3 pr-4 pl-4 lg:w-1/2 pr-4 pl-4">
              <img src="./slackclone_screenshot.png" class=" max-w-full h-auto site-image" alt="image of super battle knight screenshot" />
              <div className="flex justify-between">
              <a href="http://billcook.me/react-star-wars-slack-clone"className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-globe"></i> Site</a>
              <a href="https://github.com/billcookie/react-star-wars-slack-clone"className="mt-1 bg-blue-500 w-32 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full"><i class="fa-solid fa-code"></i> Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

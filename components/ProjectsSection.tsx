import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "Smart Wallet Saver",
    description:
      "A FullStack web application built using React, Django and utilising PostgreSQL server. The application allows users to create grocery list and suggests them with competitive price analysis.",
    image: "/sws.png",
    github: "https://github.com/tglatne/ECE651-Project",
  },
  {
    name: "Pomodoro ToDo Application",
    description:
      "An application to create ToDo list and keep track of the progress.",
    image: "/pomo1.png",
    github: "https://github.com/tglatne/Pomodoro-Todo-Application",
  },
  {
    name: "Employee Details Management System",
    description:
      "A web app used to keep track of employee details. Can perform all the necessary CRUD operations. Built using C# and .NET technology",
    image: "/cli.png",
    github: "https://github.com/tglatne/Web-App-to-Store-Client-Details",
  },
  // {
  //   name: "Employee Details Management System",
  //   description:
  //     "A web app used to keep track of employee details. Can perform all the necessary CRUD operations. Built using C# and .NET technology",
  //   image: "/cli.png",
  //   github: "https://github.com/tglatne/Web-App-to-Store-Client-Details",
  // },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-orange-700 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 text-orange-700">
                      {project.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
      <div className="mt-12 flex flex-col space-y-28 text-3xl text-center">
        Thank you...!
      </div>
    </section>
  );
};

export default ProjectsSection;

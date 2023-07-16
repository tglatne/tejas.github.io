import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Python" },
  { skill: "C++" },
  { skill: "React" },
  { skill: "TypeScript" },
  { skill: "Azure Cloud" },
  { skill: "JavaScript" },
  { skill: "Next.js" },
  { skill: "NodeJS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-10 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-700 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p className="text-lg">
              Hi, my name is Tejas and I am a{" "}
              <span className="font-bold">{"determined"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Waterloo, Canada.
            </p>
            <br />
            <ul>
              <li>
                <p className="text-lg">
                  I graduated from University of Waterloo, Canada with Masters
                  in Electrical and Computer Engineering specializing in Machine
                  Learning.
                </p>
              </li>

              <br />
              <p className="text-lg">
                I have a wide range of hobbies like swimming, playing sports and
                walk in nature that keep me busy. I am always seeking new
                experiences and love to keep myself engaged and learning new
                things.
              </p>
              <br />
              <p className="text-lg">
                I believe that you should{" "}
                <span className="font-bold text-orange-700">
                  never stop learning
                </span>{" "}
                and that&#39;s what I strive to do, I have a passion for
                technology and a desire to always challenge myself and push the
                limits of what is possible. I am excited to see where my career
                takes me and am always open to new opportunities.
              </p>
            </ul>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skillset</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-300 px-4 py-2 mr-2 mt-2 text-orange-700 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

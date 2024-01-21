import React from "react";
import { techSkills, toolStacks } from "./Skills";
import { textVariants, skillsVariants } from "./Variants";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:w-7/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Passionate developers are engaged in the development of
              applications
            </h2>
            <p className="mt-6 text-gray-600">
              Greetings, everyone! 👋 I'm Sonu Gupta, and I proudly call Gaya,
              Bihar, India, my hometown. At present, my academic journey
              revolves around the realm of Computer Science at Lovely
              Professional University.
            </p>

            <p className="mt-6 text-gray-600">
              It's a thrilling experience as I delve into the fascinating world
              of technology, aiming to acquire knowledge and skills that will
              shape my future endeavors. Looking forward to the exciting
              challenges and opportunities that lie ahead on this educational
              path!
            </p>
          </div>
        </div>

        {/* Skill Section */}
        <div className="md:p-8">
          <h1 className="font-medium md:text-6xl text-3xl text-center">
            Professional{" "}
            <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
              Skills
            </span>
          </h1>
          <div className="flex items-center justify-center md:gap-16 gap-4 flex-wrap md:pt-16 pt-8">
            {techSkills.map((skill, i) => (
              <div
                key={skill.id}
                className="flex flex-col items-center gap-2 text-8xl rounded-xl cursor-pointer transition ease-in-out delay-150 bg-skillBg p-4 hover:-translate-y-1 hover:scale-110 hover:bg-skillBgHover shadow-md hover:skillShadow duration-500"
              >
                {skill.icon &&
                  React.createElement(skill.icon, {
                    style: { color: skill.color },
                  })}
                <p className="text-base">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Used */}
        <div className="md:p-8 pt-8">
          <h1 className="font-medium md:text-6xl text-3xl text-center">
            <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
              Tools
            </span>{" "}
            I Use
          </h1>
          <div className="flex items-center justify-center md:gap-16 gap-4 flex-wrap md:pt-16 pt-8">
            {toolStacks.map((tool, i) => (
              <div
                key={tool.id}
                className="flex flex-col items-center gap-2 text-8xl rounded-xl cursor-pointer transition ease-in-out delay-150 bg-skillBg p-4 hover:-translate-y-1 hover:scale-110 hover:bg-skillBgHover shadow-md hover:skillShadow duration-500"
              >
                {tool.icon &&
                  React.createElement(tool.icon, {
                    style: { color: tool.color },
                  })}
                <p className="text-base">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import blog from "../../assets/blogPlatform.png";
import voice from "../../assets/VoiceSelfie.png"
const Project = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-bgDark to-bgDarkMute flex flex-col text-content md:p-16 p-4">
        <h1 className="font-medium md:text-6xl sm:text-4xl text-3xl text-center">
          My Recent{" "}
          <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-7xl text-4xl ">
            Works{" "}
          </span>
        </h1>
        <p className="md:text-2xl text-lg text-center">
          Here are a few{" "}
          <span className="text-contentHighlight font-carattere tracking-widest font-semibold md:text-3xl text-xl ">
            Projects
          </span>{" "}
          worked on recently
        </p>
        <div className="flex flex-wrap justify-center gap-8 pt-8 ">
          <div className="border-2 p-4   rounded-xl max-w-[450px] transition ease-in-out delay-150 hover:scale-110 hover:bg-bgDark  shadow-md duration-500 bg-orange-400">
            <div className="flex flex-col gap-8">
              <div className="relative group flex flex-col items-center justify-center">
                <a
                  className="rounded-md overflow-hidden"
                  href="https://blog-platform-nine-gray.vercel.app/"
                  target="_blank"
                >
                  <span
                    className="lazy-load-image-background  lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="w-full h-full object-cover aspect-[2/1]"
                      alt=""
                      src={blog}
                    />
                  </span>
                </a>
                <div className="opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-sm rounded-md py-1 px-2 absolute font-sans tracking-normal">
                  https://blog-platform-nine-gray.vercel.app/
                </div>
                <div className="flex flex-col gap-1 text-justify opacity-100 transform-none">
                  <h1 className="md:text-3xl text-xl font-bold tracking-wider text-contentHighlight">
                   Blog Platform
                  </h1>
                  <p className="md:text-lg">
                  A blog web platform that empowers users to create, edit, write, update, and delete their blogs effortlessly. Built with React.js, this application offers a user-friendly interface and a seamless experience for managing and sharing your thoughts with the world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 p-4   rounded-xl max-w-[450px] transition ease-in-out delay-150 hover:scale-110 hover:bg-bgDark  shadow-md duration-500 bg-orange-400">
            <div className="flex flex-col gap-8">
              <div className="relative group flex flex-col items-center justify-center">
                <a
                  className="rounded-md overflow-hidden"
                  href="https://delicate-custard-626b57.netlify.app/"
                  target="_blank"
                >
                  <span
                    className="lazy-load-image-background  lazy-load-image-loaded"
                    style={{ color: "transparent", display: "inline-block" }}
                  >
                    <img
                      className="w-full h-full object-cover aspect-[2/1]"
                      alt=""
                      src={voice}
                    />
                  </span>
                </a>
                <div className="opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-sm rounded-md py-1 px-2 absolute font-sans tracking-normal">
                https://delicate-custard-626b57.netlify.app/
                </div>
                <div className="flex flex-col gap-1 text-justify opacity-100 transform-none">
                  <h1 className="md:text-3xl text-xl font-bold tracking-wider text-contentHighlight">
                   Voice Selfie App
                  </h1>
                  <p className="md:text-lg">
                  This project employs HTML, JavaScript, and Bootstrap to create a selfie-taking application. Users trigger the selfie capture by saying "take My Selfie." The interface is designed using Bootstrap for a responsive layout, and JavaScript handles voice recognition to make the process interactive and user-friendly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

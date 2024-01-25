import React from "react";

const Resume = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-bgDark to-bgDarkMute min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-center mt-4 w-full fixed top-[3.75rem]">
          <button className="bg-buttonHover hover:bg-buttonMain text-white font-bold py-2 px-4 rounded-md bg-orange-500">
            Download CV
          </button>
        </div>
        <div className="h-screen w-screen mt-16 md:w-1/2">
          <iframe
            src="https://drive.google.com/file/d/1HDdPb2IVrwFibW6R0hCMPvybVrLgCAPq/preview"
            allow="autoplay"
            title="Resume PDF"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Resume;


import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="bg-emerald-600 h-screen flex items-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
          {/* Left side (Image) */}
          <div className="lg:w-1/2 lg:mr-4 sm:mr-0 mb-4 sm:mb-0">
            <img
              className="w-96 object-cover"
              src="https://i.ibb.co/5BCcDYB/Remote2.png"
              alt="Your Name"
            />
          </div>

          {/* Right side (Name and Quote) */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-lg lg:text-xl text-white">By living your life to the fullest</p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Let's Think </span>
              
              <br />
              &nbsp; &nbsp; &nbsp;
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                Something
              </span>
              <br/> 
              <span className="text-white">Creative....</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

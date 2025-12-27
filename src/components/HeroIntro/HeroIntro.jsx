import React from "react";

const HeroIntro = ({ mode }) => {
  return (
    <div className="px-4 pt-20  " id="intro">
      <div className="h-[80vh] max-w-5xl mx-auto flex flex-col items-center justify-center">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
            Hello Namaste <span>👋</span> I'm
            <br className="block sm:hidden" />{" "}
            <span
              className={`inline-block  
      ${mode ? "bg-[#1A1A1A] text-[#f6d4b1]" : "bg-[#f6d4b1] text-[#1A1A1A]"} 
      px-2 py-1 sm:px-3 sm:py-2 mt-2 sm:mt-0`}
            >
              Pratish Bajracharya
            </span>
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-center sm:text-lg md:text-xl leading-relaxed max-w-2xl">
            Aspiring FullStack Developer with a desire to create, learn, and
            grow into a full-fledged software developer. Passionate about
            technology and always exploring new ways to build smart,
            user-friendly solutions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:text-lg font-bold">
          <button
            className={`border-2 px-4 py-2 rounded ${
              mode
                ? "hover:bg-[#1A1A1A] hover:text-[#f6d4b1]"
                : "hover:bg-[#f6d4b1] hover:text-[#1A1A1A]"
            } transition delay-150 duration-300 ease-in-out`}
          >
           <a href="#contact">Connect With Me</a> 
          </button>
          <button
            className={`border-2 px-4 py-2 rounded ${
              mode
                ? "hover:bg-[#1A1A1A] hover:text-[#f6d4b1]"
                : "hover:bg-[#f6d4b1] hover:text-[#1A1A1A]"
            } transition delay-150 duration-300 ease-in-out`}
          >
            <a href="/images/Pratish_Resume.pdf" target="_blank" rel="noreferrer">My Resume</a> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;

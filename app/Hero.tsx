import React from "react";

const Hero = () => (
  <div className="relative flex flex-col items-center justify-center p-6 text-[#ebebeb] md:flex-row md:items-center md:justify-around md:p-10">
    <div
      className="absolute inset-0 rounded-md"
      style={{
        backgroundColor: "#d64933",
        opacity: 0.7,
        zIndex: -1,
      }}
    />
    <div className="z-10 mx-auto max-w-md">
      <h1 className="mb-2 text-3xl font-bold md:text-5xl">
        <span className="block whitespace-nowrap">Welcome to</span>
        <span className="block bg-gradient-to-r from-[#337180] to-[#212936] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          Sonic Workshop
        </span>
      </h1>
      <p className="mb-5 text-lg md:text-xl">
        Collaborate, create, and share your music with the world.
      </p>
      <button className="rounded-md bg-[#cad2c5] px-5 py-2 text-lg font-bold text-[#212936] hover:bg-[#EBEBEB]">
        Get Started
      </button>
    </div>
  </div>
);

export default Hero;

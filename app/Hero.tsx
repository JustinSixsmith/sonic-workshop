import React from "react";
import Image from "next/image";

const Hero = () => (
  <div className="flex flex-col items-center justify-center rounded-md bg-[#d64933] p-6 text-[#ebebeb] md:flex-row md:items-center md:justify-around md:p-10">
    <div className="max-w-md md:mx-5">
      <h1 className="mb-2 text-3xl font-bold md:text-5xl">
        <span className="block whitespace-nowrap">Welcome to</span>
        <span className="block bg-gradient-to-r from-[#337180] to-[#212936] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          Sonic Workshop
        </span>
      </h1>
      <p className="mb-5 text-lg md:text-xl">
        Collaborate, create, and share your music with the world.
      </p>
      <button className="rounded bg-[#cad2c5] px-5 py-2 text-lg font-bold text-[#212936] hover:bg-[#EBEBEB]">
        Get Started
      </button>
    </div>
    <Image
      className="mt-6 h-48 w-48 object-cover md:mt-0 md:h-96 md:w-96 lg:h-1/2 lg:w-1/2"
      width={400}
      height={400}
      src="/hero-image.png"
      alt="Hero Image"
    />
  </div>
);

export default Hero;

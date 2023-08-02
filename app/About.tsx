import Image from "next/image";

export default function About() {
  return (
    <div className="relative flex flex-col-reverse overflow-hidden rounded-md bg-[#337180] px-4 py-10 shadow-xl sm:px-6 md:flex-row lg:px-8 lg:py-10">
      <div className="w-full md:w-1/2">
        <Image
          width={400}
          height={400}
          className="h-full w-full object-cover sm:h-full md:h-full lg:h-full lg:w-full"
          src="/about-collage.png"
          alt="Music Collaboration Collage"
        />
      </div>
      <div className="flex w-full flex-col justify-center bg-[#cad2c5] p-10 md:w-1/2">
        <h2 className="mb-4 text-3xl font-extrabold text-[#212936]">
          Uniting Musicians Across The Boundaries of Sound
        </h2>
        <p className="text-lg leading-6 text-[#212936]">
          Sonic Workshop is a platform designed for musicians by musicians, with
          the goal of tearing down the barriers that distance and location put
          up around creativity. We believe in the power of collaboration and the
          magic that happens when artists from different backgrounds, genres,
          and experiences come together. With our platform, musicians can
          collaborate, share their work, and grow their skills, no matter where
          they are in the world. Join us and be part of the future of music
          creation.
        </p>
      </div>
    </div>
  );
}

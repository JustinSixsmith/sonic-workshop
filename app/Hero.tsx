import React from "react";

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
    <img
      className="mt-6 h-48 w-48 object-cover md:mt-0 md:h-96 md:w-96 lg:h-1/2 lg:w-1/2"
      src="https://previews.dropbox.com/p/thumb/AB8au61ECPvuX3rygIzI6y7VUzh_3_ItAbBOp-yi2CHfo5LtJ2XRGyvYgxZvS4Wefmo2Vn1DeJCk7IeFEVJkR3Bkrc2ksa-DW0lvP8zZqpLa6IHKFo2QOS4IbB-TpwUhuOeUQm-MHWqPQngk5R_HVCRq3R4_R-6jZPUSiVI_tqBqk3XIxtHLXpxcyuyo4wfiUih7JOsbC9f7vQOvIuwOI9dqiCpcHIoMw4qlJp1x3VMMe6KAX8fJ55139fBI7PB5MsLIw0lD58E3XBi5AUFJ0j5yTHNvODOC0crt6NawBPQr2TDOFdZaaMenclY001Zr2-KUqdnI251Ecrr1zKnS6lMq/p.png"
      alt="Hero"
    />
  </div>
);

export default Hero;

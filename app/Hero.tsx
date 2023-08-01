import React from "react";

const Hero = () => (
  <div className="flex h-[300px] flex-col items-center justify-between bg-[#d64933] p-10 text-[#ebebeb] md:h-screen md:flex-row">
    <div className="max-w-lg px-5">
      <h1 className="mb-2 text-4xl font-bold md:text-6xl">
        Welcome to <p className="text-[#212936]">Sonic Workshop</p>
      </h1>
      <p className="mb-5 text-lg md:text-2xl">
        Collaborate, create, and share your music with the world.
      </p>
      <button className="rounded bg-[#cad2c5] px-4 py-2 font-bold text-[#212936] hover:bg-[#ebebeb]">
        Get Started
      </button>
    </div>
    <img
      className="mt-10 hidden w-64 overflow-hidden object-contain md:mt-0 md:block md:w-auto"
      src="https://previews.dropbox.com/p/thumb/AB8au61ECPvuX3rygIzI6y7VUzh_3_ItAbBOp-yi2CHfo5LtJ2XRGyvYgxZvS4Wefmo2Vn1DeJCk7IeFEVJkR3Bkrc2ksa-DW0lvP8zZqpLa6IHKFo2QOS4IbB-TpwUhuOeUQm-MHWqPQngk5R_HVCRq3R4_R-6jZPUSiVI_tqBqk3XIxtHLXpxcyuyo4wfiUih7JOsbC9f7vQOvIuwOI9dqiCpcHIoMw4qlJp1x3VMMe6KAX8fJ55139fBI7PB5MsLIw0lD58E3XBi5AUFJ0j5yTHNvODOC0crt6NawBPQr2TDOFdZaaMenclY001Zr2-KUqdnI251Ecrr1zKnS6lMq/p.png"
      alt="Hero"
    />
  </div>
);

export default Hero;

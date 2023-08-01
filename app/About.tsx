export default function About() {
  return (
    <div className="relative overflow-hidden rounded-md bg-[#337180] px-4 py-10 shadow-xl sm:px-6 lg:px-8 lg:py-10">
      <img
        className="h-56 w-full object-cover sm:h-72 md:hidden md:h-96 lg:h-full lg:w-full"
        src="https://previews.dropbox.com/p/thumb/AB_QRKt2Q_Xdy8lzu6VY2ndcjX_ZCpGv7dl73_tpkHlFCwaPrswWfYA_U21atvcNutClYCFxngZIGQew_7_I5bCdrjRDXEi0N7cIri6vGVwupPDZ3w_A_7EMPaZ3YiQkU-WcZjhcVIUhvyZKsfgrJ7cs68aYlPskz5DYfdKLvLuQTSin780jgU84ENDj5f6XPVkSa7wCtWiVSOPhJDkDmEIuXPkpmCOyUL6ED7yHz-SiqlU-Eor89__tso-rsID9elOKZFJckGgEw8OjCaQEYoZih16NKkG9xhiMKCLoLwaW1m5s-JrChB92zyOhNEc8cQs0Oim_bpIOmVZWWpaWUuqq/p.png"
        alt="Music Collaboration Collage"
      />
      <div className="absolute inset-0 bg-[#cad2c5] mix-blend-multiply" />
      <div className="relative px-4 py-10 sm:px-6 lg:px-8 lg:py-2">
        <h2 className="text-2xl font-extrabold text-[#EBEBEB] sm:text-3xl">
          <span className="block bg-[#212936] bg-opacity-50 p-2">
            Uniting Musicians Across
          </span>
          <span className="block bg-[#212936] bg-opacity-50 p-2">
            The Boundaries of Sound
          </span>
        </h2>
        <p className="text-md mt-4 bg-[#212936] bg-opacity-50 p-2 leading-6 text-[#EBEBEB] md:text-lg">
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

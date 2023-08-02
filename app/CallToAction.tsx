export default function CallToAction() {
  return (
    <div className="rounded bg-[#d64933] py-8 text-[#ebebeb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          <span className="block">Ready to transform</span>
          <span className="block text-[#EBEBEB]">
            your music collaboration experience?
          </span>
        </h2>
        <p className="mt-2 text-lg">
          Begin your free trial today and enjoy limitless collaboration, easy
          file sharing, live jam sessions, and a global community of musicians
          eager to collaborate and grow. Unleash your creativity with Sonic
          Workshop.
        </p>
        <div className="mt-4 flex">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#212936] px-4 py-2 text-sm font-medium text-[#cad2c5] hover:bg-[#181d24]"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#ebebeb] px-4 py-2 text-sm font-medium text-[#212936] hover:bg-[#d5d5d5]"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

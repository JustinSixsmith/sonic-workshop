export default function Hero() {
  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-[#337180]">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#337180] px-5 py-3 text-base font-medium text-[#EBEBEB] hover:bg-[#2F6775]"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#D5DCD1] px-5 py-3 text-base font-medium text-[#337180] hover:bg-[#CAD2C5]"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

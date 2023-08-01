const features = [
  {
    name: "Global Collaboration",
    description:
      "Connect with musicians around the world and work together to create your next masterpiece.",
  },
  {
    name: "Real-time Jamming",
    description:
      "Feel the thrill of live jamming sessions with our ultra-low latency audio streaming.",
  },
  {
    name: "Effortless File Sharing",
    description:
      "Share your tracks, stems, and ideas smoothly and securely with collaborators.",
  },
  // More items...
];

export default function Features() {
  return (
    <div className="bg-[#ebebeb] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-[#337180]">
            Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-[#212936] sm:text-4xl">
            Revolutionize your music creation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-[#212936] lg:mx-auto">
            Sonic Workshop provides a unique platform to collaborate, create,
            and enjoy music in an entirely new way.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#337180] text-[#EBEBEB]">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-[#212936]">
                    {feature.name}
                  </p>
                </dt>
                <dd className="ml-16 mt-2 text-base text-[#212936]">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

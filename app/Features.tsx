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
  {
    name: "Integrated Feedback Loop",
    description:
      "Instantly share and receive constructive feedback within the shared workspace.",
  },

  // More items...
];

export default function Features() {
  return (
    <div className="bg-[#cad2c5] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-[#ebebeb]">
            Features
          </h2>
          <p className="mt-2 text-2xl font-extrabold tracking-tight text-[#212936] sm:text-3xl">
            Revolutionize your music creation
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-[#212936]">
            Sonic Workshop provides a unique platform to collaborate, create,
            and enjoy music in an entirely new way.
          </p>
        </div>

        <div className="mt-8">
          <dl className="space-y-8 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative rounded-lg bg-[#212936] p-4 text-[#ebebeb] shadow-lg transition-transform duration-500 hover:scale-105"
              >
                <dt>
                  <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#d64933]">
                    <svg
                      className="h-5 w-5"
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
                  <p className="mt-6 text-lg font-medium">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-sm">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

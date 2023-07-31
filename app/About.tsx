export default function About() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-2xl bg-indigo-600 px-4 py-10 shadow-xl lg:px-8 lg:py-20">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="/path-to-your-image"
            alt=""
          />
          <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
          <div className="relative px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              <span className="block">A better way to</span>
              <span className="block">enjoy every day.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              We believe that life is better when you get together, so we’ve
              made it easier to find each other and make the most of every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

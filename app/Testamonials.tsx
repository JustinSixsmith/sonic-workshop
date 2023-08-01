const testimonials = [
  {
    name: "Jane Doe",
    role: "Lead Guitarist, The Band",
    image: "/images/testimonial/jane-doe.jpg", // replace with your image path
    content: `Sonic Workshop has revolutionized our songwriting process. The real-time collaboration is a game-changer.`,
  },
  {
    name: "John Smith",
    role: "Producer, Studio XYZ",
    image: "/images/testimonial/john-smith.jpg", // replace with your image path
    content: `File sharing has never been easier. We can focus on creating music rather than dealing with logistics.`,
  },
  {
    name: "Alex Johnson",
    role: "Drummer, High Beats",
    image: "/images/testimonial/alex-johnson.jpg", // replace with your image path
    content: `Sonic Workshop's online tools have given our band the flexibility to collaborate wherever we are. We can start a new project or jump into an existing one with just a few clicks. It's amazing.`,
  },
  // add more testimonials here
];

export default function Testimonials() {
  return (
    <div className="bg-[#ebebeb]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-extrabold text-[#212936]">
          What Our Users Are Saying
        </h2>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name}>
                <div className="mt-6">
                  <blockquote>
                    <div>
                      <p className="text-lg text-[#212936]">
                        {testimonial.content}
                      </p>
                    </div>
                    <footer className="mt-6">
                      <p className="flex items-center text-base font-medium text-[#212936]">
                        <img
                          src={testimonial.image}
                          alt=""
                          className="mr-4 h-10 w-10 flex-shrink-0 rounded-full bg-[#cad2c5]"
                        />
                        <em>{testimonial.name}</em>
                        <span className="font-normal text-[#337180]">
                          , {testimonial.role}
                        </span>
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

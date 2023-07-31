const testimonials = [
  {
    name: "Sarah Dayan",
    role: "Staff Engineer, Algolia",
    image: "/images/testimonial/sarah-dayan.jpg", // replace with your image path
    content: `This is a fantastic product. It's been indispensable for our team, and I can't recommend it highly enough.`,
  },
  {
    name: "Joshua Comeau",
    role: "Software Engineer, Trello",
    image: "/images/testimonial/joshua-comeau.jpg", // replace with your image path
    content: `This product blew me away. I love how it's transformed our workflow.`,
  },
  // add more testimonials here
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900">
          What people are saying
        </h2>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name}>
                <div className="mt-6">
                  <blockquote>
                    <div>
                      <p className="text-lg">{testimonial.content}</p>
                    </div>
                    <footer className="mt-6">
                      <p className="flex items-center text-base font-medium text-gray-900">
                        <img
                          src={testimonial.image}
                          alt=""
                          className="mr-4 h-10 w-10 flex-shrink-0 rounded-full bg-indigo-300"
                        />
                        <em>{testimonial.name}</em>
                        <span className="font-normal text-gray-500">
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

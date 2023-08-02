import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Lead Guitarist, The Band",
    image: "https://xsgames.co/randomusers/avatar.php?g=female",
    content: `"Sonic Workshop has revolutionized our songwriting process. The real-time collaboration is a game-changer."`,
  },
  {
    name: "John Smith",
    role: "Producer, Studio XYZ",
    image: "https://xsgames.co/randomusers/avatar.php?g=male", // replace with your image path
    content: `"File sharing has never been easier. We can focus on creating music rather than dealing with logistics."`,
  },
  {
    name: "Alex Johnson",
    role: "Drummer, High Beats",
    image: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    content: `"Sonic Workshop's online tools have given our band the flexibility to collaborate wherever we are. We can start a new project or jump into an existing one with just a few clicks. It's amazing."`,
  },
  // add more testimonials here
];

export default function Testimonials() {
  return (
    <div className="bg-[#212936] py-12 text-[#ebebeb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold">What Our Users Are Saying</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-lg bg-[#337180] p-4 shadow-lg"
            >
              <blockquote className="flex-grow">
                <div>
                  <p className="text-lg">{testimonial.content}</p>
                </div>
              </blockquote>
              <footer className="mt-4">
                <p className="flex items-center text-base font-medium">
                  <Image
                    width={10}
                    height={10}
                    src={testimonial.image}
                    alt=""
                    className="mr-4 h-8 w-8 flex-shrink-0 rounded-full bg-[#cad2c5]"
                  />
                  <em>{testimonial.name}</em>
                  <span className="ml-2 font-normal text-[#ebebeb]">
                    , {testimonial.role}
                  </span>
                </p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

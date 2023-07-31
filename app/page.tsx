import About from "./About";
import CallToAction from "./CallToAction";
import Features from "./Features";
import Hero from "./Hero";
import Testamonials from "./Testamonials";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col space-y-8 bg-gray-100 px-4 pb-8 pt-8 text-gray-900">
      <Hero />
      <About />
      <Features />
      <CallToAction />
      <Testamonials />
    </main>
  );
}

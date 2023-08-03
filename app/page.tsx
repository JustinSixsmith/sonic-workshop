import About from "./About";
import CallToAction from "./CallToAction";
import Features from "./Features";
import Hero from "./Hero";
import Testamonials from "./Testamonials";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/hipster-friends.mp4" type="video/mp4" />
      </video>
      <div className="md:flex">
        <div className="md:w-1/2">
          <Hero />
        </div>
        <div className="hidden bg-[#d64933] opacity-70 md:block md:w-1/2"></div>
      </div>
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col space-y-8 rounded-md px-4 pb-8 pt-8 text-gray-900 opacity-95">
        <About />
        <Features />
        <CallToAction />
        <Testamonials />
      </main>
    </div>
  );
}

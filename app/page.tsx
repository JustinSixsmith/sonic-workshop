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
          right: 0,
          bottom: 0,
          minWidth: "100%",
          minHeight: "100%",
          zIndex: -1,
        }}
      >
        <source src="/hipster-friends.mp4" type="video/mp4" />
      </video>
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col space-y-3 rounded px-3 pb-3 pt-3 text-gray-900 opacity-95">
        <Hero />
        <About />
        <Features />
        <CallToAction />
        <Testamonials />
      </main>
    </div>
  );
}

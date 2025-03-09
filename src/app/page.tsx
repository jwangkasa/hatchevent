import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/tea.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

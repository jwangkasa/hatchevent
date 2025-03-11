import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";

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
      <div className="relative z-10">
        <Navbar />
        <div className="px-[20px] py-[50px]">
          <h1 className="text-center text-[38px] leading-[40px] text-[#172026] text-medium font-parisienne">
            About HatchEvent
          </h1>
          <div className="flex w-full px-4 justify-center items-center">
            <p className="text-center pt-3 text-xs sm:text-sm md:text-base lg:w-1/2 font-medium text-[#36485C] pb-4 font-sans break-words whitespace-normal">
              HatchEvent is an online marketplace that connects people and
              companies to create an unique experiences.
              <br />
              <br />
              HatchEvent allows vendors to offer their venues
              and promotes it using the AI technology to the Event Organizers.
              The platform is designed to help people find authentic, local
              experiences by celebrating their special occasion in our partners'
              venues
              <br />
              <br />
              HatchEvent's mission is to create a world where anyone can belong
              anywhere, enabling venue providers to share their spaces and event
              organizer to experience new places in a more personal and
              cost-effective way. The company promotes a sense of community and
              offers a variety of tools to ensure trust and safety between hosts
              and guests, including reviews, secure payment systems, and a
              dedicated support team.
              <br />
              
            </p>
          </div>
        </div>
        </div>
      <Footer />
    </div>
  );
}

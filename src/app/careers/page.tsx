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
            Careers
          </h1>
          <div className="flex w-full px-4 justify-center items-center">
            <p className="text-center pt-3 text-xs sm:text-sm md:text-base lg:w-1/2 font-medium text-[#36485C] pb-4 font-sans break-words whitespace-normal">
              We will be posting for the available positions in the near future.
              <br />
              <br/>
              
             Alternatively you can reach out to us at:
                <br/>
                 Email: enquiry@hatchevent.com
                 <br/>
                 1 Coleman Street, #04-02, The Adelphi, Singapore 179803
              
            
            </p>
          </div>
        </div>
        </div>
      <Footer />
    </div>
  );
}

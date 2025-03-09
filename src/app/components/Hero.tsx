"use client"; // 👈 Add this at the top

export function Hero() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="px-[20px]">
        <h1 className="text-center text-[38px] leading-[40px] text-[#172026] text-medium font-parisienne">
          Bringing Events to Life
        </h1>
        <div className="flex w-full px-4 justify-center items-center">
        <p className="text-center pt-3 text-xs sm:text-sm md:text-base font-medium text-[#36485C] pb-4">
          HatchEvent empowers event organizers to create unforgettable experiences with AI and cutting-edge technology. It simplifies event-related services, ensuring a seamless planning process for both private and corporate event planners.
        </p>
      </div>

        <div className="flex w-full items-center justify-center">
          <button
            className="bg-[#ec7f11] w-1/2 py-2 px-6 text-white rounded-[4px]"
            onClick={() =>
              (window.location.href = "mailto:enquiries@hatchevent.com")
            }
          >
            Coming in July 2025!
          </button>
        </div>
      </div>
    </div>
  );
}

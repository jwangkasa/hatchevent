"use client"; // 👈 Add this at the top

export function Hero() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="px-[20px]">
                <h1 className="text-center text-[38px] leading-[40px] text-[#172026] text-medium font-parisienne">
                    Bringing Events to Life
                </h1>
                <div className="flex w-[500px] justify-center items-center">
               
                <p className="text-center pt-[12px] text-xs text-medium text-[#36485C] pb-4">
                We take the hassle out of venue searching by seamlessly matching you with the perfect locations for your events. Our AI-powered tools are designed to elevate your event planning experience, helping you make smarter, faster decisions. Let us handle the details, so you can focus on creating exceptional experiences!
                </p>
                </div>

                <div className="flex w-full items-center justify-center">
                <button
                    className="bg-[#ec7f11] w-1/2 py-2 px-6 text-white rounded-[4px]"
                    onClick={() => window.location.href = "mailto:enquiries@hatchevent.com"}
                >
                    Coming in July 2025!
                </button>


                </div>
            </div>
        </div>
    );
}

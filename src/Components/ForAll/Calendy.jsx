import { InlineWidget } from "react-calendly";

const Calendy = () => {
    return (
      <div className="flex justify-center items-center py-12 bg-black text-white">
        <div className="w-full max-w-4xl p-6 rounded-lg shadow-lg bg-[#1a1a1a] border border-[#333]">
          <h2 className="text-center text-3xl font-bold mb-4 bg-gradient-to-r from-[#FA7C0B] via-[#9F8CED] to-[#9DE8EE] bg-clip-text text-transparent">
            Schedule a Meeting
          </h2>
          <p className="text-center text-lg text-gray-400 mb-6">
            Book a free consultation with Nexile Digital to discuss your project.
          </p>
          <div className="overflow-hidden rounded-lg">
            <InlineWidget 
              url="https://calendly.com/technicalashraf4/30min" 
              styles={{ height: "700px" }} 
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Calendy;
  
import axios from "axios";
import { useEffect, useState } from "react";
import { endPoint } from "./ForAll";
import { Link } from "react-router-dom";

const Header = () => {
    const [header, setHeader] = useState();
    const [loading, setLoading] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchHeader = async () => {
            try {
                const response = await axios.get(`${endPoint}/hero`);
                console.log(response.data);
                setHeader(response.data);
            } catch (error) {
                console.error("Error fetching header data:", error);
            } finally {
                // Set a timeout for loader to hide after 3 seconds if data fetch is complete
        const timer = setTimeout(() => setLoading(false), 200);

        return () => clearTimeout(timer); // Clear the timer on component unmount
            }
        };
        fetchHeader();
    }, []);
    

    // Skeleton loader component
    const SkeletonLoader = () => ( 
            <div className="animate-pulse flex gap-5 navbar justify-between">
                <div className="h-12 bg-gray-300 w-[300px] rounded"></div>
                <div className="flex gap-2 w-[40%] items-center justify-end lg:justify-center">
                <div className="h-6 bg-white w-full rounded lg:block hidden"></div>
                <div className="h-6 bg-white w-full rounded lg:block hidden"></div>
                <div className="h-6 bg-white w-full rounded lg:block hidden"></div>
                <div className="h-6 bg-white w-full rounded lg:block hidden"></div>
                <div className="h-6 bg-white w-full rounded lg:block hidden"></div>
                <div className="h-6 bg-white lg:w-full rounded w-10"></div>
                </div>
            </div>
    );

    return (
        <div className="navbar relative z-[100]">
            {loading ? (
                <SkeletonLoader />
            ) : (
                <div className="navbar p-3 flex justify-between items-center">
                    <Link to="/">
                    <img 
                        src={header[0]?.logo || ''} 
                        alt={`${header[0]?.title || ''} ${header[0]?.description || ''}`} 
                        className="w-[250px] h-[52px]"
                    /></Link>
                    <div className="text-white flex-none menu menu-horizontal px-3 gap-6 poppins-regular text-[18px] font-light hidden md:hidden lg:flex" 
                        style={{ textDecoration: 'none' }}>
                        {header[0]?.menu && header[0].menu.map(item => (
                            <p key={item._id}>
                                <Link to={item?.link}>{item?.name}</Link>
                            </p>
                        ))}
                    </div>
                    <div className="lg:hidden">
                        <button 
                            onClick={() => setIsDropdownOpen(true)} 
                            className="btn btn-ghost text-white btn-circle"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </button>
                    </div>
                  {/* Dropdown overlay */}
                  {isDropdownOpen && (
  <div
    className="fixed lg:hidden inset-0 z-[9999] w-full h-full bg-black bg-opacity-100 flex flex-col p-4 text-white overflow-y-auto"
  >
   <div className="bg-black w-full h-full relative !z-[3200]">
     {/* Close Button */}
     <button
      onClick={() => setIsDropdownOpen(false)}
      className="text-2xl ml-auto mb-4"
    >
      ✖
    </button>

    {/* Logo */}
    <img
      src={header[0]?.logo || ""}
      alt={`${header[0]?.title || ""} ${header[0]?.description || ""}`}
      className="w-[250px] h-[50px] mb-10 mx-auto"
    />

    {/* Menu Items */}
    <div className="text-center space-y-6 text-[18px] font-light poppins-regular">
      {header[0]?.menu &&
        header[0].menu.map((item) => (
          <Link to={item?.link} key={item._id}>
            <p
              className="mb-2 no-underline bg-white bg-opacity-60 
                         text-black px-24 py-2 rounded-md md:w-[60%] mx-auto w-full"
            >
              {item?.name}
            </p>
          </Link>
        ))}
    </div>
   </div>
  </div>
)}



                </div>
            )}
        </div>
    );
};

export default Header;

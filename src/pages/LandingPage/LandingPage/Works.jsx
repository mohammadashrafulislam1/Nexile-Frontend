import { useEffect, useState } from "react";
import axios from "axios";
import { endPoint } from "../../../Components/ForAll/ForAll";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { LuMoveRight } from "react-icons/lu";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${endPoint}/TechCategory`);
        setCategories(response.data.techCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchWorks = async () => {
      try {
        const worksResponse = await axios.get(`${endPoint}/works`);
        setWorks(worksResponse.data.works);
        
      } catch (error) {
        console.error("Error fetching works:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchWorks();
  }, []);

  const filteredWorks = selectedCategory
    ? works.filter((work) => work.category === selectedCategory)
    : works;

  if (loading) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <div className="px-8 lg:py-5 relative overflow-hidden">
      <div className="lg:flex justify-end flex-row-reverse items-center mt-14 md:mt-0">
        <h2 className="text-white lg:py-6 pb-6 text-right lg:text-[120px] text-[40px] uppercase font-bold underline lg:leading-[160px] leading-[40px]">
          projects by
          nexile digital
        </h2>
        <div className="lg:w-[56%]">
          <p className="font-[100] text-white text-[20px]">
            There are some projects that we have done. All of these projects
            have been featured by us. Click the arrow button to see all projects
            done by Nexile Digital.
          </p>
          <Link to="/projects" className=" flex justify-end">
            <img
              src="https://res.cloudinary.com/dnwmtd4p1/image/upload/v1732024726/nexile%20digital/assets/ejj6ajpv5ykj5qdgeqmi.png"
              className="lg:w-[125px] w-[80px]"
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 py-20 items-center">
        <div className="lg:col-span-1 md:mb-0 mb-40 relative z-10">
          {categories.map((category) => (
            <div
              key={category._id}
              className={`group flex z-12 relative cursor-pointer justify-between items-center border-b-[3px] border-[#333] py-6 z-10 ${
                selectedCategory === category._id ? "text-white" : "text-[#A8A8A8]"
              }`}
              onClick={() => setSelectedCategory(category._id)}
            >
              <h3 className="lg:text-[43px] text-[20px] md:text-[30px] poppins-semibold md:col-span-4 group-hover:text-white relative md:mb-0">
                {category.name}
                <span className="hidden group-hover:inline-block bg-[#00ECFB] w-2 h-2 ml-2 mb-1 rounded-sm absolute bottom-2"></span>
              </h3>
              <FaChevronRight className="group-hover:text-white font-bold text-2xl" />
            </div>
          ))}
          <img
            src="https://res.cloudinary.com/dnwmtd4p1/image/upload/v1734280441/nexile%20digital/asset/nrgvfbmnz8aqd1byy2ck.webp"
            alt=""
            className="absolute top-0 ml-[-40px] w-full h-full z-0"
          />
        </div>

        <div className="lg:col-span-2 md:px-8 relative md:mt-24 lg:mt-0">
          <div>
            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {filteredWorks.map((work) => (
                <SwiperSlide key={work._id} className="p-4 rounded-lg shadow-md">
                  <div className="md:grid grid-cols-4 items-center lg:mb-4">
                    <div className="col-span-3 relative w-full md:h-[440px] overflow-visible">
                      <img
                        src={
                          work?.images?.[0]?.url ||
                          "https://via.placeholder.com/150"
                        }
                        alt={work.title}
                        className="!md:w-[540px] w-full md:h-[420px] object-cover rounded-[10px] mt-10"
                      />
                      <div className="absolute md:h-[470px] inset-0 bg-black bg-opacity-50 rounded-[10px] opacity-80 transition-opacity duration-300 flex items-center justify-center"></div>

                      <img
                        src="https://res.cloudinary.com/dnwmtd4p1/image/upload/v1734276289/nexile%20digital/asset/fslpkycofr0yd2w0xjv5.webp"
                        alt=""
                        className="absolute lg:top-[-23px] top-[-32px] right-[-30px] z-20"
                      />
                    </div>

                    <div className="col-span-1 md:ml-[-120px] z-20">
                      <h3 className="mt-4 text-white poppins-semibold md:text-[49px] text-[29px]">
                        {work.title}
                      </h3>
                      <p className="text-[20px] text-[#00ECFB]">
  {categories.find((cat) => cat._id === work.category)?.name || "No category specified"}
</p>

                      <Link to={`/project/${work.title.replace(/\s+/g, "_")}`}>
                        <div className="md:text-[30px] text-[#fff] flex items-center gap-3 border-b-[2px] w-fit">
                          View This project
                          <LuMoveRight className="md:text-5xl font-[400]" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <img
            src="https://res.cloudinary.com/dnwmtd4p1/image/upload/v1734277609/nexile%20digital/asset/pj1hz0xmvb0lxvx74qw2.webp"
            alt=""
            className="absolute top-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;

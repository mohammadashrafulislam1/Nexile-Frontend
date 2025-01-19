import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { endPoint } from "../../Components/ForAll/ForAll";
import axios from "axios";
import Footer from "../../Components/ForAll/Footer";
import Header from "../../Components/ForAll/Header";
import { Helmet } from "react-helmet";

const SingleService = () =>{
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [matchedTechStack, setMatchedTechStack] = useState([]); // State for matched tech stack
    const { title } = useParams();
    const realUrl = title.replace(/-/g, " ");
    console.log(service)

    useEffect(() => {
      const fetchService = async () => {
        try {
          const serviceRes = await axios.get(`${endPoint}/service/${realUrl}`);
          const service = serviceRes.data;
          setService(service);
  
          const techStackRes = await axios.get(`${endPoint}/techstack`);
          const techStack = techStackRes.data.techStack;
  
          // Filter the tech stack based on IDs in the service.tools array
          const matched = techStack.filter((tech) =>
            service.tools.includes(tech._id)
          );
          setMatchedTechStack(matched);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchService();
    }, [realUrl]);

    return(
        <div >
        {/* Helmet for SEO */}
        <Helmet>
          <title>{realUrl} by Nexile Digital</title>
          <meta
            name="description"
            content={`${realUrl} - Projects that Nexile Digital built. Nexile Digital is an all-in-one digital solutions provider offering web development, web design, SEO (Search Engine Optimization), Video Editing, UX & UI Design, and Figma services.`}
          ></meta>
        </Helmet>
  
        <div className="bg-black overflow-hidden  w-screen">
          <div className="relative z-0 bg-black">
            <div
              style={{
                backgroundImage: 'url(https://res.cloudinary.com/dnwmtd4p1/image/upload/v1731040743/nexile%20digital/asset/otjfpjewv5z1bubx26kr.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: '',
                zIndex: 0,
              }}
              className=""
            >
              {/* Background images */}
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dnwmtd4p1/image/upload/v1731040743/nexile%20digital/asset/ebqjrqhwdf0puwpmup9g.webp"
                  alt=""
                  className="absolute right-0 z-[-1]"
                />
                <img
                  src="https://res.cloudinary.com/dnwmtd4p1/image/upload/v1731040744/nexile%20digital/asset/krjhtmdwyfeoebirihzq.webp"
                  alt=""
                  className="absolute left-0 z-[-1]"
                />
              </div>
  
              {/* Header */}
              <Header className="relative z-10" />
  
              {/* Content or Skeleton Loader */}
              <div className="h-[1040px] text-center">
                  <h2 className="lg:text-[120px] mt-24 text-[40px] font-bold lg:leading-[70px] leading-[40px] my-4 text-white text-center uppercase z-40" style={{ letterSpacing: '-3px' }}>
                    {realUrl}
                  </h2>
                  <p className="poppins-light text-white text-[20px]">{service?.subtitle}</p>
                 <img src={service?.mainServiceImage} alt={realUrl} className="lg:w-[910px] w-[97%] md:h-[560px] h-[400px] mx-auto rounded-[10px] mt-7 object-cover"/>
              
                </div>
  
              {/* Black shadow at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-0"></div>
            </div>
            
            {/* main content goes here */}
             <div className="lg:mt-[-350px] md:mt-[-380px] mt-[-480px] relative mb-24 !z-24">
                {/* Approach Section */}
                <div className="mt-32 px-8">
  <h2
    className="lg:text-[60px] text-[40px] font-bold lg:leading-[70px] leading-[40px] my-4 text-white text-center uppercase z-40"
    style={{ letterSpacing: "-3px" }}
  >
    Our Approach
  </h2>
  <div className="mt-5">
    {service?.approach.map((item, index) => (
      <div
        key={item._id}
        className={`flex flex-col lg:flex-row items-center gap-8 my-8 group ${
          index % 2 !== 0 ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="rounded-md w-full lg:w-1/2 lg:h-1/2 h-1/2 object-cover mb-4 lg:mb-0"
        />
        {/* Text Content */}
        <div className="lg:w-1/2 w-full ">
        <h3 className="text-[#A8A8A8] lg:text-[46px] text-[20px] md:text-[30px] poppins-semibold md:col-span-4 group-hover:text-white relative md:mb-0 ">
                      {item.title}
                      {/* Square Dot */}
                      <span className="hidden group-hover:inline-block bg-[#00ECFB] w-2 h-2 ml-2 rounded-sm absolute bottom-2"></span>
                    </h3>
          <p className="text-gray-400 mt-2 group-hover:text-gray-300 poppins-light">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


  {/* Process Section */}
<div className="md:mt-32 bg-opacity-30 px-8 py-24 relative" 
style={{ backgroundImage: 'url(https://res.cloudinary.com/dnwmtd4p1/image/upload/v1736710872/nexile%20digital/asset/fcrvpqo4dbq9hjguy9pd.webp)', 
backgroundSize: 'cover', backgroundPosition: 'center', 
backgroundRepeat:'no-repeat',
backfaceVisibility:'unset'}}>{/* Black shadow at the bottom */}
<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-0"></div>
<div className="absolute top-0 left-0 right-0 h-40 rotate-180 bg-gradient-to-t from-black to-transparent z-0"></div>
 {/* Full Black Layer with Opacity */}
 <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80 z-10"></div>

 <div className="z-20 relative">
 <h2 className="lg:text-[60px] text-[40px] font-bold lg:leading-[70px] leading-[40px] my-4 text-white text-center uppercase z-40" style={{ letterSpacing: '-3px' }}>
    Our Process
  </h2>
  <div className="timeline max-w-7xl my-24 mx-auto relative">
    {/* Vertical Line */}
    <div className="absolute left-1/2 w-[1px] h-full bg-gray-600 transform -translate-x-1/2 z-0"></div>

    {/* Timeline Items */}
    {service?.process.map((item, index) => (
      <div
        key={item._id}
        className={`timeline-item gap-2 md:w-[54%] flex ${index % 2 === 0 ? 'flex-row-reverse mr-auto' : 'ml-auto'} items-start mb-12 z-20`}
      >
        {/* Timeline Date with Blinking Shadow */}
        <div className="timeline-date relative flex justify-center items-center mb-4 w-24 h-24 rounded-full bg-gradient-to-r from-[#00ECFB] via-indigo-500 to-pink-500 animate-glowing-shadow">
          <img src={item.image} alt={item.title} className="absolute w-20 h-20 object-cover rounded-full" />
        </div>

        {/* Timeline Content with Glassmorphism */}
        <div className="timeline-content flex-1 p-6 bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg relative">
          <h3 className="text-xl font-semibold text-[#00ECFB]">{item.title}</h3>
          <p className="mt-4 text-gray-200">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
 </div>
</div>





        {/* Why Choose Us Section */}
        <div className="mt-32 px-8 relative">
        <h2 className="lg:text-[60px] text-[40px] font-bold lg:leading-[70px] leading-[40px] my-4 text-white text-center uppercase z-40" style={{ letterSpacing: '-3px' }}>
        Why Choose Us
                  </h2>
                  {/* Background images */}
              <div className="relative !mx-[-40px]">
                <img
                  src="https://res.cloudinary.com/dnwmtd4p1/image/upload/v1734902203/nexile%20digital/asset/x6mschkkfnxwl6njcsnj.webp"
                  alt=""
                  className="absolute right-0 top-[-310px] z-[-1]"
                />
                <img
                  src="https://res.cloudinary.com/dnwmtd4p1/image/upload/v1734789723/nexile%20digital/asset/zj7pdreutg396pv9cqdy.webp"
                  alt=""
                  className="absolute left-0 top-[700px] z-[-1]"
                />
              </div>
          <div className="">
            {service?.why.map((item, index) => (
              <div key={item._id} className="rounded-md p-4 group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md mb-4 w-24 h-24 object-cover"
                />
                <li className="flex gap-2 items-center "><div className="text-white border-[1px] 
                w-12 h-12 flex gap-2 items-center justify-center border-[#fff] px-2 rounded-full">{index+1}</div>
                {/* Service Title */}
                <h3 className="text-[#A8A8A8] lg:text-[46px] text-[20px] md:text-[30px] poppins-semibold md:col-span-4 group-hover:text-white relative md:mb-0">
                {item.title}
                      {/* Square Dot */}
                      <span className="hidden group-hover:inline-block bg-[#00ECFB] w-2 h-2 ml-2 rounded-sm absolute bottom-2"></span>
                    </h3></li>
                <p className="text-gray-400 mt-2 group-hover:text-gray-300 poppins-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Matched Tech Stack Section */}
        <div className="mt-32 p-6">
        <h2 className="lg:text-[60px] text-[40px] font-bold lg:leading-[70px] leading-[40px] my-4 text-white text-center uppercase z-40" style={{ letterSpacing: '-3px' }}>
        Tools
                  </h2>
                                <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
                                    {matchedTechStack.map((tech) => (
                                        <div
                                            key={tech._id}
                                            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2"
                                        >
                                            <img
                                                src={tech.image}
                                                alt={tech.title}
                                                className="w-16 h-16 mx-auto mb-2 object-contain"
                                            />
                                            <h3 className="text-white text-center font-semibold">{tech.title}</h3>
                                            <p className="text-gray-400 text-sm mt-2">{tech.description}</p>
                                        </div>
                                    ))}
                                </div></div>



            </div>

            <Footer className="!z-24" />
          </div>
        </div>
      </div>
    )
}
export default SingleService;
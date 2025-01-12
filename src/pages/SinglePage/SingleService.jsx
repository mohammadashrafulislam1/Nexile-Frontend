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
    const { title } = useParams();
    const realUrl = title.replace(/-/g, " ");
    console.log(service)

    useEffect(() => {
        const fetchService = async () => {
          try {
            const serviceRes = await axios.get(`${endPoint}/service/${realUrl}`);
            const service = serviceRes.data;
            setService(service)
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
                position: 'relative',
                zIndex: 0,
              }}
              className="relative"
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
              <div className="h-[1040px] ">
                  <h2 className="lg:text-[60px] text-[40px] font-bold lg:leading-[70px] leading-[40px] my-4 text-white text-center uppercase z-40" style={{ letterSpacing: '-3px' }}>
                    {realUrl}
                  </h2>
                 <img src={service?.mainServiceImage} alt={realUrl} className="lg:w-[910px] w-[97%] md:h-[560px] h-[400px] mx-auto rounded-[10px] mt-7 object-cover"/>
              
                </div>
  
              {/* Black shadow at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-0"></div>
            </div>
            
            {/* main content goes here */}
             <div className="lg:mt-[-180px]  mt-[-300px] relative mb-24 !z-24">
                {/* Approach Section */}
        <div className="mt-16 px-8">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service?.approach.map((item) => (
              <div key={item._id} className="bg-gray-800 rounded-md p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md mb-4 w-full h-40 object-cover"
                />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16 px-8">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {service?.process.map((item) => (
              <div key={item._id} className="bg-gray-800 rounded-md p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md mb-4 w-full h-40 object-cover"
                />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 px-8">
          <h2 className="text-4xl font-bold mb-6 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {service?.why.map((item) => (
              <div key={item._id} className="bg-gray-800 rounded-md p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md mb-4 w-full h-40 object-cover"
                />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
            </div>

            <Footer className="!z-24" />
          </div>
        </div>
      </div>
    )
}
export default SingleService;
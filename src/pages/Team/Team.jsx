import { Helmet } from "react-helmet";
import Header from "../../Components/ForAll/Header";
import { Link } from "react-router-dom";
import Footer from "../../Components/ForAll/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { endPoint } from "../../Components/ForAll/ForAll";
import './Team.css'

const Team =()=>{
    const [team, setTeam] = useState([])
    useEffect(() => {
        const fetchTeam = async () => {
          try {
            const response = await axios.get(`${endPoint}/team`);
            setTeam(response.data);
          } catch (error) {
            console.error("Error fetching Teams:", error);
          } finally {
            setLoading(false);
          }
        };
        fetchTeam();
    
        // Set a timeout for loader to hide after 2 seconds if data fetch is complete
        const timer = setTimeout(() => setLoading(false), 2000);
    
        return () => clearTimeout(timer); // Clear the timer on component unmount
      }, []);
      console.log(team)
    return(
        <div>
        {/* Helmet */}
        <Helmet>
        <title>Team members of Nexile Digital</title>
        <meta name="description" content="Team members of Nexile Digital to know more about our digital solutions providers. Nexile Digital is a all in one digital solutions. Nexile Digital provides web development, web design, SEO (Search Engine Optimization), Video Editing, UX & UI Design, Figma services."></meta>
        </Helmet>
    
        {/* Content */}
       <div className="bg-black overflow-hidden">
       <div 
      className="relative z-0 bg-black" 
      >
      <div 
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dnwmtd4p1/image/upload/v1731040743/nexile%20digital/asset/otjfpjewv5z1bubx26kr.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', // Ensure background is a layer
        zIndex: 0, // Send background layer to the back
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
    
      {/* Content */}
      <Header className="relative z-10" />

     

     <div className=" h-[1040px]">
     <h2 className="lg:text-[130px] text-[60px] font-bold lg:leading-[130px] leading-[60px] text-white text-center uppercase z-40" 
             style={{letterSpacing:'-5px'}}>Team members of nexile digital</h2>
      <p className="lg:text-[30px] text-[20px] text-white font-[100] text-center">know more about our digital solutions providers.</p>
      <Link to={"/contact_us"} className="flex justify-center my-4">
        <button className="bg-white lg:py-2 lg:px-7 px-4 py-2 text-[20px] rounded-sm poppins-medium lg:text-[25px]">
’            Lets Get Solution!</button></Link>
            

     </div>


    
    
      {/* Black shadow at the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10"
      ></div>
    </div>

    

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mb-24 
    lg:mt-[-530px] relative mt-[-650px]">
  {team.map((member) => (
    <div className="card relative overflow-hidden group rounded-lg p-[2px] bg-gradient-to-r from-[#9DE8EE] via-[#FA7C0B] to-[#9F8CED] shadow-lg hover:shadow-xl transition duration-300">
      <div className="shine"></div>
      <div className="background ">
      <div className="tiles">
        <div className="tile tile-1"></div>
        <div className="tile tile-2"></div>
        <div className="tile tile-3"></div>
        <div className="tile tile-4"></div>

        <div className="tile tile-5"></div>
        <div className="tile tile-6"></div>
        <div className="tile tile-7"></div>
        <div className="tile tile-8"></div>

        <div className="tile tile-9"></div>
        <div className="tile tile-10"></div>
      </div>
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
      </div>
      <div className="bg-[#121212] rounded-xl ">
      <div className="imgBx mx-auto">
        <img src={member.image} alt={member.name} className="w-[200px] h-[200px] object-cover rounded-md z-4 scale-110" />
      </div>
      <div className="content p-4">
        <div className="details text-center">
          <h2 className="text-lg font-semibold text-white poppins-regular text-[26px]">{member.name}<br />
            <span className="text-gray-400 text-sm poppins-extralight mt-0">{member.role}</span>
          </h2>
          <div className="data mt-2">
            <h3 className="text-sm text-gray-400 poppins-regular text-[22px]">{member.detail}</h3>
          </div>
        </div>
      </div>
      </div>
    </div>
  ))}
</div>


       
      <Footer className="!z-24"/>
      </div>
    </div>
        </div>
    )
}
export default Team;
import { Helmet } from "react-helmet";
import Header from "../../../Components/ForAll/Header";
import Hero from "./Hero";
import Service from "./Services";
import About from "./About";
import HowWeWork from "./HowWeWork";
import Founder from "./Founder";
import Works from "./Works";
import Testimonials from "./Testimonials";
import FAQs from "./FAQs";
import ContactBtn from "./ContactBtn";
import Blogs from "./Blogs";
import Footer from "../../../Components/ForAll/Footer";

const LandingPage = ()=>{
    return(
    <div>
    {/* Helmet */}
    <Helmet>
    <meta name="description" content="Nexile Digital is a all in one digital solutions. Nexile Digital provides web development, web design, SEO (Search Engine Optimization), Video Editing, UX & UI Design, Figma services."></meta>
    </Helmet>

    {/* Content */}
   <div className="bg-black overflow-hidden">
   <div 
  className="relative lg:z-0 bg-black" 
  >
  <div 
  style={{
    backgroundImage: 'url(https://res.cloudinary.com/dnwmtd4p1/image/upload/v1731040743/nexile%20digital/asset/otjfpjewv5z1bubx26kr.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: '', // Ensure background is a layer
    zIndex: 0, // Send background layer to the back
  }}
  className=""
>
  {/* Background images */}
  <div className="relative">
    <img
      src="https://res.cloudinary.com/dnwmtd4p1/image/upload/v1731040743/nexile%20digital/asset/ebqjrqhwdf0puwpmup9g.webp"
      alt=""
      className="absolute right-0 z-0"
    />
    <img
      src="https://res.cloudinary.com/dnwmtd4p1/image/upload/v1731040744/nexile%20digital/asset/krjhtmdwyfeoebirihzq.webp"
      alt=""
      className="absolute left-0 z-0"
    />
  </div>

  {/* Content */}
  <Header className="relative !z-[3200]"/>
<Hero/>


  {/* Black shadow at the bottom */}
  <div
    className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent !z-[-1]"
  ></div>
</div>

   </div>
  <Service />
  <About/>
  <HowWeWork/>
  <Founder />
  <Works/>
  <Testimonials/>
  <FAQs/>
  <ContactBtn/>
  <div className="relative">
  <img 
  src="https://res.cloudinary.com/dnwmtd4p1/image/upload/v1734839480/nexile%20digital/asset/x5pgdn8cdhi0sqxkpcgx.webp" 
  alt="" 
  className="absolute bottom-0 right-0 z-0"/>
  <Blogs className="!z-10"/>
  <Footer className="!z-24"/>
  </div>
</div>
    </div>
    )
}
export default LandingPage;
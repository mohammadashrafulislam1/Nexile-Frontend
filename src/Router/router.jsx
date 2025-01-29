import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage/LandingPage";
import Error from "../pages/Error/Error";
import ContactUs from "../pages/ContactUs/ContactUs";
import Blogs from "../pages/Blogs/Blogs";
import AboutUs from "../pages/AboutUs/AboutUs";
import WhatWeDo from "../pages/WhatWeDo/WhatWeDo";
import Faqs from "../pages/Faqs/Faqs";
import Projects from "../pages/Projects/Projects";
import SingleProject from "../pages/SinglePage/SingleProject";
import { endPoint } from "../Components/ForAll/ForAll";
import SingleBlog from "../pages/SinglePage/SingleBlog";
import Team from "../pages/Team/Team";
import SingleService from "../pages/SinglePage/SingleService";
import ScrollToTop from "../Components/ForAll/ScrollToTop";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<LandingPage/>,
        errorElement:<Error />
    },
    {
        path:'/contact_us',
        element: <><ScrollToTop/><ContactUs/></>,
        errorElement:<Error />
    },
    {
        path:'/blogs',
        element:<><ScrollToTop/><Blogs/></>,
        errorElement:<Error />
    },
    {
        path:'/about_us',
        element:<><ScrollToTop/><AboutUs/></>,
        errorElement:<Error />
    },
    {
        path:'/what_we_do',
        element:<><ScrollToTop/><WhatWeDo/></>,
        errorElement:<Error />
    },
    {
        path:'/faqs',
        element:<><ScrollToTop/><Faqs/></>,
        errorElement:<Error />
    },
    {
        path:'/projects',
        element:<><ScrollToTop/><Projects/></>,
        errorElement:<Error />
    },
    {
        path:'/project/:title',
        element:<><ScrollToTop/><SingleProject/></>,
        errorElement:<Error />,
    },
    {
        path:'/blog/:title',
        element:<><ScrollToTop/><SingleBlog/></>,
        errorElement:<Error />,
    },
    {
        path:'/service/:title',
        element:<><ScrollToTop/><SingleService/></>,
        errorElement:<Error />,
    },
    {
        path:'/team',
        element:<><ScrollToTop/><Team/></>,
        errorElement:<Error />,
    },
    


])
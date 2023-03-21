import { createBrowserRouter } from "react-router-dom";
import LayoutVinras from "../Layout/LayoutVinras";
import Aboutus from "../pages/Aboutus/Aboutus";
import AboutUsSecond from "../pages/AboutUsSecond/AboutUsSecond";
import Home from "../pages/Home/Home/Home";
import HomeTwo from "../pages/HomeTwo/HomeTwo/HomeTwo";
import Services from "../pages/Services/Services/Services";
import ServicesTwo from "../pages/ServicesTwo/ServicesTwo/ServicesTwo";

export const router = createBrowserRouter([
  {
    path: '/', element: <LayoutVinras />, children: [
      { path: '/', element: <Home /> },
      { path: '/home-two', element: <HomeTwo /> },
      { path: '/about', element: <Aboutus /> },
      { path: '/about-second', element: <AboutUsSecond /> },
      { path: '/services', element: <Services /> },
      {path:'Services-second',element:<ServicesTwo/>}
      // { path: '/services', element: <Services /> },
    ]
  },
  // {
  //   path: '/service', element: <ServiceLayout />, children: [
  //     { path: '/service/research', element: <Research /> },
  //     { path: '/service/sample', element: <Sample /> },
  //     { path: '/service/merchandising', element: <Merchandising /> },
  //     { path: '/service/fabric', element: <Fabric /> },
  //     { path: '/service/production', element: <Production /> },
  //     { path: '/service/qaqc', element: <QaQc /> },
  //     { path: "/service/delivery", element: <Delivery /> },
  //     { path: '/service/kitting', element: <Knitting /> },
  //     { path: '/service/embroidery', element: <Embroidery /> },
  //     { path: '/service/garment', element: <Garment /> },
  //     { path: '/service/printing', element: <Printing /> },
  //     { path:'/service/trimming',element:<Trimming/>}
  // ]}
])
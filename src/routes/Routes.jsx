import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../Pages/Home/Home"
import CycleDetails from "../Pages/cycleDetails/CycleDetails"
import Accessories from "../Pages/Accessories/Accessories"
import AboutUs from "../Pages/AboutUs/AboutUs"
import BikeCards from "../Components/BikeCards/BikeCards"

const routes = createBrowserRouter([
    {
      path:'/',
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element: <Home/>,
            loader: () => fetch('/bike.json'),
            children: [
              {
              path:'/category/:category',
              element: <BikeCards/>,
              loader: () => fetch('/bike.json'),
            }],

        },
        {
            path:'/CycleDetails',
            element: <CycleDetails/>,
            loader: () => fetch('/bike.json'),

        },
        {
            path:'/Accessories',
            element: <Accessories/>
        },
        {
            path:'/AboutUs',
            element: <AboutUs/>
        },
      ]
    }
  ])

  export default routes
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../Pages/Home/Home"
import CycleDetails from "../Pages/cycleDetails/CycleDetails"
import Accessories from "../Pages/Accessories/Accessories"
import AboutUs from "../Pages/AboutUs/AboutUs"

const routes = createBrowserRouter([
    {
      path:'/',
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/CycleDetails',
            element: <CycleDetails/>
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
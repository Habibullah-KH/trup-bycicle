import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Heading from "../../Components/Heading/Heading";
import Categories from "../../Components/Categories/Categories";
import BikeCards from "../../Components/BikeCards/BikeCards";

const Home = () => {
    const bikeData = useLoaderData()
    return (
        <div>
            <div>

            
{/*   Banner */}
<Banner/>

{/*  Heading  */}
<div className="absolute top-20 mx-auto w-full">
<Heading title={'The Lightweight Champion'} subtitle={'4 bold color options. 1 style that can’t be mistaken. A true e-city pro delivering all-new levels of simplicity, performance, and delight.'}/>
</div>

{/*  Categories tap section  */}
<div>
<Categories categories={bikeData}/>
<Outlet/>

</div>
<BikeCards/>
{/*  Dynamic nested component  */}
        </div>
        </div>
    );
};

export default Home;
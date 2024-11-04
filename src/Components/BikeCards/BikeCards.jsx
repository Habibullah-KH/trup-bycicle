import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const BikeCards = () => {
    const navigate = useNavigate()
    const bikeData = useLoaderData()
    const {category} = useParams()
    const [bike, setBike] = useState([])
    useEffect(() => {
        if(category){
            const filteredByCategory = [...bikeData].filter(data => data.type === category)
        setBike(filteredByCategory)
        }
        else{
            setBike(bikeData.slice(0, 6))
        }
    }, [category, bikeData])
    return (
        <>
        <div className="my-10">

        <div className="flex justify-center my-10">
            {
                bike.map(data => (
                
                    <Card key={data.id} bikeData={data}/>
                ))
            }
        </div>
        <button className="btn btn-warning mx-20" onClick={()=>navigate('/CycleDetails')}>View All</button>
        </div>
        </>
    );
};

export default BikeCards;
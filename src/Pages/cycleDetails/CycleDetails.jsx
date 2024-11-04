import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";

const CycleDetails = () => {
    const data = useLoaderData();
    return (
        <>
                    <div className="flex justify-center my-10">
            {
                data.map(data => (
                    <Card key={data.id} bikeData={data}/>
                ))
            }
        </div>
        </>
    );
};

export default CycleDetails;
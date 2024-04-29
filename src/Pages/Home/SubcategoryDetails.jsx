import { useLoaderData } from "react-router-dom";


const SubcategoryDetails = () => {
    const subcatDetails = useLoaderData()
    console.log(subcatDetails)
    return (
        <div>
            <div className="md:grid grid-cols-12 gap-4 mt-10">
                <div className="col-span-8 ">
                    <img className="w-full h-[600px]" src={subcatDetails?.image} alt="" />
                </div>
                <div className="col-span-4">

                    <div className="card  bg-base-100 shadow-xl">
                        <h2 className="text-center text-3xl font-bold underline">Details about {subcatDetails?.item_name}</h2>
                        <div className="card-body space-y-5">

                            <h2 className="text-xl text-gray-400">1. Item: {subcatDetails?.item_name}</h2>

                            <h2 className="text-xl text-gray-400">2. Description: {subcatDetails?.short_description}</h2>

                            <h2 className="text-xl text-gray-400">3. Processing Time: {subcatDetails?.processing_time}</h2>

                            <h2 className="text-xl text-gray-400">4. Price: {subcatDetails?.price}</h2>

                            <h2 className="text-xl text-gray-400">5. Ratting: {subcatDetails?.rating}</h2>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SubcategoryDetails;
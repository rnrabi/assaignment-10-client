import { useLoaderData } from "react-router-dom";


const AllAartAndCraftItemDetails = () => {
    const allArtAndCraftDetails = useLoaderData()
    // console.log(allArtAndCraftDetails)
    return (
        <div>
            <div className="md:grid grid-cols-12 gap-4 mt-10">
                <div className="col-span-8 ">
                    <img className="w-full h-[600px]" src={allArtAndCraftDetails?.image} alt="" />
                </div>
                <div className="col-span-4">

                    <div className="card  bg-base-100 shadow-xl">
                        <h2 className="text-center text-3xl font-bold underline">Details about {allArtAndCraftDetails?.item}</h2>
                        <div className="card-body space-y-5">

                            <h2 className="text-xl text-gray-400">1. Item: {allArtAndCraftDetails?.item}</h2>
                            <h2 className="text-xl text-gray-400">2. Created by: {allArtAndCraftDetails?.name}</h2>
                            <h2 className="text-xl text-gray-400">3. Email: {allArtAndCraftDetails?.email}</h2>
                            <h2 className="text-xl text-gray-400">4. Description: {allArtAndCraftDetails?.description}</h2>
                            <h2 className="text-xl text-gray-400">5. Customization: {allArtAndCraftDetails?.customization}</h2>
                            <h2 className="text-xl text-gray-400">6. Stock: {allArtAndCraftDetails?.stock}</h2>
                            <h2 className="text-xl text-gray-400">7. Time: {allArtAndCraftDetails?.time}</h2>
                            <h2 className="text-xl text-gray-400">8. Price: {allArtAndCraftDetails?.price}</h2>
                            <h2 className="text-xl text-gray-400">9. Ratting: {allArtAndCraftDetails?.ratting}</h2>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllAartAndCraftItemDetails;
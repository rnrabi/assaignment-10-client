import { useParams } from "react-router-dom";
import useAllartCraftItem from "../../hooks/useAllartCraftItem";


const CraftDetail = () => {
    const { allArtCraftItem } = useAllartCraftItem()
    const { id } = useParams()
    // console.log(id)
    const singleData = allArtCraftItem.find(single => single._id == id)
    // console.log(singleData)
    // const { image, customization, description, email, item, name, price, ratting, stock, time } = singleData;
    return (
        <div>

            <div className="md:grid grid-cols-12 gap-4 mt-10">
                <div className="col-span-8 ">
                    <img className="w-full h-[600px]" src={singleData?.image} alt="" />
                </div>
                <div className="col-span-4">

                    <div className="card  bg-base-100 shadow-xl">
                        <h2 className="text-center text-3xl font-bold underline">Details about {singleData?.item}</h2>
                        <div className="card-body space-y-5">

                            <h2 className="text-xl text-gray-400">1. Item: {singleData?.item}</h2>
                            <h2 className="text-xl text-gray-400">2. Created by: {singleData?.name}</h2>
                            <h2 className="text-xl text-gray-400">3. Email: {singleData?.email}</h2>
                            <h2 className="text-xl text-gray-400">4. Description: {singleData?.description}</h2>
                            <h2 className="text-xl text-gray-400">5. Customization: {singleData?.customization}</h2>
                            <h2 className="text-xl text-gray-400">6. Stock: {singleData?.stock}</h2>
                            <h2 className="text-xl text-gray-400">7. Time: {singleData?.time}</h2>
                            <h2 className="text-xl text-gray-400">8. Price: {singleData?.price}</h2>
                            <h2 className="text-xl text-gray-400">9. Ratting: {singleData?.ratting}</h2>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CraftDetail;
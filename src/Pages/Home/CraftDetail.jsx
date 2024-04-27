import { useParams } from "react-router-dom";
import useAllartCraftItem from "../../hooks/useAllartCraftItem";


const CraftDetail = () => {
    const {allArtCraftItem} = useAllartCraftItem()
    const {id} = useParams()
    // console.log(id)
    const singleData = allArtCraftItem.find(single=>single._id==id)
    console.log(singleData)
    return (
        <div>
            <h2>This is details</h2>
        </div>
    );
};

export default CraftDetail;
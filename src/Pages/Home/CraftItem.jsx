import { Link } from "react-router-dom";
import useAllartCraftItem from "../../hooks/useAllartCraftItem";


const CraftItem = () => {
  const { allArtCraftItem } = useAllartCraftItem()
  // console.log(allArtCraftItem)
  return (
    <div className="mt-8">
      <h2 className="text-3xl text-center font-bold">Our Crafts</h2>
      <div className="md:grid grid-cols-3 gap-3 mt-5">
        {
          allArtCraftItem.map(allArtCraft => <div
            key={allArtCraft._id}
            className="card w-96 glass">
            <figure><img className="h-96 w-full" src={allArtCraft.image} alt="painting!" /></figure>
            <div className="card-body">
              <h2 className="card-title">{allArtCraft.item}</h2>
              <p>Stock: {allArtCraft.price}</p>
              <p>Created By: {allArtCraft.name}</p>
              <p>Ratting: {allArtCraft.ratting}</p>
              <div className="card-actions justify-end">
                <Link to={`/craftDetail/${allArtCraft._id}`}>
                  <button className="btn btn-primary">View Detail</button>
                </Link>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default CraftItem;
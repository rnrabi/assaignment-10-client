import { Link } from "react-router-dom";
import useAllartCraftItem from "../../../hooks/useAllartCraftItem";
import { Helmet } from "react-helmet-async";


const AllArtCraftItem = () => {
    const { allArtCraftItem } = useAllartCraftItem()
    console.log(allArtCraftItem)
    // const {image, item , stock ,price }=allArtCraftItem;
    return (
        <div>
             <Helmet>
                <title>ArtistryAvenue | AllArtCraft</title>
            </Helmet>
            <h2 className="text-3xl text-center font-bold my-6">All art and craft item</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>Image</th>
                            <th>Item</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                    {
                        allArtCraftItem.map(allArtCraft=><tr
                        key={allArtCraft._id}
                        >
                            <td>
                                <div className="flex items-center gap-3">
                                  
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={allArtCraft.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    
                                </div>
                            </td>

                            <td> {allArtCraft.item} </td>

                            <td>{allArtCraft.stock}</td>
                            <td>{allArtCraft.price}</td>

                            <th>
                              <Link to={`/allArtAndCraftItem/${allArtCraft._id}`}> <button className="btn btn-ghost btn-xs">details</button></Link>
                            </th>
                        </tr>)
                    }


                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllArtCraftItem;
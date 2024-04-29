import { Link, useLoaderData } from "react-router-dom";


const Subcategory = () => {

    const subcategoryData = useLoaderData()
    console.log(subcategoryData)


    return (
        <div>
            <h2 className="text-3xl text-center font-bold mt-10 mb-5">One Subcategory</h2>
            <div className="md:grid grid-cols-3 gap-4">
                {
                    subcategoryData.map(subcat => <div
                        key={subcat._id}
                        className="card w-96 glass"
                    >

                        <figure><img className="h-96 w-full" src={subcat.image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{subcat.item_name}</h2>
                            <p>Subcategory_name : {subcat.subcategory_name}</p>
                            <p>Sort description : {subcat.short_description}</p>
                            <p>Processing_time : {subcat.processing_time}</p>
                            <p>Price : {subcat.price}</p>
                            <p>Rating : {subcat.rating}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/category/cat/${subcat._id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Subcategory;
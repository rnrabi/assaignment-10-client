import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ArtCraftCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://assainment-10-server-two.vercel.app/categoriesHeading')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])

    // console.log(categories)



    return (
        <div>
            <h2 className="text-3xl text-center font-bold mt-10">Art and craft category</h2>
            <div className="md:grid grid-cols-3 gap-3">
                {
                    categories.map(category => <Link
                    to={`/category/${category.subcategory_name}`}
                    key={category._id}
                    >
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10 h-96">
                                <img src={category.image} alt="category" className="rounded-xl w-full h-full" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{category.item_name}</h2>
                                <p>Subcategory : {category.subcategory_name}</p>

                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default ArtCraftCategory;
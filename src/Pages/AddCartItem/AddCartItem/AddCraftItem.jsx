import { useContext } from "react";
import { authContext } from "../../../AuthProvider/AuthProvider";
import useAllartCraftItem from "../../../hooks/useAllartCraftItem";
import useMyCraft from "../../../hooks/useMyCraft";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const AddCraftItem = () => {
    const { user } = useContext(authContext)
    const {refetch } = useAllartCraftItem() 
    const {refetch1} = useMyCraft()  //call the hook for refetch
    // console.log(user)

    const handleCraftAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const item = form.item.value;
        const email = form.email.value;
        const name = form.name.value;
        const stock = form.stock.value;
        const time = form.time.value;
        const description = form.description.value;
        const customization = form.customization.value;
        const ratting = form.ratting.value;
        const price = form.price.value;
        // console.log(image, item, email, name, stock, time, description, customization, ratting, price)
        const craft = { image, item, email, name, stock, time, description, customization, ratting, price }
        // console.log(craft)

        fetch(`https://assainment-10-server-two.vercel.app/craft`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(craft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully added the craft",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

        refetch()
        refetch1()
    }

    return (
        <div>
             <Helmet>
                <title>ArtistryAvenue | AddCraft</title>
            </Helmet>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                <form onSubmit={handleCraftAdd} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="text-3xl font-bold">Add Your Craft</p>
                        </div>


                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="image" className="text-sm">Image</label>
                                <input id="image" type="text" name='image' placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="item" className="text-sm">Item Name</label>
                                <input id="item" type="text" name='item' placeholder="Item name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" name='email' defaultValue={user.email} placeholder="Your email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">User name</label>
                                <input id="name" type="text" name='name' placeholder="User name" defaultValue={user.displayName} className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="stock" className="text-sm">Stock status</label>
                                <input id="stock" type="text" name='stock' placeholder="In stock / made to other" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="time" className="text-sm">Proccessing time</label>
                                <input id="time" type="date" name='time' placeholder="Proccessing time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="category" className="text-sm">Subcategory name</label>
                                <input id="category" type="text" name='category' placeholder="Subcategory name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="description" className="text-sm">Short description</label>
                                <input id="description" type="text" name="description" placeholder="description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="customization" className="text-sm">Customization</label>
                                <input id="customization" type="text" name="customization" placeholder="yes/no" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="ratting" className="text-sm">Ratting</label>
                                <input id="ratting" type="text" name="ratting" placeholder="Ratting" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="price" className="text-sm">Price</label>
                                <input id="price" type="text" name="price" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                            </div>
                        </div>
                    </fieldset>
                    <button className="btn w-full text-2xl"><input type="submit" value="Add Craft" /></button>
                </form>
            </section>
        </div>
    );
};

export default AddCraftItem;
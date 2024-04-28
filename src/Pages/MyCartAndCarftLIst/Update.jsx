import { useLoaderData } from "react-router-dom";
import useAllartCraftItem from "../../hooks/useAllartCraftItem";
import useMyCraft from "../../hooks/useMyCraft";
import Swal from "sweetalert2";


const Update = () => {
    const updateSingleData = useLoaderData()
    console.log(updateSingleData)

    const {refetch } = useAllartCraftItem() 
    const {refetch1} = useMyCraft()  //call the hook for refetch

const handleUpdate =(e)=>{

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
        console.log(image, item, email, name, stock, time, description, customization, ratting, price)
        const craft = { image, item, email, name, stock, time, description, customization, ratting, price }
        // console.log(craft)

        fetch(`http://localhost:5000/myArtCrftItem/${updateSingleData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(craft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updated successfully",
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
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form onSubmit={handleUpdate} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="text-3xl font-bold">Update Your Craft</p>
                    </div>


                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="image" className="text-sm">Image</label>
                            <input defaultValue={updateSingleData?.image} id="image" type="text" name='image' placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="item" className="text-sm">Item Name</label>
                            <input defaultValue={updateSingleData?.item} id="item" type="text" name='item' placeholder="Item name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                        </div>


                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input defaultValue={updateSingleData?.email} id="email" type="email" name='email'  placeholder="Your email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="name" className="text-sm">User name</label>
                            <input defaultValue={updateSingleData?.name} id="name" type="text" name='name' placeholder="User name"className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="stock" className="text-sm">Stock status</label>
                            <input defaultValue={updateSingleData?.stock} id="stock" type="text" name='stock' placeholder="In stock / made to other" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="time" className="text-sm">Proccessing time</label>
                            <input defaultValue={updateSingleData?.time} id="time" type="date" name='time' placeholder="Proccessing time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="category" className="text-sm">Subcategory name</label>
                            <input defaultValue={updateSingleData?.category} id="category" type="text" name='category' placeholder="Subcategory name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="description" className="text-sm">Short description</label>
                            <input defaultValue={updateSingleData?.description} id="description" type="text" name="description" placeholder="description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="customization" className="text-sm">Customization</label>
                            <input defaultValue={updateSingleData?.customization} id="customization" type="text" name="customization" placeholder="yes/no" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="ratting" className="text-sm">Ratting</label>
                            <input defaultValue={updateSingleData?.ratting} id="ratting" type="text" name="ratting" placeholder="Ratting" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="price" className="text-sm">Price</label>
                            <input defaultValue={updateSingleData?.price} id="price" type="text" name="price" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 border p-2" />
                        </div>
                    </div>
                </fieldset>
                <button className="btn w-full text-2xl"><input type="submit" value="Update" /></button>
            </form>
        </section>
    </div>
    );
};

export default Update;
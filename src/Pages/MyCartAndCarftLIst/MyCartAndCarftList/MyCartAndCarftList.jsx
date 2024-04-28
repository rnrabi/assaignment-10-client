import { Link } from "react-router-dom";
import useMyCraft from "../../../hooks/useMyCraft";
import useAllartCraftItem from "../../../hooks/useAllartCraftItem";
import Swal from "sweetalert2";



const MyCartAndCarftList = () => {
  const { myCraft, refetch1 } = useMyCraft()
  console.log(myCraft)

  const { refetch } = useAllartCraftItem()  //call the hook for refetch


  const handleDelete = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/myArtCrftItem/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              refetch()
              refetch1()
            }
          })
      }
    });





   
  }




  return (
    <div>
      <h2 className="text-2xl text-center font-bold my-6 mb-6">My cart and carft list
        <details className="dropdown ml-4">
          <summary className="m-1 btn">Filter by</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a>Yes</a></li>
            <li><a>No</a></li>
            <li><a>All</a></li>
          </ul>
        </details>
      </h2>



      <div className="md:grid grid-cols-3 gap-4">
        {
          myCraft.map(craft => <div
            key={craft._id}
            className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={craft.image} alt={craft.item} /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {craft.item}
                <div className="badge badge-secondary">${craft.price}</div>
              </h2>
              <div>
                <h2>Ratting: {craft.ratting}</h2>
                <h2>Customization: {craft.customization}</h2>
                <h2>Stock status: {craft.stock}</h2>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/myArtCrftItem/${craft._id}`}><button className="btn badge badge-outline">Update</button></Link>
                <button onClick={() => handleDelete(`${craft._id}`)} className="btn badge badge-outline">Delete</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default MyCartAndCarftList;
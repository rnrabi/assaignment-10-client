import { Link } from "react-router-dom";
import useMyCraft from "../../../hooks/useMyCraft";



const MyCartAndCarftList = () => {
  const { myCraft } = useMyCraft()
  console.log(myCraft)

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
                <button className="btn badge badge-outline">Delete</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default MyCartAndCarftList;
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Navber = () => {
    const { user, logOutUsr } = useContext(authContext);

    const menu = <>
        {
            user ? <>
                <li><NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-green-500 underline' : ''}>Home</NavLink></li>

                <li><NavLink to='/allArtAndCraftItem' className={({ isActive }) => isActive ? 'font-bold text-green-500 underline' : ''}>All Art & craft Items</NavLink></li>

                <li><NavLink to='/addCraftItem' className={({ isActive }) => isActive ? 'font-bold text-green-500 underline' : ''}>Add Craft Item</NavLink></li>

                <li><NavLink to='/myArtAndCraftItem' className={({ isActive }) => isActive ? 'font-bold text-green-500 underline' : ''}>My Art&Craft List</NavLink></li>
            </>
                :
                <>
                    <li><NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-green-500 underline' : ''}>Home</NavLink></li>

                    <li><NavLink to='/allArtAndCraftItem' className={({ isActive }) => isActive ? 'font-bold text-green-500 underline' : ''}>All Art & craft Items</NavLink></li>

                    <li><NavLink to='/addCraftItem' className={({ isActive }) => isActive ? 'font-bold text-green-500 underline' : ''}>Add Craft Item</NavLink></li>

                    <li><NavLink to='/myArtAndCraftItem' className={({ isActive }) => isActive ? 'font-bold text-green-500 underline' : ''}>My Art&Craft List</NavLink></li>
                    <li><NavLink to='/login' className={({ isActive }) => isActive ? 'font-bold text-green-500 underline' : ''}>Login</NavLink></li>

                    <li><NavLink to='/register' className={({ isActive }) => isActive ? 'font-bold text-green-500 underline' : ''}>Register</NavLink></li>
                </>
        }




    </>

    const handleSignOut = () => {
        logOutUsr()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are logout",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    return (
        <div className="shadow-lg">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">ArtistryAvenue</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex gap-5 text-lg menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>

                <div className="navbar-end">
                    {user && <> <button onClick={handleSignOut} className="btn">Logout</button>
                    <div className="w-10 rounded-full relative">
                        <img className="rounded-full" alt="profile" src={user?.photoURL} />
                        <p className="absolute right-0" title={user?.displayName}>{user?.photoURL?.slice(0,30)}</p>
                    </div> </>}
                </div>
            </div>
        </div>
    );
};

export default Navber;
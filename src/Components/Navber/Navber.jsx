import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Navber = () => {
    const { user, logOutUsr } = useContext(authContext);
    const [theme , setTheme] = useState('light');

    useEffect(()=>{
        localStorage.setItem('theme' , theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    },[theme])


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
// theme controlled 
const handleTheme =(e)=>{
    console.log(e.target.checked)
    if(e.target.checked){
        setTheme('dark')
    }
    else{
        setTheme('light')
    }
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
                    <label className="flex cursor-pointer gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>

                        <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller" />

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                    {user && <> <button onClick={handleSignOut} className="btn">Logout</button>
                        <div className="w-10 rounded-full relative">
                            <img className="rounded-full" alt="profile" src={user?.photoURL} />
                            <p className="absolute right-0" title={user?.displayName}>{user?.photoURL?.slice(0, 30)}</p>
                        </div> </>}
                </div>
            </div>
        </div>
    );
};

export default Navber;
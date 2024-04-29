import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import AllArtCraftItem from "../Pages/AllArtCraftItem/AllArtCraftItem/AllArtCraftItem";
import AddCraftItem from "../Pages/AddCartItem/AddCartItem/AddCraftItem";
import MyCartAndCarftList from "../Pages/MyCartAndCarftLIst/MyCartAndCarftList/MyCartAndCarftList";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Register/Register/Register";
import PrivateRoute from "../Routs/PrivateRoute";
import Error from "../Pages/Error/Error";
import CraftDetail from "../Pages/Home/CraftDetail";
import Update from "../Pages/MyCartAndCarftLIst/Update";
import Subcategory from "../Pages/Home/Subcategory";
import SubcategoryDetails from "../Pages/Home/SubcategoryDetails";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allArtAndCraftItem',
                element: <AllArtCraftItem></AllArtCraftItem>
            },
            {
                path: '/addCraftItem',
                element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
            },
            {
                path: '/myArtAndCraftItem',
                element: <PrivateRoute><MyCartAndCarftList></MyCartAndCarftList></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/craftDetail/:id',
                element: <PrivateRoute><CraftDetail></CraftDetail></PrivateRoute>
            },
            {
                path: '/myArtCrftItem/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/myArtCrftItem/${params.id}`)
            },
            {
                path:'/category/:subcategory',
                element:<Subcategory></Subcategory>,
                loader:({params})=>fetch(`http://localhost:5000/subcategories/${params.subcategory}`)
            },
            {
                path:'/category/cat/:id',
                element:<SubcategoryDetails></SubcategoryDetails>,
                loader:({params})=>fetch(`http://localhost:5000/subcategories/subcategory/${params.id}`)
            }
        ]
    },
]);
import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const useMyCraft = () => {
    const {user} = useContext(authContext)
    const [myCraft , setMyCraft] = useState([])
    const [toggle1 , setToggle] = useState(true);
    const refetch1 = ()=>{
        setToggle(!toggle1);
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/craft/${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyCraft(data))
    },[user,toggle1])


    return {myCraft , refetch1}
};

export default useMyCraft;
import { useEffect, useState } from "react";


const useAllartCraftItem = () => {
const [allArtCraftItem , setAllArtCraftItem] = useState([])
const [toggle ,setToggle] = useState(true);
const refetch = ()=>{
    setToggle(!toggle);
}

    useEffect(()=>{
        fetch('https://assainment-10-server-two.vercel.app/craft')
        .then(res=>res.json())
        .then(data=>setAllArtCraftItem(data))
    },[toggle])
    return {allArtCraftItem , refetch} ;
};

export default useAllartCraftItem;
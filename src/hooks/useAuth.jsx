import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";


const useAuth = () => {
    const authInfos = useContext(authContext);
   return authInfos;
};

export default useAuth;
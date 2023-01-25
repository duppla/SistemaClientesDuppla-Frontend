import { useContext } from "react";
import { AuthContext } from "../context/Contextauth";


const useAuth = () => {

const context = useContext(AuthContext);

return context;


};

export default useAuth;
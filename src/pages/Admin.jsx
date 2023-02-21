import { useContext } from "react";
import { UserContext } from "../context/UserContext";


const Admin = ()=>{

    const {users} = useContext(UserContext); 
    
    return(
        <h1>Admin Page</h1>
    )
}
export default Admin;
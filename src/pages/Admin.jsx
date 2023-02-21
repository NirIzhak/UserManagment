import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Admin = ()=>{

const {users} = useContext(UserContext);
const {userName} = useParams();
const navigate = useNavigate();


return(
<>
    <h1>Hi {userName} !</h1>
    <table>
        <thead style={{textAlign:"center"}}>
            <tr>
                <th>Picture</th>
                <th>User Name</th>
                <th>Birth Date</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody style={{textAlign:"center"}}>
            {
            users.map((user,index)=>{
            return(
            <tr key={index}>
                <td><img src={user.image} style={{width:"5em"}} /></td>
                <td>{user.userName}</td>
                <td>{user.date}</td>
                <td>{user.email}</td>
                <td>{user.street} {user.streetNum} {user.city}</td>
            </tr>
            )}
            )}
        </tbody>
    </table>
    <div>
    <button onClick={()=> {
        navigate("/");
        }}
        >
        Log In
    </button>
    </div>
    
</>
)
}
export default Admin;
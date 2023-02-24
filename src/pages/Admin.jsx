import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Admin = ()=>{

const {users,ReturnUser} = useContext(UserContext);
const navigate = useNavigate();


const UpdateUser=(userName)=>{
    //event.preventDefault();
    const user = ReturnUser(userName);
    console.log('object :>> ', user.userName);
    navigate(`/editDetails/${user.userName}`);
}

const DeleteUser=(event,userName)=>{
    event.preventDefault();
    const user = ReturnUser(userName);
    let userIndex = users.indexOf(user);
    users.splice(userIndex,1);
}

return(
<>
    <h1>Welcome To Admin Page!</h1>
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
                <td><button onClick={()=>UpdateUser(user.userName)}>Edit</button></td> 
                <td><button onClick={(event)=>DeleteUser(event,user.userName)}>Delete</button></td> 
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
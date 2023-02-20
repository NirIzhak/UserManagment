import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";


const Profile = ()=>{ 

    const navigate = useNavigate();
    const {users} = useContext(UserContext);
    const {userName} = useParams();
    let user = users.find((u) => u.userName == userName);

    const EditDetails =()=>{
        navigate(`/editDetails/${userName}`);
    }
    const LogOut=()=>{
        navigate("/");
    }
    const reportHazard=()=>{
        console.log('report');
    }
 
    return(
        user !== undefined ?
        <>
        <div id='profile'>
          <div id='profileImage'><img src={user.image} style={{width:'10em'}}/></div>
          <p>User Name: <span>{userName}</span></p>
          <p>Full Name: <span>{user.firstName} {user.lastName}</span></p>
          <p>Street Adress: <span>{user.street} {user.streetNum} {user.city}</span></p>
          <p>Birth Date: <span>{user.date}</span></p>
          <p>Email: <span>{user.email}</span></p>
          <button id='edit' onClick={()=>EditDetails()}>Edit</button>
          <button id='report' onClick={()=>reportHazard()}>Report</button>
          <button id='delete' onClick={()=>LogOut()}>Log out</button>
        </div>
    </>
    :
    LogOut()
    )
}
export default Profile;
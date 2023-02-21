import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import User from "../classes/User";

const EditDetails = ()=>{
const {
users,
ReturnUser,
setUserName,
setPassword,
setPasswordAgain,
setImage,
setFirstName,
setLastName,
setEmail,
setDate,
setCity,
setStreet,
setStreetNum,
password,
passwordAgain,
image,
firstName,
lastName,
email,
date,
city,
street,
streetNum

} = useContext(UserContext);
const {userName} = useParams();
const navigate = useNavigate();
let user = ReturnUser(userName);
  let userIndex = users.indexOf(user);
console.log('user :>> ', user);
console.log('userIndex :>> ', userIndex);
console.log('users :>> ', users);

const UpdateUser=(event)=>{
  event.preventDefault();
  const nUser = new User(userName, password, image, firstName, lastName, email, date, city, street, streetNum);
  users[userIndex] = nUser;
  console.log('user :>> ', nUser);
  navigate("/");
}
return(
<>
  <form className="edit-form" onSubmit={UpdateUser}>
    <label>
      {" "}
      UserName:
      <input type="text" value={userName} placeholder="UserName" onChange={(e)=> setUserName(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Password:
      <input type="password" value={password} placeholder="password" onChange={(e)=> setPassword(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Password Again:
      <input type="password" value={passwordAgain} placeholder="password Again" onChange={(e)=> setPasswordAgain(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Upload Image:
      <input type="file" accept="image/png, image/jpeg" onChange={(e)=>
      setImage(URL.createObjectURL(e.target.files[0]))}
      />
    </label>
    <label>
      {" "}
      First Name:
      <input type="text" value={firstName} placeholder="first name" onChange={(e)=> setFirstName(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Last Name:
      <input type="text" value={lastName} placeholder="last name" onChange={(e)=> setLastName(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Email:
      <input type="email" value={email} placeholder="email" onChange={(e)=> setEmail(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Date Of Birth:
      <input type="date" value={date} onChange={(e)=> setDate(e.target.value)}/>
    </label>
    <label>
      {" "}
      City:
      <input type="text" value={city} placeholder="city" onChange={(e)=> setCity(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Street:
      <input type="text" value={street} placeholder="street" onChange={(e)=> setStreet(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Street Number:
      <input type="number" value={streetNum} placeholder="street number" onChange={(e)=> setStreetNum(e.target.value)}
      />
    </label>
    <button onClick={(event)=> UpdateUser(event)}>Save</button>
  </form>
  <div className="login">
    <p>or</p>
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
export default EditDetails;
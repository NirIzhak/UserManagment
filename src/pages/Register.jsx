import React, {useContext } from "react";
import { useNavigate } from "react-router-dom";
import User from '../classes/User';
import { UserContext } from "../context/UserContext";

const Register = () => {
const navigate = useNavigate();
const {
  users,
  CheckUserRegisterDetails,
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
  userName,
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
// user details


return (
<>
  <h1>Register Page</h1>
  <form className="register-form">
    <label>
      {" "}
      UserName:
      <input type="text" placeholder="UserName" onChange={(e)=> setUserName(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Password:
      <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Password Again:
      <input type="password" placeholder="password Again" onChange={(e)=> setPasswordAgain(e.target.value)}
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
      <input type="text" placeholder="first name" onChange={(e)=> setFirstName(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Last Name:
      <input type="text" placeholder="last name" onChange={(e)=> setLastName(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Email:
      <input type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Date Of Birth:
      <input type="date" onChange={(e)=> setDate(e.target.value)} />
    </label>
    <label>
      {" "}
      City:
      <input type="text" placeholder="city" onChange={(e)=> setCity(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Street:
      <input type="text" placeholder="street" onChange={(e)=> setStreet(e.target.value)}
      />
    </label>
    <label>
      {" "}
      Street Number:
      <input type="number" placeholder="street number" onChange={(e)=> setStreetNum(e.target.value)}
      />
    </label>
    <button onClick={(e)=> {
      e.preventDefault();
      let newUser = new User(userName, password, image, firstName, lastName, email, date, city, street, streetNum);
      CheckUserRegisterDetails(newUser, passwordAgain) ? navigate('/') : null;
      }}
      >
      Create User
    </button>
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
);
};
export default Register;
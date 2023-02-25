import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import User from "../classes/User";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

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
    streetNum,
  } = useContext(UserContext);

  return (
    <div className="register-container">
      <h1>Fill All The Cells</h1>
      <form className="register-form">
        <label>
          {" "}
          UserName:
          <input
            type="text"
            placeholder="UserName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Password:
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Confirm Password:
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setPasswordAgain(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Upload Image:
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </label>
        <label>
          {" "}
          First Name:
          <input
            type="text"
            placeholder="first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Last Name:
          <input
            type="text"
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Email:
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Date Of Birth:
          <input type="date" onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          {" "}
          City:
          <input
            type="text"
            placeholder="city"
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Street:
          <input
            type="text"
            placeholder="street"
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Street Number:
          <input
            type="number"
            placeholder="street number"
            onChange={(e) => setStreetNum(e.target.value)}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            let newUser = new User(
              userName,
              password,
              image,
              firstName,
              lastName,
              email,
              date,
              city,
              street,
              streetNum
            );
            CheckUserRegisterDetails(newUser, passwordAgain)
              ? navigate("/")
              : null;
          }}
        >
          Create User
        </button>
      </form>
      <div className="register-login">
        <p>if you already have account, just press <Link to='/'>Login</Link></p>
      </div>
    </div>
  );
};
export default Register;

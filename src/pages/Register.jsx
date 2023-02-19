import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // user details
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [streetNum, setStreetNum] = useState("");

  return (
    <>
      <h1>Register</h1>
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
          Password Again:
          <input
            type="password"
            placeholder="password Agian"
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
          <input
            type="date"
            placeholder="birthday"
            onChange={(e) => setDate(e.target.value)}
          />
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
            placeholder="street num"
            onChange={(e) => setStreetNum(e.target.value)}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Create User
        </button>
      </form>
      <div className="login">
        <p>or</p>
        <button
          onClick={() => {
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

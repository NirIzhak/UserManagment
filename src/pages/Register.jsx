import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import User from "../classes/User";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Register = () => {

  // for cities autoComplate
  const [cities, setCities] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");

  // load all cities
  const LoadCities = async () => {
    try {
      let res = await fetch(
        "https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1267"
      );
      let data = await res.json();
      setCities(data.result.records.map((c) => c.שם_ישוב));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    LoadCities();
  }, []);


  const navigate = useNavigate();
  const {
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
    <>
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
            <div>
              <input
                autoComplete="off"
                placeholder="city"
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                  if (!isHovered) {
                    setIsFocus(false);
                  }
                }}
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  setCity(e.target.value);
                }}
                ref={inputRef}
              />
              {isFocus && (
                <div
                  className="shadow-lg absolute w-full"
                  onMouseEnter={() => {
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
                  {cities.map((cities, index) => {
                    const isMatch =
                      cities.toLowerCase().indexOf(inputValue.toLowerCase()) >
                      -1;
                    return (
                      <div key={index}>
                        {isMatch && (
                          <div
                            className="p-5 hover:bg-gray-200 cursor-pointer"
                            onClick={() => {
                              setInputValue(cities);
                              inputRef.current.focus();
                            }}
                          >
                            {cities}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
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
          <p>
            if you already have account, just press <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;

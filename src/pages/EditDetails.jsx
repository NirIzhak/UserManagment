import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import User from "../classes/User";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';

const EditDetails = () => {
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
    image,
    firstName,
    lastName,
    email,
    date,
    city,
    street,
    streetNum,
  } = useContext(UserContext);

  const { userName } = useParams();
  const navigate = useNavigate();

  // update user details
  const UpdateUser = (event) => {
    event.preventDefault();
    let user = ReturnUser(userName);
    console.log("user :>> ", user);
    let userIndex = users.indexOf(user);
    users[userIndex] = new User(
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
    navigate("/");
  };

  // get all current user details
  useEffect(() => {
    setUserName(currentUser.userName);
    setPassword(currentUser.password);
    setPasswordAgain(currentUser.password);
    setImage(currentUser.image);
    setFirstName(currentUser.firstName);
    setLastName(currentUser.lastName);
    setEmail(currentUser.email);
    setDate(currentUser.date);
    setCity(currentUser.city);
    setStreet(currentUser.street);
    setStreetNum(currentUser.streetNum);
  }, []);

  const currentUser = ReturnUser(userName);

  
  return (
    <>
      <h1>EditDetails Page</h1>
      <form className="edit-form" onSubmit={UpdateUser}>
        <label>
          {" "}
          UserName:
          <input
            type="text"
            value={userName}
            placeholder="UserName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Password:
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Confirm Password:
          <input
            type="password"
            value={password}
            placeholder=" Confirm password"
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
            value={firstName}
            placeholder="first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Last Name:
          <input
            type="text"
            value={lastName}
            placeholder="last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Email:
          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Date Of Birth:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          {" "}
          City:
          <input
            type="text"
            value={city}
            placeholder="city"
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Street:
          <input
            type="text"
            value={street}
            placeholder="street"
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>
        <label>
          {" "}
          Street Number:
          <input
            type="number"
            value={streetNum}
            placeholder="street number"
            onChange={(e) => setStreetNum(e.target.value)}
          />
        </label>
        <button onClick={(event) => UpdateUser(event)}>Save</button>
        <p>or</p>
        <button onClick={() => {navigate("/");}}>Log In</button>
      </form>
    </>
  );
};
export default EditDetails;

import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  // user input --> userName, password

  const {userName,setUserName,setPassword} = useContext(UserContext);

  return (
    <>
      <h1>LogIn</h1>
      <form>
        <label>
          UserName:
          <input
            type="text"
            placeholder="UserName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={()=>navigate(`/profile/${userName}`)}>Log in</button>
      </form>
      <div className="register">
        <p>or</p>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Register Now
        </button>
      </div>
    </>
  );
};
export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Log In
        </button>
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

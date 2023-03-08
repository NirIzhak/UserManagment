import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {

  const navigate = useNavigate();
  // user input --> userName, password

  const { userName, password, setUserName, setPassword, ReturnUser } = useContext(UserContext);

  //check user login details
  const CheckUserLogIn = (userName, password) => {
    const user = ReturnUser(userName);

    // if the admin sign in
    if (userName == "admin" && password == "admin1234admin") {
      navigate(`/admin`);
    }
    
    // if the user sign in
    else if (user.userName == userName && user.password == password) {
      navigate(`/profile/${userName}`);
    }
    
    // if the details isn't in DB
    else {
      alert("Username and password are incorrect");
    }
  };

  return (
    <div className="login">
      <h1>Sign In</h1>
      <form>
        <label>
          User Name
          </label>
          <input
            type="text"
            placeholder="UserName"
            onChange={(e) => setUserName(e.target.value)}
          />
        <label>
          Password
          </label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        <button onClick={() => CheckUserLogIn(userName, password)}>
          Log in
        </button>
      </form>
      <div className="register">
        <p><strong>or</strong></p>
        <button
          onClick={() => {
            navigate("/register");
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};
export default Login;

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();
  // user input --> userName, password

  const {userName,password,setUserName,setPassword,ReturnUser} = useContext(UserContext);

  //check user login details
  const CheckUserLogIn = (userName,password) => {

  const user = ReturnUser(userName);
  console.log('user :>> ', user);
  alert("hi");
  if(userName == "admin" && password == "admin1234admin"){
    navigate(`/admin/${userName}`);
  }
  else if(user.userName == userName && user.password == password){
    navigate(`/profile/${userName}`);
  }
  else{
    alert("Username and password are incorrect");
  }
  
  }
  
  return (
    <>
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
        <button onClick={()=>CheckUserLogIn(userName,password)}>Log in</button>
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

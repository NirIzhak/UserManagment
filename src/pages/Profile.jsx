import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { ReturnUser } = useContext(UserContext);
  const { userName } = useParams();
  let user = ReturnUser(userName);

  const EditDetails = () => {
    navigate(`/editDetails/${userName}`);
  };
  const LogOut = () => {
    navigate("/");
  };
  const reportHazard = () => {
    console.log("report");
  };

  return user !== undefined ? (
    <div className="profile-container">
      <h1>Hey {user.firstName}!</h1>
      <div id="profile">
        <div id="profileImage">
          <img src={user.image} style={{ width: "10em" }} />
        </div>
        <p>
          {" "}
          <strong>User Name:</strong> <span>{userName}</span>
        </p>
        <p>
          {" "}
          <strong>Full Name:</strong>{" "}
          <span>
            {user.firstName} {user.lastName}
          </span>
        </p>
        <p>
          {" "}
          <strong>Street Adress:</strong>{" "}
          <span>
            {user.street} {user.streetNum}, {user.city}
          </span>
        </p>
        <p>
          {" "}
          <strong>Birth Date:</strong> <span>{user.date}</span>
        </p>
        <p>
          {" "}
          <strong>Email:</strong> <span>{user.email}</span>
        </p>
        <div className="profile-buttons">
        <button id="edit" onClick={() => EditDetails()}>
          Edit
        </button>
        <button id="report" onClick={() => reportHazard()}>
          Report
        </button>
        <button id="LogOut" onClick={() => LogOut()}>
          Log out
        </button>
        </div>
      </div>
    </div>
  ) : (
    LogOut()
  );
};
export default Profile;

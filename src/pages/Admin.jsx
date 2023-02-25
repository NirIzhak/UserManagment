import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Admin = () => {
  const { users, SetUsers } = useContext(UserContext);
  const navigate = useNavigate();

  // go to update user page
  const UpdateUser = (userName) => {
    navigate(`/editDetails/${userName}`);
  };

  // delete user from users
  const DeleteUser = (event, userName) => {
    event.preventDefault();
    SetUsers(users.filter((u) => u.userName != userName));
  };

  return (
    <>
      <h1>Welcome To Admin Page!</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>User Name</th>
            <th>Birth Date</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={user.image} style={{ width: "5em" }} />
                </td>
                <td>{user.userName}</td>
                <td>{user.date}</td>
                <td>{user.email}</td>
                <td>
                  {user.street} {user.streetNum} {user.city}
                </td>
                <td className="table-btn">
                <button onClick={() => UpdateUser(user.userName)}>
                    Edit
                  </button>
                  <button onClick={(event) => DeleteUser(event, user.userName)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Log Out
        </button>
      </div>
    </>
  );
};
export default Admin;

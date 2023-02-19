import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [users, SetUsers] = useState([]);

  // load first users data
  const LoadUsers = async () => {
    try {
      let res = await fetch("./data/Users.json");
      let data = await res.json();
      SetUsers(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    LoadUsers();
  }, []);

  const value = {
    users,
    SetUsers,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserContextProvider;

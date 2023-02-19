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

  const CheckUserRegisterDetails = (user, passwordAgain) => {
    if (!isValidEmail(user.email)) {
      alert("Email already used");
    }
    else if (
      isValidUserName(user.userName) &&
      isValidDate(user.date) &&
      isValidEmail(user.email) &&
      checkIfEmpty(user, passwordAgain)
    ) {
      SetUsers([...users, user]);
    }
    else {
      alert(
        "Check Your Details Again..."
      );
    }
  };










// check userName charts
const isValidUserName = (userName) => {
  const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  return regex.test(userName);
};

// get age from date
const getAge = (date) => {
  const today = new Date();
  const birthDate = new Date(date);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

// chack date
const isValidDate = (date) => {
  const age = getAge(date);
  if (age > 0 && age < 120) return true;
  else return false;
};

// check email
const isValidEmail = (email) => {
  if (users.find((e) => e.email == email)) {
    return false;
  } else return true;
};

// check for empty inputs
const checkIfEmpty = (user, passwordAgain) => {
  if (
    user.streetNum == "" ||
    user.street == "" ||
    user.city == "" ||
    user.date == "" ||
    user.email == "" ||
    user.lastName == "" ||
    user.firstName == "" ||
    user.image == "" ||
    passwordAgain == "" ||
    user.password == "" ||
    user.userName == ""
  )
    return false;
  else return true;
};



// // check user login details
// const CheckUserLogIn = (userName, password) => {
//   let user = users.find(
//     (u) => u.userName == userName && u.password == password
//   );

//   if(userName == "admin" && password == "admin1234admin") navigate(`/manager/${userName}`);
//   else if (user != undefined && userName != "admin")
//     navigate(`/profile/${userName}`);

//   else alert("This Account Is Not Registerd")
// };





























  useEffect(() => {
    LoadUsers();
  }, []);

  const value = {
    users,
    SetUsers,
    CheckUserRegisterDetails,

  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserContextProvider;

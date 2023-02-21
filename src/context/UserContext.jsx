import { createContext, useState, useEffect } from "react";


export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

  const [users, SetUsers] = useState([]);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [streetNum, setStreetNum] = useState("");
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

  const CheckUserRegisterDetails = (user, passwordAgain) => {
    if (!isValidEmail(user.email)) {
      alert("Email already used");
      return false;
    }
    else if (
      isValidUserName(user.userName) &&
      isValidDate(user.date) &&
      isValidEmail(user.email) &&
      checkIfEmpty(user, passwordAgain)
    ) {
      SetUsers([...users, {...user}]);
      alert(
        "Register Succesfull"
      );
      return true
    }
    else {
      alert(
        "Check Your Details Again..."
      );
      return false;
    }
  };
  
const ReturnUser=(userName)=>{return users.find((u) => u.userName == userName);}

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

  const value = {
    users,
    SetUsers,
    CheckUserRegisterDetails,
    ReturnUser,
    userName, 
    setUserName,
    password, 
    setPassword,
    passwordAgain, 
    setPasswordAgain,
    image, 
    setImage,
    firstName, 
    setFirstName,
    lastName, 
    setLastName,
    email, 
    setEmail,
    date, 
    setDate,
    city, 
    setCity,
    street, 
    setStreet,
    streetNum, 
    setStreetNum

  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserContextProvider;

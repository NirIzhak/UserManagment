import { BrowserRouter, Routes, Route } from "react-router-dom";
import Administrator from "./classes/Administrator";
import UserContextProvider, { UserContext } from "./context/UserContext";
import Admin from "./pages/Admin";
import EditDetails from "./pages/EditDetails";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import "./styles/App.css";


/*const admin = new Administrator();
console.log('admin :>> ', admin);*/
const App = () => {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile/:userName" element={<Profile />}></Route>
          <Route path="/editDetails/:userName" element={<EditDetails />}></Route>
          <Route path="/admin/:userName" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;

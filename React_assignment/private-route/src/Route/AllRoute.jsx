import { Route, Routes } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import { Dashboard } from "../Pages/Dashboard";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Setting } from "../Pages/Setting";
import { SignIn } from "../Pages/Signin";
import { SignOut } from "../Pages/SignOut";

export const AllRoute = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="login/signin" element={<SignIn />} />
          <Route path="login/signout" element={<SignOut />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
};

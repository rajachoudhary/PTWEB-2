import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Admin } from "./components/Admin";
import { Login } from "./components/Login";
import { AuthContext } from "./contexts/AuthContext";

export const Dashboard = () => {
  const { isAuth } = React.useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate, isAuth]);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              Dashboard
              <Admin />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default Dashboard;
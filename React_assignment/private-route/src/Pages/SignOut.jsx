import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";

export const SignOut = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    setIsAuth(false);
    navigate("/login");
  };
  return (
    <div>
      <h1>
        <button onClick={handleSignOut}>SignOut</button>
      </h1>
    </div>
  );
};

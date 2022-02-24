import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";

export const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  // console.log(isAuth);

  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/signout");
    setIsAuth(true);
  };
  console.log(isAuth);
  return (
    <div>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

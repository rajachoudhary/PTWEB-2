import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";

export const SignIn = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const handleSignin = () => {
    console.log(isAuth);

    navigate("/login/signout");
    setIsAuth(true);
  };
  return (
    <div>
      <h1>welcome to sign in page</h1>
      <button onClick={handleSignin}>Sign In</button>
    </div>
  );
};

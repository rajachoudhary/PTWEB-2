import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import style from "../CSS/form.module.css";

export const Form = () => {
  const initState = {
    email: "",
    password: ""
  };
  const { setForm, setIsAuth } = useContext(AuthContext);
  const [state, setState] = useState(initState);
  const [wrongInfo, setWrongInfo] = useState(false);
  const [token, setToken] = useState("");
  const handleInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleFetch = () => {
    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setWrongInfo(false);
          setToken(data.token);
          setForm(false);
          setIsAuth(false);
          alert(data.token);
        } else {
          setWrongInfo(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      {wrongInfo ? (
        <div style={{ color: "red", padding: "15px" }}>
          Please enter registered email id and password
        </div>
      ) : (
        <div style={{ color: "blue", padding: "15px" }}>
          Enter your email id and password
        </div>
      )}
      <div className={style.formContainer}>
        <div className={style.form}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInput}
          />
        </div>
        <div className={style.form}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInput}
          />
        </div>
        <button type="submit" onClick={handleFetch}>
          Login
        </button>
      </div>
    </div>
  );
};

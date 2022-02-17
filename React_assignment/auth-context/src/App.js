import { useContext } from "react";
import { Form } from "./Components/form";
import { NavbarButton } from "./Components/Navbar";
import { AuthContext } from "./Context/AuthContext";
import "./styles.css";

export default function App() {
  const { form } = useContext(AuthContext);
  return <div className="App">{form ? <Form /> : <NavbarButton />}</div>;
}

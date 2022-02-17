import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NavbarButton } from "./Components/Navbar";
import { ContextProvider } from "./Context/AuthContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ContextProvider>
      {/* <NavbarButton/> */}
      <App />
    </ContextProvider>
  </StrictMode>,
  rootElement
);

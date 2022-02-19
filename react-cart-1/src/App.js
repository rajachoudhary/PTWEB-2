import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AboutUs } from "./Pages/AboutUs";
import { Children } from "./Pages/Children";
import { Contact } from "./Pages/contactUs";
import { Faq } from "./Pages/Faq";
import { Home } from "./Pages/Home";
import { Mens } from "./Pages/Mens";
import { Womens } from "./Pages/Womens";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/womens" element={<Womens/>}/>
        <Route path="/children" element={<Children/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

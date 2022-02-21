import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AboutUs } from "./Pages/AboutUs";
import { Cart } from "./Pages/Cart";
import { Children } from "./Pages/Children";
import { ContactUs } from "./Pages/contactUs";
import { Faq } from "./Pages/Faq";
import { Home } from "./Pages/Home";
import { Mens } from "./Pages/Mens";
import { Womens } from "./Pages/Womens";


export default function App() {
  const [buy, buyNow] = useState([])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mens" element={<Mens buyNow={buyNow} buy={buy}/>}/>
        <Route path="/womens" element={<Womens/>}/>
        <Route path="/children" element={<Children/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/cart" element={<Cart buyNow={buyNow} buy={buy}/>}/>
      </Routes>
    </div>
  );
}

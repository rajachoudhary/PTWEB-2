import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./Componets/Navbar";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

function App() {
  const isuserLogin = useSelector((state)=> state.auth.isuserLogin)

  const navigate = useNavigate()
  const {pathname} = useLocation()
  useEffect(()=>{
    if(isuserLogin){
      if(pathname === '/login'){
        navigate("/")
      }else{
        navigate(pathname)
      }
      // navigate("/")
    }else{
      navigate("/login")
    }
  },[pathname,isuserLogin,navigate])
  return (
    <div className="App">
        <Navbar/>
        <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="login" element={<Login/>}/> 
        </Routes>
        </div>
    </div>
  );
}

export default App;

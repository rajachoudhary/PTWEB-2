import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Componets/Navbar";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route to="/" element={<Home/>}/>
          <Route to="login" element={<About/>}/>
          <Route to="contact" element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;

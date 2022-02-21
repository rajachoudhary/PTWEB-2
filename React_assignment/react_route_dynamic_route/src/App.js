import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { ProductDetail } from "./Components/ProductDetail";
import { Products } from "./Components/Products";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/*" element={<Products/>}>
          <Route path=":id" element={<ProductDetail/>}/>
        </Route>
      </Routes>
      {/* <Outlet/> */}
    </div>
  );
}

export default App;

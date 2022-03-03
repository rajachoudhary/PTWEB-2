import { useSelector } from "react-redux";
import { Form } from "./Components/Form";
import { Navbar } from "./Components/Navbar";



function App() {
  const isuserLogin = useSelector((state)=> state.auth.isuserLogin)
  console.log(isuserLogin)
  return (
    <div className="App">
      {
        isuserLogin ? <Form/> : <Navbar/>
      }
    </div>
  );
}

export default App;

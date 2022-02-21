
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { Prerequsite } from './Pages/Prerequsite';
import { User } from './Pages/User';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='prerequsite' element={<Prerequsite/>}/>
        <Route path="user" element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;

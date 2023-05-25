import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from './pages/Login/Register/Login';
import { Register } from './pages/Login/Register/Register';
import { Navbar } from './component/navbar';
import { Landing } from './pages/Landing/landing';
function App() {
  return(
  <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

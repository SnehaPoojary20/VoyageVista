import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import SignUp from './Home/SignUp.jsx';  // Changed SignIn -> SignUp for clarity
import LogIn from './Home/Login.jsx';
import Logout from './Home/Logout.jsx';
import Home from './Home/Home.jsx'; // Ensure correct file casing
import "./Styling/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>  // ✅ Keep only Routes
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/logout" element={<Logout />} />
  </Routes>
  );
}

export default App;




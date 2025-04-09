import React, { useState, useEffect } from "react";
import MoodSelector from "./wildhorizon";
import SignUp from "./SignUp.jsx";
import LogIn from "../Home/Login.jsx";

const Navbar = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleSignIn = () => setIsSignInOpen(!isSignInOpen);
  const toggleLogin = () => setIsLoginOpen(!isLoginOpen); // ✅ Fixed function name

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed-top custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><b>VoyageVista</b></a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <b>VoyageVista</b>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>

              {/* WildHorizon Dropdown with MoodSelector */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  WildHorizon - The untamed side of travel 🌍
                </a>
                <ul className="dropdown-menu">
                  <li><MoodSelector onMoodSelect={setSelectedMood} /></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Vista-Bot 🏝️🤖</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" onClick={toggleSignIn}>SignUp</a>
              </li>
              
              <li className="nav-item"> {/* ✅ Wrapped inside <li> */}
                <a className="nav-link" href="#" onClick={toggleLogin}>Login</a> 
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Logout</a>
              </li>
            </ul>

            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>

      {/* Sign-In and LogIn Modals */}
      {isSignInOpen && <SignUp onClose={toggleSignIn} />} 
      {isLoginOpen && <LogIn onClose={toggleLogin} />} 
    </nav>
  );
};

export default Navbar;





import React from "react";
import "../Styling/App.css";
import Navbar from "./navbar";
import Body from "./body.jsx";

import Footer from "../Footer/footer";

const Home=()=>{
    return(
        <>
        <Navbar />
        <div className="home-container">  {/* Common background wrapper */}
          <Body />
          
        </div>
       <div className="footer-container"> <Footer /></div>
      </>
    );
}

export default Home;
//#Rohan1234
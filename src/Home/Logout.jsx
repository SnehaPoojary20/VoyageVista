import React, { useState } from "react";
import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Logout = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
      alert("Failed to log out!");
    }
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)} className="btn btn-danger">
        Logout
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Are you sure you want to logout?</h3>
            <div className="button-group">
              <button onClick={handleLogout} className="btn btn-danger">Yes, Logout</button>
              <button onClick={() => setShowModal(false)} className="btn btn-secondary">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;



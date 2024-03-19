import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");

    if (isConfirmed) {
      axios.get("http://localhost:3000/auth/logout").then((result) => {
        if (result.data.Status) {
          navigate("/");
        }
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg text-white bg-light rounded p-1">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-search"></i> Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLogout}>
                <i className="bi bi-power"></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import Navbar from "./Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/verify", { withCredentials: true })
      .then((response) => {
        setUserRole(response.data.role);
      })
      .catch((error) => {
        console.error("Error fetching user role:", error);
        setError(error.message || "Error fetching user role");
      });
  }, []);

  const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout").then((result) => {
      if (result.data.Status) {
        navigate("/");
      }
    });
  };

  console.log("User role:", userRole); // Log user role

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* Sidebar */}
        <div
          className="col-auto col-md-3 col-xl-2 px-sm-2 px-0"
          style={{ backgroundColor: "navy" }}
        >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
            {/* Logo */}
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-done d-sm-inline">
                <img
                  src="../../public/Images//incologosinbackg.svg"
                  alt="Logo INCO"
                  className="mx-auto d-block logologin"
                  style={{ width: "100%" }}
                />
              </span>
            </Link>
            {/* Navigation */}
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100 p-1">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  <span className="fs-4 bi-speedometer2 ms-2"></span>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/student"
                  className="nav-link px-0 align-middle text-white"
                >
                  <span className="fs-4 bi-mortarboard ms-2"></span>
                  <span className="ms-2 d-none d-sm-inline">Students</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <span className="fs-4 bi-person-badge ms-2"></span>
                  <span className="ms-2 d-none d-sm-inline">Teachers</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/course"
                  className="nav-link px-0 align-middle text-white"
                >
                  <span className="fs-4 bi-book-half ms-2"></span>
                  <span className="ms-2 d-none d-sm-inline">Course</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/calendar"
                  className="nav-link px-0 align-middle text-white"
                >
                  <span className="fs-4 bi-calendar ms-2"></span>
                  <span className="ms-2 d-none d-sm-inline">Calendar</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <span className="fs-4 bi-person ms-2"></span>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              {/* Render "Admin" link only if userRole is "admin" */}
              {userRole !== null &&
                userRole ===
                  "admin" /* Check if userRole is not null before rendering */ && (
                  <li className="w-100">
                    <Link
                      to="/dashboard/admin"
                      className="nav-link px-0 align-middle text-white"
                    >
                      <span className="fs-4 bi-person ms-2"></span>
                      <span className="ms-2 d-none d-sm-inline">Admin</span>
                    </Link>
                  </li>
                )}
            </ul>
          </div>
        </div>
        {/* Main content */}
        <div className="col p-0 m-0">
          <div
            className="p-2 d-flex justify-content-end"
            style={{ backgroundColor: "navy" }}
          >
            <Navbar />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

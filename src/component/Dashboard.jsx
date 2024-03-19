import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
//import CalendarIcon from "./CalendarIcon";
import axios from "axios";
import "./style.css";

// Import your calendar icon
import CalendarIcon from "./Calender"; // Update the path accordingly
import Navbar from "./Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout").then((result) => {
      if (result.data.Status) {
        navigate("/");
      }
    });
  };
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className="col-auto col-md-3 col-xl-2 px-sm-2 px-0"
          style={{ backgroundColor: "navy" }}
        >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
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
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100 p-1">
                <Link
                  to="/dashboard"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/student"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-mortarboard ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Manage Students
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person-badge ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Manage Teachers
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/course"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-book-half ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Course</span>
                </Link>
              </li>
              {/* <hr className="text-secondary" /> */}
              <li className="w-100">
                <Link
                  to="/dashboard/calendar"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-calendar ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Calendar</span>
                </Link>
              </li>

              <li className="w-100">
                <Link
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle  text-white"
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div
            className="p-2 d-flex justify-content-end"
            style={{ backgroundColor: "navy" }}
          >
            {/* <h4>INCO Dashboard</h4> */}
            <Navbar />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

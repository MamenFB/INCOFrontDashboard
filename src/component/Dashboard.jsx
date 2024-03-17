import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";


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
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{ backgroundColor: '#0c245c' }}>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">INCO</span>
            </Link>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="w-100">
                <Link to="/dashboard" className="nav-link text-white px-0 align-middle">
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/dashboard/teacher" className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-person-badge ms-2"></i> 
                  <span className="ms-2 d-none d-sm-inline">Manage Teachers</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/dashboard/employee" className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-mortarboard ms-2"></i> 
                  <span className="ms-2 d-none d-sm-inline">Manage Students</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/dashboard/course" className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-book-half ms-2"></i> 
                  <span className="ms-2 d-none d-sm-inline">Course</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/dashboard/CourseGradesChart" className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-bar-chart-line ms-2"></i> 
                  <span className="ms-2 d-none d-sm-inline">Chart</span>
                </Link>
              </li>
              <li className="w-100">
              <Link to="/dashboard/CalendarComponent" className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-calendar-check ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Calendar</span>
                </Link>
              </li>
              <li className="w-100">
                <Link to="/dashboard/profile" className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="w-100" onClick={handleLogout}>
                <a className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>INCO Dashboard</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

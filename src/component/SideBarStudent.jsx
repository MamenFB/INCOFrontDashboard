import React from "react";
import { Link } from "react-router-dom";

const SideBarStudent = () => {
  return (
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
              to="/src/component/StudentProfile"
              className="nav-link px-0 align-middle  text-white">
              <i className="fs-4 bi-person ms-2"></i>
              <span className="ms-2 d-none d-sm-inline">Profile</span>
            </Link>
            <li/>
            <li>
            <Link
              to="/dashboard"
              className="nav-link text-white px-0 align-middle"
            >
              <i className="fs-4 bi-speedometer2 ms-2"></i>
              <span className="ms-2 d-none d-sm-inline">Progress</span>
            </Link>
            </li>
           
          </li>
          <li className="w-100">
            <Link
              to="/dashboard/student"
              className="nav-link px-0 align-middle text-white"
            >
              <i className="fs-4 bi-mortarboard ms-2"></i>
              <span className="ms-2 d-none d-sm-inline">
                Progress
              </span>
            </Link>
          </li>
          <li className="w-100">
            <Link
              to="/dashboard/employee"
              className="nav-link px-0 align-middle text-white"
            >
              <i className="fs-4 bi-person-badge ms-2"></i>
              <span className="ms-2 d-none d-sm-inline">Notes</span>
            </Link>
          </li>
          <li className="w-100">
            <Link
              to="/dashboard/course"
              className="nav-link px-0 align-middle text-white" >
              <i className="fs-4 bi-book-half ms-2"></i>
              <span className="ms-2 d-none d-sm-inline">Calendar</span>
            </Link>
          </li>
          <li className="w-100">
            <Link
              to="/dashboard/calendar"
              className="nav-link px-0 align-middle text-white"
            >
              <i className="fs-4 bi-calendar ms-2"></i>
              <span className="ms-2 d-none d-sm-inline">Resources</span>
            </Link>
          </li>
          <li className="w-100">
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarStudent;

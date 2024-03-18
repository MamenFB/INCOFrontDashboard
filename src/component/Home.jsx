import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Home = () => {
  const [adminTotal, setAdminTotal] = useState();
  const [employeeTotal, setEmployeeTotal] = useState();
  const [ageTotal, setAgeTotal] = useState();
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    adminCount();
    employeeCount();
    ageCount();
    AdminRecords();
  }, []);

  const AdminRecords = () => {
    axios.get("http://localhost:3000/auth/admin_records").then((result) => {
      if (result.data.Status) {
        setAdmins(result.data.Result);
      }
    });
  };

  const adminCount = () => {
    axios.get("http://localhost:3000/auth/admin_count").then((result) => {
      if (result.data.Status) {
        setAdminTotal(result.data.Result[0].admin);
      }
    });
  };

  const employeeCount = () => {
    axios.get("http://localhost:3000/auth/employee_count").then((result) => {
      if (result.data.Status) {
        setEmployeeTotal(result.data.Result[0].employee);
      }
    });
  };

  const ageCount = () => {
    axios.get("http://localhost:3000/auth/age_count").then((result) => {
      if (result.data.Status) {
        setAgeTotal(result.data.Result[0].age);
      }
    });
  };

  return (
    <div className="p-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i className="fs-4 bi-people ms-2 text-success"></i>
              <div>
                <h3>Student</h3>
                <h5> Total: </h5>
                <h5> {employeeTotal * 2}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-person-fill fs-4 ms-2 text-primary fs-1"></i>
              <div>
                <h3>Male</h3>
                <h5> Total: </h5>
                <h5> {adminTotal * 2}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-person-fill fs-4 ms-2 text-pink fs-1"></i>
              <div>
                <h3>Female</h3>
                <h5> Total: </h5>
                <h5> {adminTotal * 2}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-globe2 ms-2 fs-3 text-primary"></i>
              <div>
                <h3>Nationality</h3>
                <h5> Total: </h5>
                <h5>{adminTotal * 2}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-8 p-3">
            <LineChart />
          </div>
          <div className="col-md-4 p-3">
            <PieChart />
          </div>
        </div>
      </div>
      <div className="mt-4 px-5 pt-3">
        <h3>List of Admins</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.id}>
                <td>{a.email}</td>
                <td>
                  <button className="btn btn-info btn-sm me-2">Edit</button>
                  <button className="btn btn-warning btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

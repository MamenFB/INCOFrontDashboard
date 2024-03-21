import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Home = () => {
  const [studentTotal, setStudentTotal] = useState();
  const [employeeTotal, setEmployeeTotal] = useState();
  const [ageTotal, setAgeTotal] = useState();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    studentCount();
    employeeCount();
    ageCount();
    studentRecords();
  }, []);

  const studentRecords = () => {
    axios.get("http://localhost:3000/auth/student_records").then((result) => {
      if (result.data.Status) {
        setStudents(result.data.Result);
      }
    });
  };

  const studentCount = () => {
    axios.get("http://localhost:3000/auth/student_count").then((result) => {
      if (result.data.Status) {
        setStudentTotal(result.data.Result[0].student);
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
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i className="fs-4 bi-people ms-2 text-success"></i>
              <div>
                <h3>Student</h3>
                <h5> Total: </h5>
                <h5> {employeeTotal * 2}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-person-fill fs-4 ms-2 text-primary fs-1"></i>
              <div>
                <h3>Male</h3>
                <h5> Total: </h5>
                <h5> {studentTotal * 2}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-person-fill fs-4 ms-2 text-pink fs-1"></i>
              <div>
                <h3>Female</h3>
                <h5> Total: </h5>
                <h5> {studentTotal * 2}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6 p-3">
            <LineChart />
          </div>
          <div className="col-md-3 p-3">
            <PieChart />
          </div>
        </div>
      </div>
      <div className="mt-4 px-5 pt-3">
        <h3>List of Students</h3>
        <table className="table">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {students.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>
                  <img
                    src={`http://localhost:3000/Images/` + e.image}
                    className="student_image"
                    alt=""
                    // srcet=""
                    style={{
                      maxWidth: "50px",
                      maxHeight: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </td>
                <td>{e.email}</td>
                <td>{e.age}</td>
                <td>{e.gender}</td>
                <td>{e.nationality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

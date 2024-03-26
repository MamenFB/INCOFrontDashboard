//HOME after chart add
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LineChart from "./LineChart";
import PieChart from "./PieChart.jsx";

const Home = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [maleCount, setMaleCount] = useState(null);
  const [femaleCount, setFemaleCount] = useState(null);
  const [undefinedCount, setUndefinedCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/student")
      .then((result) => {
        console.log(result.data.Result);
        if (result.data.Status) {
          const studentsData = result.data.Result;
          setStudent(studentsData);
          setEmployeeTotal(studentsData.length);

          let male = 0;
          let female = 0;
          let undefinedGender = 0;
          studentsData.forEach((student) => {
            if (student.gender.toLowerCase() === "male") {
              male++;
            } else if (student.gender.toLowerCase() === "female") {
              female++;
            } else {
              undefinedGender++;
            }
          });

          setMaleCount(male);
          setFemaleCount(female);
          setUndefinedCount(undefinedGender);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

  const currentStudents = student.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i
                className="fs-0 bi-mortarboard ms-2"
                style={{ color: "#32CD32", fontSize: "4rem" }}
              ></i>
              <div>
                <h3>Student</h3>
                <h5> Total: </h5>
                <h5> {employeeTotal}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-person-fill fs-1 ms-2 text-primary fs-1"></i>
              <div>
                <h3>Male</h3>
                <h5> Total: </h5>
                <h5> {maleCount}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i
                className="bi bi-person-fill fs-1 ms-2"
                style={{ color: "#FF007F" }}
              ></i>
              <div>
                <h3>Female</h3>
                <h5> Total: </h5>
                <h5> {femaleCount}</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2 bg-light">
            <div className="d-flex justify-content-between p-4 align-items-center bg-white border border-secondary shadow-sm">
              <i
                className="bi fs-1 bi-person-fill ms-2"
                style={{ color: "#FFA500", fontSize: "4rem" }}
              ></i>

              <div>
                <h3>Undefined</h3>
                <h5> Total: </h5>
                <h5> {undefinedCount}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6 p-3">
            <LineChart
              maleCount={maleCount}
              femaleCount={femaleCount}
              undefinedCount={undefinedCount}
            />
          </div>
          <div className="col-md-3 p-3">
            <PieChart
              maleCount={maleCount}
              femaleCount={femaleCount}
              undefinedCount={undefinedCount}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 px-5 pt-3">
        <h3>List of Students</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>
                  <img
                    src={`http://localhost:3000/Images/` + e.image}
                    className="student_image"
                    alt=""
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
        <ul className="pagination justify-content-center">
          {Array.from(
            { length: Math.ceil(student.length / studentsPerPage) },
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;

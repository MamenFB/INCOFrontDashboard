import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Student = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);
  const [employeeTotal, setEmployeeTotal] = useState(0); // Define employeeTotal state
  const [maleCount, setMaleCount] = useState(null); // Define maleCount state
  const [femaleCount, setFemaleCount] = useState(null); // Define femaleCount state
  const [undefinedCount, setUndefinedCount] = useState(null); // Define femaleCount state
  const [currentPage, setCurrentPage] = useState(1); // Define currentPage state
  const studentsPerPage = 5; // Define the number of students per page

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/student")
      .then((result) => {
        console.log(result.data.Result);
        if (result.data.Status) {
          const studentsData = result.data.Result;
          setStudent(studentsData);
          setEmployeeTotal(studentsData.length); // Update employeeTotal

          // Log gender data for debugging
          console.log(
            "Gender data:",
            studentsData.map((student) => student.gender)
          );

          // Count male and female students
          let male = 0;
          let female = 0;
          let undefined = 0;
          studentsData.forEach((student) => {
            if (student.gender.toLowerCase() === "male") {
              male++;
            }
            if (student.gender.toLowerCase() === "female") {
              female++;
            } else if (student.gender.toLowerCase() === "undefined") {
              undefined++;
            }
          });
          console.log("Male count:", male);
          console.log("Female count:", female);

          // Update male and female counts
          setMaleCount(male);
          setFemaleCount(female);
          setUndefinedCount(undefined);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    // Display confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (isConfirmed) {
      // If user confirms, proceed with deletion
      axios
        .delete("http://localhost:3000/auth/delete_student/" + id)
        .then((result) => {
          if (result.data.Status) {
            toast.success("Student deleted successfully!");
            setTimeout(function () {
              window.location.reload();
            }, 500);
          } else {
            alert(result.data.error);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  // Calculate index of the last and first students for the current page
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

  // Get students for the current page
  const currentStudents = student.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  // Handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-12 p-2 bg-light">
            <div className="d-flex justify-content-between p-3 align-items-center bg-white border border-secondary shadow-sm">
              <div>
                <h3>
                  <i class="fs-4 bi-mortarboard ms-2"></i> Students
                </h3>
                <h5>Total: {employeeTotal}</h5>
                <div className="d-flex">
                  <h5>
                    <i class="bi bi-person-fill fs-4 ms-2 text-primary fs-1"></i>{" "}
                    Male Total: {maleCount}
                  </h5>
                  <h5 className="ms-3">
                    <i class="bi bi-person-fill fs-4 ms-2 text-pink fs-1"></i>{" "}
                    Female Total: {femaleCount}
                  </h5>
                  <h5 className="ms-3">
                    <i class="bi bi-person-badge-fill"></i> Undefined Total:{" "}
                    {undefinedCount}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-3">
        <div className="d-flex justify-content-center">
          <h3> Student List</h3>
        </div>
        <Link to="/dashboard/add_student" className="btn btn-success">
          Add student
        </Link>
        <div className="mt-3">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Email</th>
                <th>Address</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Nationality</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.map((e) => (
                <tr key={e.email}>
                  <td>{e.name}</td>
                  <td>
                    <img
                      src={`http://localhost:3000/Images/${e.image}`}
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
                  <td>{e.address}</td>
                  <td>{e.age}</td>
                  <td>{e.gender}</td>
                  <td>{e.nationality}</td>
                  <td>{e.course}</td>
                  <td>
                    <Link
                      to={"/dashboard/edit_student/" + e.id}
                      className="btn btn-info btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleDelete(e.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <ul className="pagination justify-content-center">
            {Array.from(
              { length: Math.ceil(student.length / studentsPerPage) },
              (_, index) => (
                <li key={index} className="page-item">
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
    </div>
  );
};

export default Student;

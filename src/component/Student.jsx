import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Student = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/student")
      .then((result) => {
        console.log(result.data.Result);
        if (result.data.Status) {
          setStudent(result.data.Result);
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

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3> Student List</h3>
      </div>
      <Link to="/dashboard/add_student" className="btn btn-success">
        Add student
      </Link>
      <div className="mt-3">
        <table className="table ">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((e) => (
              <tr key={e.email}>
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
                <td>{e.address}</td>
                <td>{e.age}</td>
                <td>{e.gender}</td>
                <td>{e.course_id}</td>
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
      </div>
    </div>
  );
};

export default Student;

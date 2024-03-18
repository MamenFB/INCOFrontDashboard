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
        //console.log(result.data);
        if (result.data.Status) {
          setStudent(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/auth/delete_student/" + id)
      .then((result) => {
        if (result.data.Status) {
          toast.success("Student  deleted succesfully!");
          //setTimeout(() => navigate("/dashboard/employee"), 300);
          //setTimeout(() => window.location.reload(), 500);
          setTimeout(function () {
            window.location.reload();
          }, 500);
        } else {
          alert(result.data.error);
        }
      });
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
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Age</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>
                  <img
                    src={`http://localhost:3000/Images/` + e.image}
                    className="student_image"
                    alt=""
                    srcet=""
                  />
                </td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>{e.age}</td>
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
      </div>
    </div>
  );
};

export default Student;

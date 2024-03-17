import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Teachers = () => {
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/teacher")
      .then((result) => {
        if (result.data.Status) {
          setTeacher(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/auth/delete_teacher/" + id)
      .then((result) => {
        if (result.data.Status) {
          toast.success("Teacher deleted succesfully!");
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
        <h3>User List</h3>
      </div>
      <Link to="/dashboard/add_teacher" className="btn btn-success">
        Add User
      </Link>
      <div className="mt-3">
        <table className="table ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              
              <th>Course</th> 
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teacher.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>
                  <img
                    src={`http://localhost:3000/Images/` + e.image}
                    className="teacher_image"
                    alt=""
                  />
                </td>
                <td>{e.email}</td>
                 
                <td>{e.course}</td>
                <td>
                  <Link
                    to={"/dashboard/edit_teacher/" + e.id}
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

export default Teachers;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Course.css";
import { toast } from "react-toastify";

const course = () => {
  const [course, setcourse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/course")
      .then((result) => {
        console.log(result.data);
        if (result.data.Status) {
          setcourse(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    // Display confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (isConfirmed) {
      // If user confirms, proceed with deletion
      axios
        .delete("http://localhost:3000/auth/delete_course/" + id)
        .then((result) => {
          if (result.data.Status) {
            toast.success("Course  deleted succesfully!");
            //setTimeout(() => navigate("/dashboard/employee"), 300);
            //setTimeout(() => window.location.reload(), 500);
            setTimeout(function () {
              window.location.reload();
            }, 500);
          } else {
            alert(result.data.error);
          }
        });
    }
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Course List</h3>
      </div>
      <Link to="/dashboard/Addcourse" className="btn btn-success">
        Add course
      </Link>
      <div className="mt-3">
        <table className="table ">
          <thead>
            <tr>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {course.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>
                  <Link
                    to={"/dashboard/edit_course/" + e.id}
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

export default course;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import  "../assets/Course.css";

const Course = () => {
  const [course, setcourse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/course")
      .then((result) => {
        //console.log(result.data);
        if (result.data.Status) {
          setcourse(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>course List</h3>
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
            {course.map((c) => (
              <tr>
                <td>{c.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Course;

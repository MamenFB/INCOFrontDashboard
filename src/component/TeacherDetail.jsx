import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TeacherDetail = () => {
  const [teacher, SetTeacher] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/teacher/detail/" + id)
      .then((result) => {
        SetTeacher(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios.get("http://localhost:3000/teacher/logout").then((result) => {
      if (result.data.Status) {
        navigate("/");
      }
    });
  };
  return (
    <div>
      <div className="p-2 d-flex justify-content-center shodow">
        <h4>Teacher Management System</h4>
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center mt-3">
        <img
          src={`http://localhost:3000/Images/` + teacher.image}
          className="emp_det_image rounded-circle "
          style={{ maxWidth: "30%", maxHeight: "30%" }}
          alt="Teacher Image"
        />
        <div className="d-flex align-items-center flex-column mt-5">
          <h3>Name: {teacher.name}</h3>
          <h3>Email: {teacher.email}</h3>
          <h3>age: ${teacher.age}</h3>
        </div>
        <div>
          <button className="btn btn-primary me-2">Edit</button>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;

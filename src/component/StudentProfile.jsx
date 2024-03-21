import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StudentProfile = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/employee/detail/${id}`)
      .then((result) => {
        setEmployee(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleLogout = () => {
    axios.get("http://localhost:3000/employee/logout").then((result) => {
      if (result.data.Status) {
        navigate("/");
      }
    });
  };

  return (
   
      <div className="container-fluid">
        <img
          src={`http://localhost:3000/Images/${employee.image}`}
          className="employee_image"
          alt="Student"
        />
        <div className="container-fluid">
          <h4>Name: {employee.name}</h4>
          <h5>Email: {employee.email}</h5>
          <h5>Age: {employee.age}</h5>
        </div>
        <div>
          <button className="btn btn-primary me-2">Edit</button>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
  );
};

export default StudentProfile;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StudentProfile = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState({});

  useEffect(() => {
    // Fetch employee details
    axios
      .get(`http://localhost:3000/employee/detail/${id}`)
      .then((response) => {
        const data = response.data[0];
        if (data) {
          setEmployee(data);
        }
      })
      .catch((error) => console.error("Error fetching employee details:", error));
  }, [id]);

  useEffect(() => {
    // Fetch course details (if needed)
    axios
      .get(`http://localhost:3000/auth/course`)
      .then((response) => {
        const data = response.data[0];
        if (data) {
          setCourse(data);
        }
      })
      .catch((error) => console.error("Error fetching course details:", error));
  }, []);

  const handleLogout = () => {
    axios.get("http://localhost:3000/employee/logout")
      .then((response) => {
        const { Status } = response.data;
        if (Status) {
          navigate("/");
        }
      })
      .catch((error) => console.error("Error logging out:", error));
  };

  return (
    <div className="card mb-3 student-card">
      <div className="row g-0 ">
        <div className="col-md-4" style={{ width: "10rem" }}>
          <img
            src={`http://localhost:3000/Images/${employee.image}`}
            className="card-img-top Student_profile_image"
            alt="Student Photo"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-8">
        <div className="card-body">
          <h4 className="card-title">Name: {employee.name}</h4>
          <h5 className="card-text">Email: {employee.email}</h5>
          <h5 className="card-text">Age: {employee.age}</h5>
          <h5 className="card-text">Course: {course.name}</h5>
        </div>
        </div>
      </div>
    </div>
  
  );
};

export default StudentProfile;


{/* <div>
<button className="btn btn-primary me-2">Edit</button>
<button className="btn btn-danger" onClick={handleLogout}>
  Logout
</button>
</div> */}
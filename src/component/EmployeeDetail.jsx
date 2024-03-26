import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "./Calender.jsx";

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({});
  const [editedAddress, setEditedAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/employee/detail/" + id)
      .then((result) => {
        setEmployee(result.data[0]);
        setEditedAddress(result.data[0].address);
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

  const handleEditAddress = () => {
    setIsEditing(true);
  };

  const handleSaveAddress = () => {
    // Perform save operation (e.g., update employee data on backend)
    // Update only the address field
    const updatedEmployee = { ...employee, address: editedAddress };
    axios
      .put(`http://localhost:3000/employee/update_address/${id}`, {
        address: editedAddress,
      })
      .then((response) => {
        console.log("Employee address updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating employee address:", error);
      });
    setEmployee(updatedEmployee);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    // Reset the edited address to the original address
    setEditedAddress(employee.address);
    setIsEditing(false);
  };

  const handleAddressChange = (e) => {
    setEditedAddress(e.target.value);
  };

  return (
    <div>
      <div className="p-2 d-flex justify-content-center shadow">
        <h4>INCO Student Dashboard</h4>
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center mt-3">
        <img
          src={`http://localhost:3000/Images/` + employee.image}
          className="emp_det_image rounded-circle"
          style={{ maxWidth: "30%", maxHeight: "30%" }}
          alt="Employee Image"
        />
        <div className="d-flex align-items-center flex-column mt-5">
          <h3>Name: {employee.name}</h3>
          <h3>Email: {employee.email}</h3>
          <h3>Age: {employee.age}</h3>
          {isEditing ? (
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={editedAddress}
                onChange={handleAddressChange}
              />
              <button
                className="btn btn-primary me-2"
                onClick={handleSaveAddress}
              >
                Save
              </button>
              <button className="btn btn-danger" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          ) : (
            <h3>Address: {employee.address}</h3>
          )}
          <h3>Nationality: {employee.nationality}</h3>
          <h3>Course: {employee.course}</h3>
        </div>
        <div>
          {/* Allow only viewing, not editing */}
          {!isEditing && (
            <button
              className="btn btn-primary me-2"
              onClick={handleEditAddress}
            >
              Edit Address
            </button>
          )}
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div>
          {/* Display calendar */}
          <h2>View Your Calendar</h2>
          <Calendar />
        </div>
      </div>
    </div>
  );
};
export default EmployeeDetail;

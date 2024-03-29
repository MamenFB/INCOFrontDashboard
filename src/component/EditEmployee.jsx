import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    address: "",
    course: "",
    course_id: 0,
  });
  const [course, setcourse] = useState([]);
  const navigate = useNavigate();

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

    axios
      .get("http://localhost:3000/auth/employee/" + id)
      .then((result) => {
        setEmployee({
          ...employee,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          department: result.data.Result[0].department,
          address: result.data.Result[0].address,
          course_id: result.data.Result[0].course_id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm(
      "Are you sure you want to update this details?"
    );

    if (isConfirmed) {
      axios
        .put("http://localhost:3000/auth/edit_employee/" + id, employee)
        .then((result) => {
          if (result.data.Status) {
            toast.success("Employee  updated succesfully!");
            setTimeout(() => navigate("/dashboard/admin"), 500);
          } else {
            alert(result.data.error);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Teacher Details</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Name
            </label>
            <input
              className="form-control rounded-0"
              id="inputName"
              type="text"
              placeholder="Enter Name"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              className="form-control rounded-0"
              id="inputEmail4"
              type="email"
              placeholder="Enter Email"
              value={employee.email}
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputage" className="form-label">
              Department
            </label>
            <input
              className="form-control rounded-0"
              id="inputage"
              type="text"
              placeholder="Enter department"
              value={employee.department}
              aria-autocomplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, department: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              className="form-control rounded-0"
              id="inputAddress"
              type="text"
              placeholder="Enter Address"
              value={employee.address}
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="course" className="form-label">
              Course
            </label>
            <select name="course" id="course" className="form-select">
              onChange=
              {(e) => setEmployee({ ...employee, course_id: e.target.value })}
              {course.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-100">
              Update details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;

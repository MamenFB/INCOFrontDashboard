import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    address: "",
    age: "",
    gender: "",
    course_id: "",
    nationality: "",
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
      .get("http://localhost:3000/auth/student/" + id)
      .then((result) => {
        setStudent({
          ...student,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          address: result.data.Result[0].address,
          age: result.data.Result[0].age,
          gender: result.data.Result[0].gender,
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
      // Check if any field is empty
      for (const key in student) {
        if (student[key] === "" || student[key] === undefined) {
          toast.error("All fields are required.");
          return; // Stop execution if any field is empty
        }
      }
      axios
        .put("http://localhost:3000/auth/edit_student/" + id, student)
        .then((result) => {
          if (result.data.Status) {
            toast.success("Student  updated succesfully!");
            setTimeout(() => navigate("/dashboard/student"), 500);
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
        <h3 className="text-center">Edit Student Details</h3>
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
              value={student.name}
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
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
              value={student.email}
              autoComplete="off"
              onChange={(e) =>
                setStudent({ ...student, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputage" className="form-label">
              Age
            </label>
            <input
              className="form-control rounded-0"
              id="inputage"
              type="text"
              placeholder="Enter age"
              value={student.age}
              aria-autocomplete="off"
              onChange={(e) => setStudent({ ...student, age: e.target.value })}
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
              value={student.address}
              autoComplete="off"
              onChange={(e) =>
                setStudent({ ...student, address: e.target.value })
              }
            />
            <label htmlFor="male" className="form-check-label">
              Male
            </label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              className="form-check-input"
              onChange={(e) =>
                setStudent({ ...student, gender: e.target.value })
              }
            />
            <label htmlFor="female" className="form-check-label">
              Female
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              className="form-check-input"
              onChange={(e) =>
                setStudent({ ...student, gender: e.target.value })
              }
            />
            <label htmlFor="inputage" className="form-label">
              Nationality
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputage"
              placeholder="Enter Nationality"
              autoComplete="off"
              onChange={(e) =>
                setStudent({ ...student, nationality: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="course" className="form-label">
              Course
            </label>
            <select
              name="course"
              id="course"
              className="form-select"
              onChange={(e) =>
                setStudent({ ...student, course_id: e.target.value })
              }
            >
              {course.map((c) => {
                return (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                );
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

export default EditStudent;

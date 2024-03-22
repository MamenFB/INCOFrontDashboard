import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    address: "",
    course: "",
    image: "",
  });
  const [course, setcourse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/course")
      .then((result) => {
        if (result.data.Status) {
          setcourse(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", student.name);
    formData.append("email", student.email);
    formData.append("password", student.password);
    formData.append("address", student.address);
    formData.append("age", student.age);
    formData.append("gender", student.gender);
    formData.append("nationality", student.nationality);
    formData.append("image", student.image);
    formData.append("course_id", student.course);

    axios
      .post("http://localhost:3000/auth/add_student", formData)
      .then((result) => {
        if (result.data.Status) {
          toast.success("Student  updated succesfully!");
          setTimeout(() => navigate("/dashboard/student"), 500);
        } else {
          alert(result.data.Error.toString());
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Student</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
            />

            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setStudent({ ...student, email: e.target.value })
              }
            />

            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) =>
                setStudent({ ...student, password: e.target.value })
              }
            />

            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="Your address"
              autoComplete="off"
              onChange={(e) =>
                setStudent({ ...student, address: e.target.value })
              }
            />

            <label htmlFor="inputage" className="form-label">
              age
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputage"
              placeholder="Enter age"
              autoComplete="off"
              onChange={(e) => setStudent({ ...student, age: e.target.value })}
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

            <label htmlFor="course" className="form-label">
              course
            </label>
            <select
              name="course"
              id="course"
              className="form-select"
              onChange={(e) =>
                setStudent({ ...student, course: e.target.value })
              }
            >
              {course.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            <label className="form-label" htmlFor="inputGroupFile01">
              Select Image
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) =>
                setStudent({ ...student, image: e.target.files[0] })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;

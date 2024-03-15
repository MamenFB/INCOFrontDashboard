import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EditTeacher = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
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
      .get("http://localhost:3000/auth/teacher/" + id)
      .then((result) => {
        setTeacher({
          ...teacher,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          address: result.data.Result[0].address,
          age: result.data.Result[0].age,
          course_id: result.data.Result[0].course_id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/auth/edit_teacher/" + id, teacher)
      .then((result) => {
        if (result.data.Status) {
          toast.success("Teacher  updated succesfully!");
          setTimeout(() => navigate("/dashboard/teacher"), 500);
        } else {
          alert(result.data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit Teacher</h3>
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
              value={teacher.name}
              onChange={(e) =>
                setTeacher({ ...teacher, name: e.target.value })
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
              value={teacher.email}
              autoComplete="off"
              onChange={(e) =>
                setTeacher({ ...teacher, email: e.target.value })
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
              value={teacher.age}
              aria-autocomplete="off"
              onChange={(e) =>
                setTeacher({ ...teacher, age: e.target.value })
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
              value={Teacher.address}
              autoComplete="off"
              onChange={(e) =>
                setTeacher({ ...teacher, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="course" className="form-label">
              Course
            </label>
            <select name="course" id="course" className="form-select">
              onChange=
              {(e) => setTeacher({ ...teacher, course_id: e.target.value })}
              {course.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-100">
              Edit User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTeacher;

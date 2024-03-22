import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EditCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    address: "",
    course_id: 0,
  });
  //const [course, setcourse] = useState([]);
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
      .get("http://localhost:3000/auth/course/" + id)
      .then((result) => {
        setCourse({
          ...course,
          course_id: result.data.Result[0].course_id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (c) => {
    e.preventDefault();
    const isConfirmed = window.confirm(
      "Are you sure you want to update this details?"
    );

    if (isConfirmed) {
      axios
        .put("http://localhost:3000/auth/edit_course/" + id, course)
        .then((result) => {
          if (result.data.Status) {
            toast.success("Course  updated succesfully!");
            setTimeout(() => navigate("/dashboard/course"), 500);
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
        <h3 className="text-center">Course Details</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="course" className="form-label">
              Course
            </label>
            <select name="course" id="course" className="form-select">
              onChange=
              {(e) => setCourse({ ...course, course_id: e.target.value })}
              {course.map((e) => {
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

export default EditCourse;

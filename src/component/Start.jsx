import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Start = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000/verify")
      .then((result) => {
        if (result.data.Status) {
          if (result.data.role === "admin") {
            navigate("dashboard");
          } else {
            navigate("/employee_detail/" + result.data.id);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
<<<<<<< HEAD
      <div className="p-3 rounded w-25 border loginForm ">
        <h2 className="text-center">Login As</h2>
        <div className="d-flex justify-content-between mt-5 mb-2 ">
=======
      <div className="p-3 rounded w-25 border loginForm">
        <img
          src="../../public/Images//incologosinbackg.svg"
          alt="Logo INCO"
          className="mx-auto d-block logologin"
          style={{ width: "100%" }}
        />
        <div className="d-flex justify-content-between mt-5 mb-2">
>>>>>>> e1a04b71b4ffb04fda96fe17588824f504ee84af
          <button
            type="button"
            className="btn btn-custom01"
            onClick={() => {
              navigate("/student_login");
            }}
          >
            Student
          </button>
          <button
            type="button"
            className="btn btn-custom02"
            onClick={() => {
              navigate("/adminlogin");
            }}
          >
            Teacher
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;

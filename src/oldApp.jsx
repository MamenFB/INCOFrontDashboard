import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login.jsx";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./component/Dashboard.jsx";
import Home from "./component/Home.jsx";
import Employee from "./component/Employee.jsx";
import Course from "./component/Course.jsx";
import Profile from "./component/Profile.jsx";
import AddCourse from "./component/AddCourse.jsx";
import AddEmployee from "./component/AddEmployee.jsx";
import EditEmployee from "./component/EditEmployee.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Start from "./component/Start.jsx";
import StudentLogin from "./StudentLogin.jsx";
import EmployeeDetail from "./component/EmployeeDetail.jsx";
import { useEffect } from "react";
import Student from "./component/Student.jsx";
import AddStudent from "./component/AddStudent.jsx";
import Calendar from "./component/Calender.jsx"; // Import Calendar component
import EditCourse from "./component/EditCourse";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme="dark" position="top-center" />

      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/student_login" element={<StudentLogin />}></Route>
        <Route path="/employee_detail/:id" element={<EmployeeDetail />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/dashboard/student" element={<Student />}></Route>
          <Route path="/dashboard/employee" element={<Employee />}></Route>
          <Route path="/dashboard/course" element={<Course />}></Route>{" "}
          {/* Corrected lowercase "c" */}
          <Route path="/dashboard/Calendar" element={<Calendar />}></Route>{" "}
          {/* Corrected lowercase "c" */}
          <Route path="/dashboard/profile" element={<Profile />}></Route>
          <Route
            path="/dashboard/addcourse"
            element={<AddCourse />}
          ></Route>{" "}
          {/* Corrected lowercase "c" */}
          <Route
            path="/dashboard/add_employee"
            element={<AddEmployee />}
          ></Route>{" "}
          {/* Corrected lowercase "e" */}
          <Route
            path="/dashboard/edit_employee/:id"
            element={<EditEmployee />}
          ></Route>{" "}
          {/* Corrected lowercase "e" */}
          <Route
            path="/dashboard/add_student"
            element={<AddStudent />}
          ></Route>{" "}
          {/* Corrected lowercase "s" */}
          <Route
            path="/dashboard/edit_course/:id"
            element={<EditCourse />}
          ></Route>{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import Employee from "./component/Employee";
import Course from "./component/Course";
import Profile from "./component/Profile";
import AddCourse from "./component/AddCourse";
import EditStudent from "./component/EditStudent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Start from "./component/Start";
import StudentLogin from "./StudentLogin";
import EmployeeDetail from "./component/EmployeeDetail";
import { useEffect } from "react";
import Student from "./component/Student";
import AddStudent from "./component/AddStudent";
import Calendar from "./component/Calender.jsx"; // Import Calendar component
import EditCourse from "./component/EditCourse";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme="dark" position="top-center" />

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/student_login" element={<StudentLogin />} />
        <Route path="/employee_detail/:id" element={<EmployeeDetail />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="student" element={<Student />} />
          <Route path="employee" element={<Employee />} />
          <Route path="course" element={<Course />} />
          <Route path="Calendar" element={<Calendar />} />
          <Route path="profile" element={<Profile />} />
          <Route path="addcourse" element={<AddCourse />} />
          <Route path="add_student" element={<AddStudent />} />
          <Route path="edit_student/:id" element={<EditStudent />} />
          <Route path="edit_course/:id" element={<EditCourse />} />
        </Route>
        <Route path="/student_detail/:id" element={<EmployeeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

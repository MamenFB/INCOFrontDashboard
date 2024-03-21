import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import Employee from "./component/Employee";
import Course from "./component/Course";
import Profile from "./component/Profile";
import AddCourse from "./component/AddCourse";
import AddEmployee from "./component/AddEmployee";
//import EditEmployee from "./component/EditEmployee";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Start from "./component/Start";
import StudentLogin from "./StudentLogin";
import EmployeeDetail from "./component/EmployeeDetail";
import { useEffect } from "react";
import Student from "./component/Student";
import AddStudent from "./component/AddStudent";
import Calendar from "./component/Calender.jsx"; // Import Calendar component
import EditCourse from "./component/EditCourse.jsx";

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
          <Route path="/dashboard/Calendar" element={<Calendar />}></Route>{" "}
          <Route path="/dashboard/profile" element={<Profile />}></Route>
          <Route
            path="/dashboard/addcourse"
            element={<AddCourse />}
          ></Route>{" "}
          <Route
            path="/dashboard/add_employee"
            element={<AddEmployee />}
          ></Route>{" "}
          {/* <Route
            path="/dashboard/edit_employee/:id"
            element={<EditEmployee />}
          ></Route>{" "} */}
          <Route path="/dashboard/add_student" element={<AddStudent />}></Route>{" "}
          <Route path="/dashboard/edit_course" element={<EditCourse />}></Route>{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

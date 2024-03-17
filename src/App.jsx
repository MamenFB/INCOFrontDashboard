import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import Employee from "./component/Employee";
import Teacher from "./component/Teacher";
import Course from "./component/Course";
import Profile from "./component/Profile";
import AddCourse from "./component/AddCourse";
import AddEmployee from "./component/AddEmployee";
import EditEmployee from "./component/EditEmployee";
import AddTeacher from "./component/AddTeacher";
import EditTeacher from "./component/AddTeacher";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Start from "./component/Start";
import EmployeeLogin from "./EmployeeLogin";
import EmployeeDetail from "./component/EmployeeDetail";
// import TeacherLogin from "./TeacherLogin";
// import TeacherDetail from "./component/TeacherDetail";
import CourseGradesChart from "./component/CourseGradesChart";
import CalendarComponent from "./component/CalendarComponent";




const data = [
  { curso: "Matemáticas", promedio: 85 },
  { curso: "Historia", promedio: 78 },
  { curso: "Ciencias", promedio: 92 },

];

function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme="dark" position="top-center" />
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/employee_login" element={<EmployeeLogin />}></Route>
        {/* <Route path="/TeacherLogin" element={<TeacherLogin />}></Route> */}
        {/* <Route path="/TeacherDetail" element={<TeacherDetail />}></Route> */}
        <Route path="/employee_detail/:id" element={<EmployeeDetail />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/dashboard/employee" element={<Employee />}></Route>
          <Route path="/dashboard/teacher" element={<Teacher />}></Route>
          <Route path="/dashboard/Course" element={<Course />}></Route>
          <Route path="/dashboard/profile" element={<Profile />}></Route>
          <Route path="/dashboard/CourseGradesChart" element={<CourseGradesChart data={data} />} />
          <Route path="/dashboard/CalendarComponent" element={<CalendarComponent />}></Route>
          <Route path="/dashboard/AddCourse" element={<AddCourse />}></Route>
          <Route path="/dashboard/add_employee" element={<AddEmployee />}></Route>
          <Route path="/dashboard/edit_employee/:id" element={<EditEmployee />}></Route>
          <Route path="/dashboard/add_teacher" element={<AddTeacher />}></Route>
          <Route path="/dashboard/edit_teacher/:id" element={<EditTeacher />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

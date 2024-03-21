import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideBarStudent from "./SideBarStudent";
import StudentProfile from "./StudentProfile";
import Resources from "./Resources";
import Calender from "./Calender";
import Notifications from "./Notifications";
import LineChart from "./LineChart";
import PieChart from "./PieChart";



const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/employee/detail/${id}`)
      .then((result) => {
        setEmployee(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleLogout = () => {
    axios.get("http://localhost:3000/employee/logout").then((result) => {
      if (result.data.Status) {
        navigate("/");
      }
    });
  };

  return (
    <div>
      <div className="p-2 d-flex justify-content-center shadow">
        <h4>INCO Student Dashboard</h4>
      </div>
      
      <div className="container-fluid">
      <div className="d-flex">
        <SideBarStudent />
        <div className="container fluid">
       <StudentProfile/>

       <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="p-3 border">
            <h4>Notifications</h4>
            <div className="small-pie-chart">
            <Notifications/>
            </div>
          </div>
        </div>
      </div>
    </div>

       

       <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="p-3 border">
            <h4>Pie Chart</h4>
            <div className="small-chart">
              <PieChart />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 border">
            <h4>Line Chart</h4>
            <div className="small-chart">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="p-3 border">
            <h4>Calendar</h4>
            <div className="small-pie-chart">
            <Calender />
            </div>
          </div>
        </div>
      </div>
    </div>
      
       
       <Resources/>
      </div>
      </div>
     
      </div>
    

     
    </div>
  );
};

export default EmployeeDetail;

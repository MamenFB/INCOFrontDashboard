import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentProfile from "./StudentProfile";
import Resources from "../Resources";
import Calender from "../Calender";
import Notifications from "../Notifications";
import StudentLineChart from "./StudentLineChart";
import StudentPieChart from "./StudentPieChart";
import Schedule  from "../Scheduler";
import { Link } from 'react-router-dom';




const StudentDetail = () => {
  const [employee, setStudent] = useState({});
  const [editedAddress, setEditedAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/student/detail/${id}`)
      .then((result) => {
        setStudent(result.data[0]);
        setEditedAddress(result.data[0].address);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleLogout = () => {
    axios.get("http://localhost:3000/student/logout").then((result) => {
      if (result.data.Status) {
        navigate("/");
      }
    });
  };


 
  

  return (
    <div>
    <div className="p-2 d-flex justify-content-center shadow custom-background">
      <span className="fs-5 fw-bolder d-done d-sm-inline">
        <img
          src="../../public/Images/incologosinbackg.svg"
          alt="Logo INCO"
          className="mx-auto d-block logologin"
          style={{ width: "30%" }}
        />
      </span>
    </div>
    
    <div className="container-fluid">
      <div className="d-flex">
        <div className="container fluid">
          <StudentProfile/>
          
            <div className="row">
              <div className="col-md-6 chart" >
                <div className="p-3 border">
                  <h4>Desarrollo del Curso</h4>
                  <div className="small-chart">
                    <StudentPieChart />
                  </div>
                </div>
              </div>
              <div className="col-md-6 chart">
                <div className="p-3 border">
                  <h4>Evaluaciones</h4>
                  <div className="small-chart">
                    <StudentLineChart />
                  </div>
                </div>
              </div>
            </div>
                <div className="p-3 border">
                  <h4>Calendar</h4>
                  <div className="small-pie-chart">
                    <Schedule />
                  </div>
                </div>
            
          
          
          <Resources/>
        </div>
      </div>
    </div>
  </div>
  
  );
};


export default StudentDetail;

// Profile.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/employee', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUserData(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching user profile data:', error);
      });
    } else {
      // El usuario no ha iniciado sesión, manejar este caso según tus necesidades
    }
  }, []);

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      {userData ? (
        <div>
          <p>ID: {userData.userid}</p>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Profile;

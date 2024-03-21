import React, { useState } from 'react';
//import './Notification.css'; // Estilos CSS para las notificaciones

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Función para agregar una nueva notificación
  const addNotification = (message, type) => {
    const newNotification = { message, type };
    setNotifications([...notifications, newNotification]);

  };

  // Función para eliminar una notificación
  const removeNotification = (notificationToRemove) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification !== notificationToRemove
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div className="notification-container">
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`notification notification-${notification.type}`}
          onClick={() => removeNotification(notification)}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notifications;

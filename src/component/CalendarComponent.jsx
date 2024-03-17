// Importaciones necesarias
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import 'react-calendar/dist/Calendar.css';
import '../css/CalendarComponent.css'; // Asegúrate de que la ruta aquí es correcta

// Componente principal
const CalendarComponent = () => {
  const [value, setValue] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState({});
  const [eventTitle, setEventTitle] = useState('');

  // Maneja el cambio de selección de fecha en el calendario
  const onChange = (nextValue) => {
    setValue(nextValue);
    setIsModalOpen(true);
  };

  // Maneja la adición de un nuevo evento
  const handleAddEvent = (e) => {
    e.preventDefault();
    const eventDate = value.toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
    setEvents({ ...events, [eventDate]: [...(events[eventDate] || []), eventTitle] });
    setIsModalOpen(false);
    setEventTitle('');
  };

  return (
    <div>
      <Calendar onChange={onChange} value={value} />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Detalle del Evento"
      >
        <h2>Añadir Evento</h2>
        <form onSubmit={handleAddEvent}>
          <input
            type="text"
            placeholder="Título del Evento"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
          <button type="submit">Guardar Evento</button>
        </form>
        <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
      </Modal>

      {/* Opcional: Mostrar eventos debajo del calendario para la fecha seleccionada */}
      <div>
        <h3>Eventos</h3>
        {(events[value.toISOString().split('T')[0]] || []).map((event, index) => (
          <div key={index}>{event}</div>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;

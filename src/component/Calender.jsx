import React, { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Initialize localizer for React Big Calendar
const localizer = momentLocalizer(moment);

const Calendar = () => {
  // State to manage events
  const [events, setEvents] = useState([
    {
      id: 0,
      title: "Event 1",
      start: new Date(2024, 2, 19, 10, 0),
      end: new Date(2024, 2, 19, 12, 0),
    },
    {
      id: 1,
      title: "Event 2",
      start: new Date(2024, 2, 20, 13, 0),
      end: new Date(2024, 2, 20, 15, 0),
    },
  ]);

  // Event handler for adding new events
  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  // Event handler for updating events
  const handleUpdateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
  };

  // Event handler for deleting events
  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  // Event handler for event drag and drop
  const handleEventDrop = ({ event, start, end }) => {
    const updatedEvent = { ...event, start, end };
    handleUpdateEvent(updatedEvent);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <div style={{ height: 500 }}>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ margin: "20px" }}
          selectable
          onSelectSlot={(slotInfo) => console.log(slotInfo)}
          onSelectEvent={(event) => console.log(event)}
          onEventDrop={handleEventDrop}
        />
      </div>
    </div>
  );
};

export default Calendar;

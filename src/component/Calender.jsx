import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Initialize localizer for React Big Calendar
const localizer = momentLocalizer(moment);

const events = [
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
];

const Calendar = () => {
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
        />
      </div>
    </div>
  );
};

export default Calendar;

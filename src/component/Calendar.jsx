import React, { useState, useEffect } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { google } from 'googleapis';

// Inicializa el localizador para el React Big Calendar
const localizer = momentLocalizer(moment);

/**
 * Calendar component that fetches events from the Google Calendar API and displays them in a React Big Calendar component.
 * 
 * Uses the googleapis library to authenticate with OAuth2 and call the Google Calendar API. Fetches the events from the user's primary calendar.
 * 
 * State is used to store the events fetched from the API. The useEffect hook is used to fetch the events on initial component mount.
 * 
 * The BigCalendar component is configured and the events state is passed to it to display the calendar.
 */
const Calendar = () => {
    // Estado para gestionar los eventos
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Tu ID de cliente, secreto de cliente y URL de redirección
        const CLIENT_ID = "TU_ID_DE_CLIENTE";
        const CLIENT_SECRET = "TU_SECRETO_DE_CLIENTE";
        const REDIRECT_URL = "TU_URL_DE_REDIRECCION";

        const oauth2Client = new google.auth.OAuth2(
            CLIENT_ID,
            CLIENT_SECRET,
            REDIRECT_URL
        );
        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

        calendar.events.list({
            calendarId: 'primary',
            timeMin: new Date().toISOString(),
        }).then((response) => {
            console.log(response.data);
            // Actualiza el estado con los eventos obtenidos
            setEvents(response.data.items);
        }).catch((error) => {
            console.error('Error al obtener eventos:', error);
        });
    }, []);

    return (
        <div>
            <h2>Calendario</h2>
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
                />
            </div>
        </div>
    );
};

export default Calendar;

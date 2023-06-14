import React, { useState, useEffect } from 'react';
import { Scheduler, useArrayState } from '@cubedoodl/react-simple-scheduler';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Calendar = () => {
  const [bookings, setBookings] = useState([]);
  const [selected, setSelected] = useState(new Date());
  const [events, setEvents, addEvent] = useArrayState();

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get('http://localhost:3001/booking');
      setBookings(response.data);
    };

    fetchBookings();
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper>
        <Scheduler
          events={events}
          selected={selected}
          setSelected={setSelected}
          onRequestAdd={(evt) => addEvent(evt)}
          onRequestEdit={(evt) => alert('Edit element requested')}
        />
      </Paper>
    </LocalizationProvider>
  );
};

export default Calendar;

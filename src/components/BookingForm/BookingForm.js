import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import axios from 'axios';

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    employee_id: '',
    client_id: '',
    service_id: '',
    date: '',
    time: '',
    status: 'scheduled',
  });

  const handleChange = (event) => {
    setBookingData({ ...bookingData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3001/booking', bookingData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="employee_id"
            label="Employee ID"
            value={bookingData.employee_id}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="client_id"
            label="Client ID"
            value={bookingData.client_id}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="service_id"
            label="Service ID"
            value={bookingData.service_id}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="date"
            label="Date"
            type="date"
            value={bookingData.date}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="time"
            label="Time"
            type="time"
            value={bookingData.time}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Book
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BookingForm;

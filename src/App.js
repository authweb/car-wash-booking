import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import {
  BookingForm,
  ServiceList,
  ClientList,
  EmployeeList,
  Sidebar,
  Header,
  Calendar,
} from './components/';

const App = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Routes>
            <Route exact path="/" element={<Calendar />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/clients" element={<ClientList />} />
            <Route path="/services" element={<ServiceList />} />
            <Route path="/booking" element={<BookingForm />} />
          </Routes>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;

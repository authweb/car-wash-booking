import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axios.get('http://localhost:3001/employees');
      setEmployee(response.data);
    };

    fetchEmployees();
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Position</TableCell>
          <TableCell>Contact Info</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>{employee.id}</TableCell>
            <TableCell>{employee.name}</TableCell>
            <TableCell>{employee.position}</TableCell>
            <TableCell>{employee.contact_info}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EmployeeList;

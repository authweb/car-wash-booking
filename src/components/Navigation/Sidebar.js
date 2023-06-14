import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { Calendar } from '@cubedoodl/react-simple-scheduler';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import { People, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Sidebar = () => {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState(new Date());

  useEffect(() => {
    // измените этот URL на URL вашего API
    const fetchEmployees = async () => {
      const response = await axios.get('http://localhost:3001/employees');
      setEmployees(response.data);
    };

    fetchEmployees();
  }, []);
  return (
    <List>
      <Calendar views={['day']} selected={selected} setSelected={setSelected} />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <ListItem button>
            <ListItemIcon>
              <ContactsRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Сотрудники" />
          </ListItem>
        </AccordionSummary>
        <AccordionDetails>
          <List component="div" disablePadding>
            {employees.map((employee) => (
              <ListItem button component={Link} to={`/employees/${employee.id}`} key={employee.id}>
                <ListItemText primary={employee.name} />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <ListItem button>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Клиенты" />
          </ListItem>
        </AccordionSummary>
        <AccordionDetails>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/clients/">
              <ListItemText primary="Клиенсткая база" />
            </ListItem>
            <ListItem button component={Link} to="/clients/category">
              <ListItemText primary="Категории Клиентов" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <ListItem button>
        <ListItemIcon>
          <SettingsApplicationsRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Услуги" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Настройки" />
      </ListItem>
    </List>
  );
};

export default Sidebar;

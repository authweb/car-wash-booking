const express = require('express');
const router = express.Router();
const connection = require('./config/server');

// Получение всех клиентов
router.get('/booking', (req, res) => {
  connection.query('SELECT * FROM booking', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Добавление нового клиента
router.post('/booking', (req, res) => {
  const { employee_id, client_id, service_id, date, time, status } = req.body;
  connection.query(
    'INSERT INTO booking ( employee_id, client_id, service_id, date, time, status ) VALUES (?, ?, ?, ?, ?, ?)'[
      (employee_id, client_id, service_id, date, time, status)
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    },
  );
});

// Обновление информации о клиенте
router.put('/booking/:id', (req, res) => {
  const { employee_id, client_id, service_id, date, time, status } = req.body;
  connection.query(
    'UPDATE booking SET employee_id = ?, client_id = ?, service_id = ?, date = ?, time = ?, status = ? WHERE id = ?'[
      (employee_id, client_id, service_id, date, time, status, req.params.id)
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    },
  );
});

// Удаление клиента
router.delete('/booking/:id', (req, res) => {
  connection.query('DELETE FROM booking WHERE id = ?'[req.params.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const connection = require('./config/server');

// Получение всех клиентов
router.get('/service_supplies', (req, res) => {
  connection.query('SELECT * FROM service_supplies', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Добавление нового клиента
router.post('/service_supplies', (req, res) => {
  const { service_id, name, quantity, cost } = req.body;
  connection.query(
    'INSERT INTO service_supplies ( service_id, name, quantity, cost ) VALUES (?, ?, ?, ?)'[
      (service_id, name, quantity, cost)
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
router.put('/service_supplies/:id', (req, res) => {
  const { service_id, name, quantity, cost } = req.body;
  connection.query(
    'UPDATE service_supplies SET service_id = ?, name = ?, quantity = ?, cost = ?, WHERE id = ?'[
      (service_id, name, quantity, cost, req.params.id)
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
router.delete('/service_supplies/:id', (req, res) => {
  connection.query('DELETE FROM service_supplies WHERE id = ?'[req.params.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;

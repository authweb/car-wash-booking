const express = require('express');
const router = express.Router();
const connection = require('./config/server');

// Получение всех клиентов
router.get('/services', (req, res) => {
  connection.query('SELECT * FROM services', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// Добавление нового клиента
router.post('/services', (req, res) => {
  const { name, description, price, duration } = req.body;
  connection.query(
    'INSERT INTO services ( name, description, price, duration ) VALUES (?, ?, ?, ?)'[
      (name, description, price, duration)
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
router.put('/services/:id', (req, res) => {
  const { name, description, price, duration } = req.body;
  connection.query(
    'UPDATE services SET name = ?, description = ?, price = ?, duration = ?, WHERE id = ?'[
      (name, description, price, duration, req.params.id)
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
router.delete('/services/:id', (req, res) => {
  connection.query('DELETE FROM services WHERE id = ?'[req.params.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;

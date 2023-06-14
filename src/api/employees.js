const express = require('express');
const router = express.Router();
const connection = require('./config/server');

// Получение всех клиентов
router.get('/employees', (req, res) => {
  connection.query('SELECT * FROM employees', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Добавление нового клиента
router.post('/employees', (req, res) => {
  const { name, position, contact_info } = req.body;
  connection.query(
    'INSERT INTO employees (name, position, contact_info) VALUES (?, ?, ?)'[
      (name, position, contact_info)
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
router.put('/employees/:id', (req, res) => {
  const { name, position, contact_info } = req.body;
  connection.query(
    'UPDATE employees SET name = ?, position = ?, contact_info = ? WHERE id = ?'[
      (name, position, contact_info, req.params.id)
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
router.delete('/employees/:id', (req, res) => {
  connection.query('DELETE FROM employees WHERE id = ?'[req.params.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;

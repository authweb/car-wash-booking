const express = require('express');
const router = express.Router();
const connection = require('./config/server');

// Получение всех клиентов
router.get('/', (req, res) => {
  connection.query('SELECT * FROM clients', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// Добавление нового клиента
router.post('/', (req, res) => {
  const { name, contact_info } = req.body;
  connection.query(
    'INSERT INTO clients (name, contact_info) VALUES (?, ?)',
    [name, contact_info],
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
router.put('/:id', (req, res) => {
  const { name, contact_info } = req.body;
  connection.query(
    'UPDATE clients SET name = ?, contact_info = ? WHERE id = ?',
    [name, contact_info, req.params.id],
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
router.delete('/:id', (req, res) => {
  connection.query('DELETE FROM clients WHERE id = ?', [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;

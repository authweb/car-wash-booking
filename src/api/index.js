const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const dashRoutes = require('./routes/dashRoutes');

const app = express();
dotenv.config();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.use(cors());
app.use(express.json());

app.use('/api', dashRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Сервер работает на порту ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

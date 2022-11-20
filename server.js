const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./database');
const app = express();
dotenv.config({ path: '.env' });

app.use(express.json());
connectDatabase();
const PORT = process.env.PORT || 4002;

//imports routes
const employeeRoutes = require('./route/employeeRoute');
app.use('/', employeeRoutes);

app.get('/', (req, res) => {
  res
    .status(200)
    .json(
      'Hello, I am Arjun Dilip Laxane from Guvi-Zen Institute. API: https://vivriticapital.herokuapp.com/'
    );
});

app.listen(PORT, () => {
  console.log(`Server has started pn http://localhost:${PORT}`);
});

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
      'Hello, I am Arjun Dilip Laxane from Guvi-Zen Institute. \n\n\n\n Registeration API: https://vivriticapital.herokuapp.com/register , \n\n\n List of all employees API: https://vivriticapital.herokuapp.com/employees , \n\n\n Update and Delete API: https://vivriticapital.herokuapp.com/employee/:id'
    );
});

app.listen(PORT, () => {
  console.log(`Server has started pn http://localhost:${PORT}`);
});

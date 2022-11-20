const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./database');
const app = express();
dotenv.config({ path: '.env' });

app.use(express.json());
connectDatabase();
const PORT = process.env.PORT;

//imports routes
const employeeRoutes = require('./route/employeeRoute');
app.use('/api/v1', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server has started pn http://localhost:${PORT}`);
});

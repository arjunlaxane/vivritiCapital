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
app.use('/api/v1', employeeRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: `
    Employee data : 
     _id (unique for every Employee)
    first_Name
    last_Name
    mobile_Number
    Address
    Departmen
    
    API: https://vivriticapital.herokuapp.com/ 
    
    API Endpoints:

    1. Registration : https://vivriticapital.herokuapp.com/api/v1/register

    2. List of all employees : https://vivriticapital.herokuapp.com/api/v1 
    
    3. Update and Delete employee : https://vivriticapital.herokuapp.com/api/v1/:id
    
    
    `,
  });
});

app.listen(PORT, () => {
  console.log(`Server has started pn http://localhost:${PORT}`);
});

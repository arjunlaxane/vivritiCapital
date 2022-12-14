const express = require('express');
const {
  registerEmployee,
  getAllEmployee,
  updateEmployee,
  deleteEmployee,
} = require('../controller/employeeController');

const router = express.Router();

//CRUD ROUTES

//employee register

router.route('/register').post(registerEmployee);

//get All employees

router.route('/employees').get(getAllEmployee);

// update and delete employee

router.route('/employee/:id').put(updateEmployee).delete(deleteEmployee);

module.exports = router;

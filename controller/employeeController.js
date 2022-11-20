const Employee = require('../model/employeeModel');

//CRUD OPERATION

//CREATE-REGISTER

exports.registerEmployee = async (req, res) => {
  try {
    const { first_Name, last_Name, mobile_Number, Address, Department } =
      req.body;

    const employee = await Employee.create({
      first_Name,
      last_Name,
      mobile_Number,
      Address,
      Department,
    });

    res.status(201).json(employee);
  } catch (err) {
    console.log(err);
  }
};

//READ-GET

exports.getAllEmployee = async (req, res) => {
  try {
    const allEmployees = await Employee.find();
    res.status(201).json(allEmployees);
  } catch (err) {
    console.log(err);
  }
};

//UPDATE-PUT

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json(updatedEmployee);
  } catch (err) {
    console.log(err);
  }
};

//DELETE

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(201).json({
      message: 'User Deleted Successfully',
    });
  } catch (err) {
    console.log(err);
  }
};

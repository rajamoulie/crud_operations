const EmployeeModel = require('../models/model.employee');

const index = (req, res, next) => {
    EmployeeModel.find()
    .then(response => {
        res.json({response})
    })
    .catch(error => {
        res.json({
            message: 'An error has occured'
        })

    });
}

const show = (req, res, next) => {
    let employeeId = req.body.employeeId;
    EmployeeModel.findById(employeeId)
    .then(response => {
        res.json({response})
    })
    .catch(error => {
        res.json({
            message: 'An error has occured'
        })
    });
}

const store = (req, res, next) => {
    let employeeModel = new EmployeeModel({
        name: req.body.name,
        employeeId: req.body.employeeId,
        designation: req.body.designation,
        age: req.body.age
    });
    employeeModel.save()
    .then(response => {
        res.json({
            message: 'Data saved successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured while saving the data'
        })
    });    
}

const update = (req, res, next) => {
    let employeeId = req.body.employeeId;
    let updatedEmployee = {
        name: req.body.name,
        employeeId: req.body.employeeId,
        designation: req.body.designation,
        age: req.body.age
    }
    EmployeeModel.findByIdAndUpdate(employeeId, {$set: updatedEmployee})
    .then(() => {
        res.json({
            message: 'Updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured while updating'
        })
    })
};

const destroy = (req, res, next) => {
    let employeeId = req.body.employeeId;

    EmployeeModel.finfByIdAndDelete(employeeId)
    .then(() => {
        res.json({
            message: 'Employee deleted successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occurred deleting data'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}

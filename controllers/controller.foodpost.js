const FoodPostModel = require('../models/model.foodpost');

const index = (req, res, next) => {
    FoodPostModel.find()
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
    let contactNumber = req.body.contactNumber;
    FoodPostModel.findById(contactNumber)
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
    let foodPostModel = new FoodPostModel({
        foodSufficientFor: req.body.foodSufficientFor,
        foodType: req.body.foodType,
        foodDelivery: req.body.foodDelivery,
        address: req.body.address,
        pincode: req.body.pincode,
        contactNumber: req.body.contactNumber,
    });
    foodPostModel.save()
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

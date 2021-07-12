const mongoose = require('mongoose');

employeeSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    employeeId : {
        type: Number,
        required : true
    },
    designation : {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    }
});

employeeModel = mongoose.model('EmployeeModel', employeeSchema);

module.exports = employeeModel;
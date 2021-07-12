const mongoose = require('mongoose');

foodPostSchema = mongoose.Schema({
    foodSufficientFor : {
        type: Number,
        required: true
    },
    foodType : {
        type: String,
        required : true
    },
    foodDelivery : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    pincode : {
        type: Number,
        required: true
    },
    contactNumber : {
        type: Number,
        required: true
    }
});

foodPostModel = mongoose.model('FoodPostModel', foodPostSchema);

module.exports = foodPostModel;
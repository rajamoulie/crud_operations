const mongoose = require('mongoose');

console.log(process.env.DB_CONNECTION)

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, 
    (error)=>{
    if(!error){
        console.log('Connected to DB successfully!');
    }else{
        console.log('Error connecting to DB!');
    }
})
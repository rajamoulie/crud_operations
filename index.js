console.log('Index.js started')
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv/config')
require('./db')

const employeeRouter = require('../crud_operations/routes/route.employee')
const foodPostRouter = require('../crud_operations/routes/route.foodpost')
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, (error)=>{
    console.log('Server started on port',PORT)
})

app.use(bodyParser.json())
app.use('/api/employee', employeeRouter)
app.use('/api/foodPost', foodPostRouter)
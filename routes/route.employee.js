
const express = require('express')
const EmployeeController = require('../controllers/controller.employee')

router = express.Router()

router.get('/', EmployeeController.index)
router.post('/show', EmployeeController.show)
router.post('/save', EmployeeController.store)
router.post('/update', EmployeeController.update)
router.post('/delete', EmployeeController.destroy)

module.exports = router

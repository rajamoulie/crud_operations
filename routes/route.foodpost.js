
const express = require('express')
const FoodPosteController = require('../controllers/controller.foodpost')

router = express.Router()

router.get('/', FoodPosteController.index)
router.post('/show', FoodPosteController.show)
router.post('/save', FoodPosteController.store)
router.post('/update', FoodPosteController.update)
router.post('/delete', FoodPosteController.destroy)

module.exports = router

const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

//POST em /products vai CRIAR um novo produto
router.post('/login', authController.auth)

module.exports = router
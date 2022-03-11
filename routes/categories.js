const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categoriesController')


//DELETE em /categories/:id EXCLUI os dados da categoria do ID
router.delete('/:id', categoriesController.remove)

//PATCH em /categories/:id ALTERA ALGUNS dados da categoria do ID
router.patch('/:id', categoriesController.patch)

//PUT em /categories/:id ALTERA TODOS os dados da categoria do ID
router.put('/:id', categoriesController.put)

//POST em /categories vai CRIAR um novo categoria
router.post('/', categoriesController.create)

//GET em /categories/:id ==> BUSCA somente a categoria identificada no ID
router.get('/:id', categoriesController.getId)

//GET em /categories ==> BUSCA todas as categorias listadas no banco de dados
router.get('/', categoriesController.get)

module.exports = router
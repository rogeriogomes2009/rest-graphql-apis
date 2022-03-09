const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')


//DELETE em /products/:id EXCLUI os dados do produto do ID
router.delete('/:id', productsController.remove)

//PATCH em /products/:id ALTERA ALGUNS dados do produto do ID
router.patch('/:id', productsController.patch)

//PUT em /products/:id ALTERA TODOS os dados do produto do ID
router.put('/:id', productsController.put)

//POST em /products vai CRIAR um novo produto
router.post('/', productsController.create)

//GET em /products/:id ==> BUSCA somente o produto identificado no ID
router.get('/:id', productsController.getId)

//GET em /products ==> BUSCA todos os produtos listados no banco de dados
router.get('/', productsController.get)

//POSTimage em /images vai ADICIONAR imagens em um produto
router.post('/:id/images', productsController.createImage)

//DELETE em /images/:id vai EXCLUIR imagens de um produto
router.delete('/:productId/images/:id', productsController.removeImage)

module.exports = router
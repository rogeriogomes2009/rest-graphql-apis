const db = require('../db')
const Product = require('../models/product')(db)
const jwt = require('jsonwebtoken')

const remove = async (req, res) => {
  await Product.remove(req.params.id)
  res.send({
    success: true
  })
}

const removeImage = async (req, res) => {
  await Product.removeImage (req.params.productId, req.params.id)
  res.send({
    success: true
  })
}

const patch = async (req, res) => {
  const oldProduct = await Product.findById(req.params.id)
  if(!oldProduct){
   return res.send({
      success: false,
      message:'Product not found'
    })
  }
  if(req.body.product){
    oldProduct.product = req.body.product
  }
  if(req.body.price){
    oldProduct.price = req.body.price
  }
  await Product.update(req.params.id, [oldProduct.product, oldProduct.price])
  if(req.body.categories){ //atualizar categories
    try{
    await Product.updateCategories(req.params.id, req.body.categories)
  }catch(err){
    return res.send({
      success: false,
      message:'Categories not found'
    })
  }
}
  res.send({
    success: true
  })
}

const put = async (req, res) => {
  const { product, price } = req.body
  await Product.update(req.params.id, [product, price])
  res.send({
    success: true
  })
}

const create = async (req, res) => {
const { product, price } = req.body
  await Product.create ([product, price])
  res.send({
    success: true,
    data: req.body
  })
}

const createImage = async (req, res) => {
  const { description, url } = req.body
    await Product.addImage (req.params.id, [description, url])
    res.send({
      success: true,
      data: req.body
    })
  }

const getId = async (req, res) => {
  console.log(res.locals.user)
  const product = await Product.findById(req.params.id)
  res.send(product)
}

const get = async (req, res) => {
  //quem fez essa requisição???
  console.log(res.locals.user)
   let products = null
  if(req.query.categoryId){
    products = await Product.findAllByCategory(req.query.categoryId)
  }else{
    products = await Product.findAll()
  }
  res.send({
    products
  }) 
}


module.exports = {
  remove,
  removeImage,
  patch,
  put,
  create,
  createImage,
  getId,
  get
}
const db = require('../db')
const Category = require('../models/category')(db)

const remove = async (req, res) => {
  await Category.remove(req.params.id)
  res.send({
    success: true
  })
}

const patch = async (req, res) => {
  const oldCategory = await Category.findById(req.params.id)
  if(!oldCategory){
   return res.send({
      success: false,
      message:'Category not found'
    })
  }
  if(req.body.category){
    oldCategory.product = req.body.category
  }
  
  await Category.update(req.params.id, [oldCategory.category])
  if(req.body.categories){ //atualizar categories
    try{
    await Category.updateCategory(req.params.id, req.body.category)
  }catch(err){
    return res.send({
      success: false,
      message:'Category not found'
    })
  }
}
  res.send({
    success: true
  })
}

const put = async (req, res) => {
  const { category } = req.body
  await Category.update(req.params.id, [category])
  res.send({
    success: true
  })
}

const create = async (req, res) => {
const { category } = req.body
  await Category.create ([category])
  res.send({
    success: true,
    data: req.body
  })
}

const getId = async (req, res) => {
  console.log(res.locals.user)
  const category = await Category.findById(req.params.id)
  res.send(category)
}

const get = async (req, res) => {
  console.log(res.locals.user)
  let categories = null
  if(req.query.categoryId){
    categories = await Category.findAllByCategory(req.query.categoryId)
  }else{
    categories = await Category.findAll()
  }
  res.send({
    categories
  })
}

module.exports = {
  remove,
  patch,
  put,
  create,
  getId,
  get
}
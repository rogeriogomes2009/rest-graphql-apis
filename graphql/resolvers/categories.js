const db = require('../../db')
const Category = require('../../models/category')(db)
const { ApolloError } = require('apollo-server-express')

const createCategory = async (context,{input}) => {
  const { category } = input
  await Category.create ([category])
  return{
    category
  }
}

const deleteCategory = async (context,{id}) => {
  await Category.remove(id)
  return true
}

const updateCategory = async (context,{id, input}) => {
  const oldCategory = await Category.findById(id)
  if(!oldCategory){
   throw new ApolloError ('Category not found!')
  }
  if(input.category){
    oldCategory.category = input.category
  }
  await Category.update(id, [oldCategory.category])
  if(input.categories){ //atualizar categories
    try{
    await Category.updateCategories(id, input.categories)
  }catch(err){
    throw new ApolloError ('Category not found!')
  }
} 
return oldCategory
}
const getAllCategories = async (context, {filter} ) => {
  let categories = null
  if(filter && filter.categoryId){
    categories = await Category.findAllByCategory(filter.categoryId)
  }else{
    categories = await Category.findAll()
  }
  return categories
}

module.exports = {
  createCategory,
  deleteCategory,
  updateCategory,
  getAllCategories
}
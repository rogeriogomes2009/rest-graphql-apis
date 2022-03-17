const { AuthenticationError } = require('apollo-server-express')

const { getAllProducts, createProduct, deleteProduct, updateProduct, createImageOnProduct, deleteImageOnProduct} = require ('./products')
const { getAllCategories, createCategory, deleteCategory, updateCategory,} = require ('./categories')

//HOF - High Order Function
const needsAuth = resolver => {
  return async(parent, args, context) => {
    if(!context.user){
      throw new AuthenticationError ('Needs Authentication')
   }
   return resolver (parent, args, context)
  }
}
  

const resolvers = {
  //QUERY ==> Busca dados
  Query: {
    getAllProducts: needsAuth(getAllProducts),
    getAllCategories: needsAuth(getAllCategories)
  },
  //MUTATION ==> Altera, inclui, exclui dados
  Mutation: {
    createProduct,
    deleteProduct,
    updateProduct,
    createImageOnProduct,
    deleteImageOnProduct,
    createCategory,
    deleteCategory,
    updateCategory
}
}
module.exports = resolvers
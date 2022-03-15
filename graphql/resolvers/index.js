const { getAllProducts, createProduct, deleteProduct, updateProduct, createImageOnProduct, deleteImageOnProduct} = require ('./products')
const { getAllCategories, createCategory, deleteCategory, updateCategory,} = require ('./categories')

const resolvers = {
  //QUERY ==> Busca dados
  Query: {
    getAllProducts,
    getAllCategories
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
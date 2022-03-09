const { getAllProducts, createProduct, deleteProduct, updateProduct, createImageOnProduct, deleteImageOnProduct} = require ('./products')

const resolvers = {
  //QUERY ==> Busca dados
  Query: {
    getAllProducts
  },
  //MUTATION ==> Altera, inclui, exclui dados
  Mutation: {
    createProduct,
    deleteProduct,
    updateProduct,
    createImageOnProduct,
    deleteImageOnProduct
}
}
module.exports = resolvers
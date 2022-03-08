const { getAllProducts, createProduct} = require ('./products')

const resolvers = {
  //QUERY ==> Busca dados
  Query: {
    getAllProducts
  },
  //MUTATION ==> Altera, inclui, exclui dados
  Mutation: {
    createProduct
}
}
module.exports = resolvers
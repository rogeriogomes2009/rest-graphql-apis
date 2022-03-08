const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')
const graphqlServer = require('./graphql')

//RESTFUL
app.use(bodyParser.json())
app.use(routes)

//GRAPHQL
graphqlServer.applyMiddleware({ app })

//ACCESS PORT
app.listen(3001, (err) => {
  if(err){
    console.log('Not possible listen on port 3001')
  }else{
    console.log('Server running on port 3001')
  }
} )

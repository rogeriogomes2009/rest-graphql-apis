const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.json())

app.use(routes)

app.listen(3001, (err) => {
  if(err){
    console.log('Not possible listen on port 3001')
  }else{
    console.log('Server running on port 3001')
  }
} )

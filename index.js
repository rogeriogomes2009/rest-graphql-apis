const express = require ('express')
const app = express()

app.get('/products', (req, res) => {
  res.send({
    products:['ALL PRODUCTS']
  })
})

app.listen(3000, (err) => {
  if(err){
    console.log('Not possible listen on port 3000')
  }else{
    console.log('Server running on port 3000')
  }
} )

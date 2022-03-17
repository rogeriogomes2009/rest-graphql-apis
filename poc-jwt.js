const jwt = require('jsonwebtoken')
const secret = 'Melancia@123'
const token = jwt.sign({
  user: {
    id: 1,
    name: 'Rogerio'
  }
}, secret, { expiresIn: '2 days' })

try{
jwt.verify(token, secret)
}catch (err) {
  console.log(err)
}
console.log(token)
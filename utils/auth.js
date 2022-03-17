const jwt = require('jsonwebtoken')

const needsAuth = (req, res, next) => {
  console.log('Passou no Middleware')
  if(req.headers && req.headers.authorization){
    const header = req.headers.authorization
    const headerParts = header.split(' ')
    const secret = 'Melancia@123'
    try{
    const payload = jwt.verify(headerParts[1], secret)
    res.locals.user = payload.user
    return  next()
    }catch(err){}
    }
 res.send({
   error: true,
   message: 'NEEDS AUTH'
 })
}
module.exports = needsAuth
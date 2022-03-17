const jwt = require('jsonwebtoken')

const secret = 'Melancia@123'

const USERS = {
  'rogerio.gomes2009@gmail.com': 'Melancia@123'
}

const auth = async (req, res) => {
  const { user, passwd } = req.body

  //To Do : Checar no banco de dados
  if(USERS[user] && USERS[user] === passwd){
    const token = jwt.sign({
      user
    }, secret, { expiresIn: '2 days' }) 
    return res.send({
      success: true,
      token
    })
  }
  res.send({
    success: false,
    message: 'WRONG CREDENTIALS'
  })
}


module.exports = {
  auth
}
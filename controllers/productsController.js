
const remove = (req, res) => {
  res.send({
    success: true,
    data: 'id' + req.params.id
  })
}

const patch = (req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: req.body
  })
}

const put = (req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: req.body
  })
}

const create = (req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: req.body
  })
}

const getId = (req, res) => {
  res.send({
    name: 'Product 1'
  })
}

const get = (req, res) => {
  res.send({
    products:['ALL PRODUCTS']
  })
}

module.exports = {
  remove,
  patch,
  put,
  create,
  getId,
  get
}
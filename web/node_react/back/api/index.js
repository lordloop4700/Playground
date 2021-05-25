const resp = require('./response')

const hi = (req, res, next) => {
  return resp(res, 200, "Hello")
}

module.exports = {
  hi
}
require('dotenv').config()

const checkToken = (req, res, next) => {
  let token = req.headers['authorization']

  const handleError = () => {
    return res.status(403).json({ success: false, msg: 'Token is not valid' })
  }

  if (!token) {
    handleError()
    return
  }

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length)
  } else {
    handleError()
  }

  if (token === process.env.BEARER) {
    next()
  } else {
    handleError()
  }
}

module.exports = checkToken

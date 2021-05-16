const jwt = require('jsonwebtoken')

exports.generateToken = (id) => {
    const token = jwt.sign({ _id: id.toString() }, process.env.JWT_SECRET)

    return token
}

exports.decodeToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}
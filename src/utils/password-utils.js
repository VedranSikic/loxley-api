const bcrypt = require('bcryptjs')

const encryptPassword = async(password) => await bcrypt.hash(password, 8)

const isMatch = async(password, encryptedPassword) => await bcrypt.compare(password, encryptedPassword)

module.exports = {
    encryptPassword,
    isMatch
}
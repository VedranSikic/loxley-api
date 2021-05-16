const { validate } = require('./validate-register-service')
const { create, update } = require('../../models/user-repository')
const { generateToken } = require('../../utils/token')
const { encryptPassword } = require('../../utils/password-utils')

exports.register = async(user) => {
    const errors = validate(user)
    if (errors && errors.length) {
        throw Error(errors.toString())
    }

    user.password = await encryptPassword(user.password)

    const createdUser = await create(user)

    const token = generateToken(createdUser._id)

    const updatedUser = await update({ _id: createdUser._id }, { tokens: [{ token }] })

    return token
}
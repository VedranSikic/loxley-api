const { find, update } = require('../../models/user-repository')
const { generateToken } = require('../../utils/token')
const { isMatch } = require('../../utils/password-utils')

const errors = {
    invalidLoginData: 'Invalid login data',
    unknownError: 'Unknown error occured'
}

exports.login = async(email, password) => {
    const user = await find({ email })

    if (!user) {
        throw Error(errors.invalidLoginData)
    }

    if (!isMatch(password, user.password)) {
        throw Error(errors.invalidLoginData)
    }

    const token = generateToken(user._id)

    const updatedUser = await update({ _id: user._id }, { tokens: [{ token }] })

    if (!updatedUser) {
        console.log("Failed to udpate user")
        throw Error(errors.invalidLoginData)
    }

    return token
}
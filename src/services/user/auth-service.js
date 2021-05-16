const { decodeToken } = require('../../utils/token')
const { find } = require('../../models/user-repository')

module.exports = async(token) => {
    const decoded = decodeToken(token)
    const user = await find({ _id: decoded._id, 'tokens.token': token.toString() })

    if (!user) {
        throw Error()
    }

    return user
}
const authUser = require('../services/user/auth-service')

module.exports = async(req, res, next) => {
    if (!req.header('Authorization')) {
        return res.status(401).send({ error: 'Please authenticate.' })
    }
    try {
        const token = req.header('Authorization').replace('Bearer ', '')

        req.user = await authUser(token)

        next()
    } catch (e) {
        res.status(401).send({ error: 'Authentication token not valid' })
    }
}
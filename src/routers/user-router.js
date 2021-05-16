const express = require('express')
const router = new express.Router()

const { register } = require('../services/user/register-service')
const { login } = require('../services/user/login-service')

router.post('/register', async(req, res) => {
    try {
        const token = await register(req.body);
        res.send({ token });
    } catch (e) {
        res.status(401).send({ error: e.message })
    }
})

router.post('/login', async(req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.send({ token });
    } catch (e) {
        res.status(401).send({ error: e.stack })
    }
})

module.exports = router
const express = require('express')

const auth = require('../middleware/authentication')

const { createStock } = require('../services/stock/create-stock-service')
const { getStocks } = require('../services/stock/get-stocks-service')

const router = new express.Router()

router.post('/stock/create', auth, async (req, res) => {
    try {
        const stock = await createStock(req.body)
        res.send({ stock })
    } catch (e) {
        res.status(404).send({ error: e.message })
    }
})

router.get('/stock/:id', auth, async (req, res) => {
    try {
        const stocks = await getStocks({ _id: req.params.id })
        res.send( stocks[0] )
    } catch (e) {
        res.status(404).send({ error: e.stack })
    }
})

router.get('/stock', auth, async (req, res) => {
    try {
        const stocks = await getStocks()
        res.send({ stocks })
    } catch (e) {
        res.status(404).send({ error: e.stack })
    }
})

module.exports = router
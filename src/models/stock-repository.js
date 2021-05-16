const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const Stock = mongoose.model('Stock', stockSchema)
exports.Stock = Stock


exports.create = async(stock) => {
    const dbStock = new Stock(stock)
    await dbStock.save()
    return dbStock
}

exports.get = async(filter) => {
    return await Stock.find(filter)
}

exports.delete = async(filter) => {
    return await Stock.deleteMany(filter)
}
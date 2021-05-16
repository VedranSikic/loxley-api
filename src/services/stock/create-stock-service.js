const { create } = require('../../models/stock-repository')

exports.createStock = async(stock) => {
    const createdStock = await create(stock)

    if (!createdStock) {
        throw Error('Invalid stock data')
    }

    return createdStock
}
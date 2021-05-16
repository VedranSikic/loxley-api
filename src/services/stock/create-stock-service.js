const { create } = require('../../models/stock-repository')

exports.createStock = async (userId, stock) => {
    const createdStock = await create({ owner: userId, ...stock })

    if (!createdStock) {
        throw Error('Invalid stock data')
    }

    return createdStock
}
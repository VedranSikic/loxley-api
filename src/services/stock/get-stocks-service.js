const { get } = require('../../models/stock-repository')

exports.getStocks = async(filter) => {
    return await get(filter)
}
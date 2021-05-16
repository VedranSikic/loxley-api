const { get } = require('../../models/stock-repository')

exports.getStocks = async (userId, filter) => {
    console.log("Userid", userId)
    return await get({ owner: userId, ...filter })
}
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

const User = mongoose.model('User', userSchema)
exports.User = User


exports.create = async(user) => {
    const dbUser = new User(user)
    await dbUser.save()
    return dbUser
}

exports.find = async(filter) => {
    return await User.findOne(filter)
}

exports.update = async(filter, update) => {
    return await User.findOneAndUpdate(filter, update, { new: true })
}
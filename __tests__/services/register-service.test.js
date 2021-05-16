const { register } = require('../../src/services/user/register-service')

const { user } = require('../../fixtures/user.fixture')
const { User } = require('../../src/models/user-repository')

require('../../src/db/mongoose')

beforeEach(async() => {
    await User.deleteMany()
})

test('Register user success', async() => {
    await register(user)
})
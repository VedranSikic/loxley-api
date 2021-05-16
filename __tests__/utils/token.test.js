const { ObjectID } = require('mongodb')

const { generateToken, decodeToken } = require('../../src/utils/token')

test('Test token generate and decode cycle', () => {
    const id = new ObjectID()

    const decodedId = decodeToken(generateToken(id))

    expect(id.toString()).toBe(decodedId._id)
})
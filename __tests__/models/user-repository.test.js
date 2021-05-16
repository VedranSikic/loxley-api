const { ObjectID } = require('mongodb')

const { User, create, find, update } = require('../../src/models/user-repository')
const { user } = require('../../fixtures/user.fixture')

require('../../src/db/mongoose')

beforeEach(async() => {
    await User.deleteMany()
})

test('Create user', async() => {
    const createdUser = await create(user)
    expect(createdUser).not.toBe(null)
})

test('Create user fail duplicate email', async() => {
    await create(user)
    await expect(create(user)).rejects.toThrow()
})

test('Find user by email', async() => {
    await new User(user).save();
    const readUser = await find({ email: user.email })
    expect(readUser).not.toBe(null)
    expect(readUser.email).toBe(user.email)
})

test('Find user by id', async() => {
    const createdUser = await new User(user).save();
    const readUser = await find({ _id: createdUser._id })
    expect(readUser).not.toBe(null)
    expect(readUser.email).toBe(user.email)
})

test('Find non existent user', async() => {
    await new User(user).save();
    const readUser = await find({ email: 'another.mail@mail.com' })
    expect(readUser).toBe(null)
})

test('Update user', async() => {
    const updatedEmail = 'jane.doe@gmail.com'
    const createdUser = await new User(user).save();
    const updatedUser = await update({ _id: createdUser._id }, { email: updatedEmail })
    expect(updatedUser.email).toBe(updatedEmail)
})

test('Update user fail non existent user', async() => {
    const updatedEmail = 'jane.doe@gmail.com'
    const createdUser = await new User(user).save();
    const updatedUser = await update({ _id: new ObjectID() }, { email: updatedEmail })
    expect(updatedUser).toBe(null)
})
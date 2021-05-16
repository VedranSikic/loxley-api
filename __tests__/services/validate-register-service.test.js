const { validate, validationErrors } = require('../../src/services/user/validate-register-service')

const { user } = require('../../fixtures/user.fixture')

test('Validate works for correct user', async() => {
    const errors = validate(user)
})

test('Validate email', async() => {
    expect(validate({...user, email: '' })[0]).toBe(validationErrors.email_not_valid)
    expect(validate({...user, email: 'john.doe' })[0]).toBe(validationErrors.email_not_valid)
    expect(validate({...user, email: 'john.doe@mail@mail.com' })[0]).toBe(validationErrors.email_not_valid)
})

test('Validate first name', async() => {
    expect(validate({...user, firstName: '' })[0]).toBe(validationErrors.first_name_not_empty)
})

test('Validate last name', async() => {
    expect(validate({...user, lastName: '' })[0]).toBe(validationErrors.last_name_not_empty)
})

test('Validate password length', async() => {
    expect(validate({...user, password: '' })[0]).toBe(validationErrors.password_length)
    expect(validate({...user, password: '1234567' })[0]).toBe(validationErrors.password_length)
    expect(validate({...user, password: '12345678' })).toStrictEqual([])
})
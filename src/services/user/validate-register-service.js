const validator = require('validator')

const validationErrors = {
    email_not_valid: "Email is not valid",
    first_name_not_empty: "First name shouldn't be empty",
    last_name_not_empty: "Last name shouldn't be empty",
    password_length: "Password should be at least 8 character"
}
exports.validationErrors = validationErrors

exports.validate = ({ email = '', firstName = '', lastName = '', password = '' }) => {
    let errors = []

    if (!validator.isEmail(email)) {
        errors.push(validationErrors.email_not_valid)
    }
    if (validator.isEmpty(firstName)) {
        errors.push(validationErrors.first_name_not_empty)
    }
    if (validator.isEmpty(lastName)) {
        errors.push(validationErrors.last_name_not_empty)
    }
    if (!validator.isLength(password, { min: 8 })) {
        errors.push(validationErrors.password_length)
    }
    return errors
}
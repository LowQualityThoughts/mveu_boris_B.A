const { Schema, model } = require('mongoose')

const User = new Schema({
    Login: {
        type: String,
        uniqued: true,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = model('User', User)
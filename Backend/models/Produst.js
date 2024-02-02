const { Schema, model } = require('mongoose')

const Produst = new Schema({
    header: {
        type: String,
        uniqued: true,
        required: true,
    },
    price: {
        type: Number,
    },
    image: {
        type: String,
    }
})

module.exports = model( 'Produst', Produst )
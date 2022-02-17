const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'nombre de producto obligatorio']
    },
    descripcion: {
        type: String
    },
    precio: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
})

module.exports = model('Producto', ProductoSchema)
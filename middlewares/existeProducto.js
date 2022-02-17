const Producto = require('../models/producto')

const productoExiste = async(nombre = '') => {
    const existeProducto = await Producto.findOne({ nombre })
    if (existeProducto) {
        throw new Error(`el nombre: ${nombre} ya fue ingresado`)
    }
}

module.exports = { productoExiste }
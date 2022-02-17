const Producto = require('../models/producto')

const productosGet = async(req, res) => {

    //obtiene todos los productos
    //const productos = await Producto.find()

    const parametros = { estado: true }
    const [total, productos] = await Promise.all([
        Producto.countDocuments(parametros),
        Producto.find(parametros)
    ])
    res.status(200).json({
        total,
        productos
    })
}

//creacion
const productosPost = async(req, res) => {
    const { nombre, precio, stock } = req.body;
    const producto = new Producto({ nombre, precio, stock })

    await producto.save();

    res.status(200).json({
        msg: 'POST PRODUCTOS',
        producto
    })
}

//actualizacion
const productosPut = async(req, res) => {
    const { id } = req.params
    const { _id, ...resto } = req.body
    const producto = await Producto.findByIdAndUpdate(id, resto)

    res.status(200).json({
        msg: 'PUT PRODCUTOS',
        producto
    })
}

//desactiva
const productosDelete = async(req, res) => {
    const { id } = req.params;
    const producto = await Producto.findByIdAndUpdate(id, { estado: false })

    res.status(200).json({
        msg: 'DESACTIVACION DE PRODUCTO',
        producto
    })
}

module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}
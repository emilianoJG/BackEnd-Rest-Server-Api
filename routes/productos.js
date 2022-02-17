const { Router } = require('express');
const { check } = require('express-validator');
const { productosGet, productosPost, productosPut, productosDelete } = require('../controllers/productos');
const { productoExiste } = require('../middlewares/existeProducto');
const { validarcampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', productosGet);

router.post('/', [
    check('nombre', 'Nombre de producto obligatorio').not().isEmpty(),
    check('nombre').custom(productoExiste),
    validarcampos
], productosPost);

router.put('/:id', productosPut);

router.delete('/:id', productosDelete);

module.exports = router;
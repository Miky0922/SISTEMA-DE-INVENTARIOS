import express from 'express';
const route = express.Router();
import productController from '../controllers/product.js'

route.get('/', productController.getAll);         // Obtener todos los inventarios
route.get('/:id', productController.getOne);     // Obtener un inventario por ID
route.post('/', productController.create);        // Crear un nuevo inventario
route.put('/:id', productController.update);      // Actualizar un inventario por ID
route.delete('/:id', productController.delete);   // Eliminar un inventario por ID

export default route;
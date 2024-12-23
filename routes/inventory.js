import express from 'express';
const route = express.Router();
import inventoryController from '../controllers/inventory.js'

route.get('/', inventoryController.getAll);         // Obtener todos los inventarios
route.get('/:id', inventoryController.getOne);     // Obtener un inventario por ID
route.post('/', inventoryController.create);        // Crear un nuevo inventario
route.put('/:id', inventoryController.update);      // Actualizar un inventario por ID
route.delete('/:id', inventoryController.delete);   // Eliminar un inventario por ID

export default route;
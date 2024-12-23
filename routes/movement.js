import express from 'express';
const route = express.Router();
import movementController from '../controllers/movement.js'

route.get('/', movementController.getAll);         // Obtener todos los inventarios
route.get('/:id', movementController.getOne);     // Obtener un inventario por ID
route.post('/', movementController.create);        // Crear un nuevo inventario
route.put('/:id', movementController.update);      // Actualizar un inventario por ID
route.delete('/:id', movementController.delete);   // Eliminar un inventario por ID

export default route;
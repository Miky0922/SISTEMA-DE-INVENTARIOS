import productModel from '../models/product.js'

class productController {
    constructor() {

    }

    async create(req,res) {
        try {
            const data = await productModel.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }

    }


    async update (req,res) {
        try {
            const { id } = req.params; 
            const data = await productModel.update(id , req.body);
            res.status(200).json(data)
        } catch (e) {
            res.status(500).send(e);
        }

    }

    async delete(req,res) {
        try {
            const { id } = req.params; 
            const data = await productModel.delete(id);
            res.status(206).json(data)
        } catch (e) {
            res.status(500).send(e);
        }

    }

    async getAll(req, res) {
        try {
            // Obtener los parámetros de la query (filtros y paginación)
            const { category, minPrice, maxPrice, minStock, page = 1, limit = 10 } = req.query;
    
            // Llamar al modelo para obtener los productos filtrados y paginados
            const data = await productModel.getAll(category, minPrice, maxPrice, minStock, page, limit);
            
            // Enviar la respuesta con los productos obtenidos
            res.status(200).json(data); // Puedes usar 200 para indicar éxito
        } catch (e) {
            console.error('Error al obtener productos:', e);
            res.status(500).send(e); // Enviar error en caso de fallo
        }
    }


    async getOne(req,res) {
        try {
            const { id } = req.params; 
            const data = await productModel.getOne(id);
            res.status(201).json(data)
        } catch (e) {
            res.status(500).send(e);
        }

    }


      

}


export default new productController();

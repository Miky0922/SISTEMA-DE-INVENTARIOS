import { ObjectId } from "mongodb";
import dbClient from "../config/db.Client.js";

class productmodel {

   async create(producto) {
       const colProducto = dbClient.db.collection('producto');
       return await colProducto.insertOne(producto)
   } 

   async getAll(category, minPrice, maxPrice, minStock, page = 1, limit = 10) {
    const colProducto = dbClient.db.collection('producto');

    
    let filter = {};

    if (category) {
        filter.category = category; // Filtro por categoría
    }

    if (minPrice) {
        filter.price = { $gte: parseFloat(minPrice) }; // Filtro por precio mínimo
    }

    if (maxPrice) {
        filter.price = { ...filter.price, $lte: parseFloat(maxPrice) }; // Filtro por precio máximo
    }

    if (minStock) {
        filter.quantity = { $gte: parseInt(minStock) }; // Filtro por stock mínimo
    }

    // Calcular el número de productos a omitir según la página
    const skip = (page - 1) * limit;

    try {
        // Obtener los productos aplicando los filtros y la paginación
        const products = await colProducto.find(filter)
            .skip(skip)  // Saltar los productos de las páginas anteriores
            .limit(parseInt(limit)) // Limitar los productos a mostrar
            .toArray();

       
        const totalCount = await colProducto.countDocuments(filter);

     
        const totalPages = Math.ceil(totalCount / limit);

        return {
            products,
            totalCount,
            totalPages,
            currentPage: parseInt(page),
            perPage: parseInt(limit)
        };
    } catch (err) {
        console.error('Error al obtener productos:', err);
        throw new Error('Error al obtener productos');
    }
}

   async getOne(id) {
        const colProducto = dbClient.db.collection('producto');
        return await colProducto.findOne({_id: new ObjectId(id)});
     }
   
   async update(id , producto) {
        const colProducto = dbClient.db.collection('producto');
        return await colProducto.updateOne({_id: new ObjectId(id)} , { $set: producto});
     }

   async delete(id) {
        const colProducto = dbClient.db.collection('producto');
        return await colProducto.deleteOne({_id: new ObjectId(id)} );
     }
   

    
   
  

}

export default new productmodel;
import { ObjectId } from "mongodb";
import dbClient from "../config/db.Client.js";

class inventorymodel {

   async create(inventory) {
       const colInventory = dbClient.db.collection('inventory');
       return await colInventory.insertOne(inventory)
   } 

   async getAll() {
       const colInventory = dbClient.db.collection('inventory');
       return await colInventory.find({}).toArray();
    }

   async getOne(id) {
        const colInventory = dbClient.db.collection('inventory');
        return await colInventory.findOne({_id: new ObjectId(id)});
     }
   
   async update(id , inventory) {
        const colInventory = dbClient.db.collection('inventory');
        return await colInventory.updateOne({_id: new ObjectId(id)} , { $set: inventory});
     }

   async delete(id) {
        const colInventory = dbClient.db.collection('inventory');
        return await colInventory.deleteOne({_id: new ObjectId(id)} );
     }
   

    
   
  

}

export default new inventorymodel;
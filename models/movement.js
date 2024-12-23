import { ObjectId } from "mongodb";
import dbClient from "../config/db.Client.js";

class movementmodel {

   async create(inventory) {
       const colMovement = dbClient.db.collection('movement');
       return await colMovement.insertOne(inventory)
   } 

   async getAll() {
       const colMovement = dbClient.db.collection('movement');
       return await colMovement.find({}).toArray();
    }

   async getOne(id) {
        const colMovement = dbClient.db.collection('movement');
        return await colMovement.findOne({_id: new ObjectId(id)});
     }
   
   async update(id , movement) {
        const colMovement = dbClient.db.collection('movement');
        return await colMovement.updateOne({_id: new ObjectId(id)} , { $set: movement});
     }

   async delete(id) {
        const colMovement = dbClient.db.collection('movement');
        return await colMovement.deleteOne({_id: new ObjectId(id)} );
     }
   

    
   
  

}

export default new movementmodel;
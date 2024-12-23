import 'dotenv/config';
import { MongoClient } from "mongodb";

class dbClient {
    constructor () {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=Inventories` ;
        this.client = new MongoClient(queryString)
        this.ConnectDb();
    }

    async ConnectDb() {
        try {
            await this.client.connect();
            this.db = this.client.db('inventory');
            console.log("Database Connection successful")
        } catch (e) {
            console.log(e)
        }
    }
}

export default new dbClient;


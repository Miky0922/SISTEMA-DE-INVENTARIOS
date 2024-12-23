import 'dotenv/config';
import express from 'express';
import routesInventory from './routes/inventory.js';
import routesProducts from './routes/product.js';
import routesMovements from './routes/movement.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/inventory', routesInventory);
app.use('/products', routesProducts);
app.use('/movement', routesMovements);


try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Server OK '+ PORT ))
} catch (e) {
    console.log (e);
}

import express from 'express';
import { data } from './data.js';


const app = express();

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => {
    console.log('Serve at http://localhost:5000')
})
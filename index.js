require('dotenv').config();
const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
routerApi(app);

app.listen(port, ()=>{
    console.log('Este es mi puerto ' + port);
});
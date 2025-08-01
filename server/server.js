const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config();

const PORT = process.env.PORT;
const routes = require('./src/routes')

app.use('/api', routes);

app.listen(PORT, ()=>{
    console.log('Server running on port', PORT)
})
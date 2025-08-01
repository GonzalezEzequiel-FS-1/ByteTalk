const express = require('express');
const router = express.Router();
const testServer = require('../controller/testRoutes')



router.get('/test', testServer)




module.exports=router


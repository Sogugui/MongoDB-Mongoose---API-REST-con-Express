const express = require('express')


//Rutas de productos

const productsApiController= require("../controllers/productsAPIController");
const productsApiRouter= express.Router();

const checkApiKey = require('../middlewares/auth_API_KEY');
//products API
productsApiRouter.get('/:id?',productsApiController.getProducts);
// productsApiRouter.get('/:id?',productsApiController.getProductProvider);
productsApiRouter.post('/',checkApiKey,productsApiController.createProduct);
productsApiRouter.delete("/",checkApiKey,productsApiController.deleteProduct);

module.exports= productsApiRouter;

//http://localhost:300/api/products --> GET products
//http://localhost:300/api/products --> POST products
//http://localhost:300/api/products -->  DELETE products
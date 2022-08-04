const express = require('express')


//Rutas de productos

const providersApiController= require("../controllers/providersAPIController");
const providersApiRouter= express.Router();

const checkApiKey = require('../middlewares/auth_API_KEY');
//products API
providersApiRouter.get('/:id?',providersApiController.getProviders);
// providersApiRouter.post('/',checkApiKey,providersApiController.createProvider);


module.exports= providersApiRouter;
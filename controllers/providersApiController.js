const Providers = require('../models/providers'); 
const Product = require('../models/products');

const getProviders = async (req, res) => {
  
        try {
            let provider= await Providers.find({})//poner las llaves sin nada es que me busque todo y el .sort es para que me ordene los resultados segun la propiedad que yo le pase. el - delante del id indica que el orden sea descendente, si no lo pongo es ascendente
            res.status(200).json({ provider }); // Pinta datos en el pug
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            let provider=[];
            res.status(404).json({"message":"provider no encontrado"});
            
        }

}

module.exports = {
    getProviders,
    // createProduct,
    //editProduct,
    // deleteProduct
    }
    
//Controlador - Lógica de negocio de la app

//Aqui iran las funciones que tiene cada ruta. Se ponen aqui para dejar el codigo del arrchivo principal
//(app.js) limpio.
const Product= require('../models/products') //importo el archivo product de models
const getProducts = async (req, res) => {
    if (req.params.id) { //FIND BY ID
        try {
            let product =  await Product.findOne({id:req.params.id},'title price id -_id')

            res.status(200).json(product);
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({"message": "producto no encontrado"});
        }
    } else { //FIND ALL
        try {
            let products =  await Product.find({}, '-_id -__v')
            .populate('provider', 'company_name _id')
            res.status(200).json({products});
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`)
            let products = []
            res.status(404).json(error);
        }
    }
}
//Retorna un objeto con los datos de todos los productos. Retorna un status 200.
// Usar populate() para que traiga los datos del proveedor de cada producto.
const getProductProvider = async (req, res) => {
    try {
        let product =  await Product.find({}).populate('Providers');
        res.status(200).json(product);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(404).json({"message": "producto no encontrado"});
    }

}

const createProduct = async (req, res) => {
    console.log("Esto es el consol.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo
    const newProduct = req.body; // {} nuevo producto a guardar
    // Líneas
    //para guardar 
    // en una BBDD SQL o MongoDB
    try {
        let product = new Product(req.body);
        let answer = await product.save();// Guardar objeto en Mongo 
        console.log("Este es el console.log de lo que devuelve la api", answer);

        res.status(201).json({"message":`Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`})
    }
    catch {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({"message":`Error guardando producto ${answer.title}`})
    }}

    const deleteProduct = async (req, res) => {
        const msj = "Has enviado un DELETE para borrar product";
        console.log(msj);
        res.json({"message": msj});
    }


module.exports = {
getProducts,
createProduct,
//editProduct, cuando no quiero exportar alguna de las propiedades del objeto simplemente las comento como aca.
deleteProduct
}
//Controlador - Lógica de negocio de la app

//Aqui iran las funciones que tiene cada ruta. Se ponen aqui para dejar el codigo del arrchivo principal
//(app.js) limpio.
const Product= require('../models/products') //importo el archivo product de models
const getProducts = async (req, res) => {
    if (req.params.id) { //find by ID
        try {
            let product =  await Product.find({id:req.params.id},'title price id -_id');// lo que esta entre comillas es para filtrar lo que quiero que me muestre
            req.status(200).json(product);
         
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"producto no encontrado"}); // lo ponemos aqui a esto para que si falla el fetch no me de timeout y me pinte el array vacio
           //el .status(200) es para que me devuelva ese numero de codigo de que todo ha ido bien (200) o error(404)
        }
    } else { //Find all
        try {
            let product= await Product.find({},'title price id -_id').sort('-id')//poner las llaves sin nada es que me busque todo y el .sort es para que me ordene los resultados segun la propiedad que yo le pase. el - delante del id indica que el orden sea descendente, si no lo pongo es ascendente
            res.status(200).json({ product }); // Pinta datos en el pug
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            let products=[];
            res.status(404).json({"message":"producto no encontrado"});
            
        }
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
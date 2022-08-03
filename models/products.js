const mongoose = require('mongoose');


const objectSchema = {
    id: { 
        type: Number, 
        required: true,
        unique: true
    },
    title: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    image:{
        type: String,
        validate: {
            validator: function(url){
               if(url.indexOf('.jpg') != -1 || url.indexOf('.png') != -1){ // ESTO ES PARA DECIR QUE SI ES JPG O PNG DEVUELVA TRUE
                return true;
               }else{
                return false
               }
            }, 
            message: "Porfa, sólo imágenes JPG o PNG"
        }
    },
    
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Product = mongoose.model('Product', productSchema);

module.exports = Product;

//insertar un producto
// const p = new Product({
//     id: 1,
//     title: "Tortilla",
//     price: 1.80,
//     description: "Tortilla jugosa del teatro",
//     image:"https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-768x530.jpg"
// });

// p.save(). then((data)=>console.log(data))
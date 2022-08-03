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
    // image:{
    //     type: String,
    //     validate: {
    //         validator: function(url){
    //            if(url.indexOf('.jpg') != -1 || url.indexOf('.png') != -1){ // ESTO ES PARA DECIR QUE SI ES JPG O PNG DEVUELVA TRUE
    //             return true;
    //            }else{
    //             return false
    //            }
    //         }, 
    //         message: "Porfa, sólo imágenes JPG o PNG"
    //     }
    // },
    provider:{ type: Number, 
        required: true,
        unique: true
   }
    
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// insertar un producto
const p = new Product({
    "_id": ObjectId("62b062cff3fa93bf9d66fa28"),
    "title": "Tortilla - Marquina",
    "price": 1.80,
    "description":"La mejor tortilla de la zona en el Teatro Marquina",
    "provider": ObjectId("62b062cff3fa93bf9d66fa06")
});

p.save(). then((data)=>console.log(data))
const mongoose = require('mongoose');


const objectSchema = {
    id: { 
        type: Number, 
        required: true,
        unique: true
    },
    company_name: { 
        type: String, 
        required: true 
    },
    CIF: { 
        type: Number, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    url_web:{
        type: String
        },
  
    }

// Crear el esquema
const providersSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Provider = mongoose.model('Providers', providersSchema);

module.exports = Provider;
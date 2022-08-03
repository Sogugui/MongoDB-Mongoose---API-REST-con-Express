//GET http://localhost:3000/entries -> ALL
//GET http://localhost:3000/entries?email=hola@gmail.com -> por email

const entry = require("../models/entry")
//getEntries()
const getEntries= async (req,res)=>{
    let entries;
if(req.query.email){
  entries = await entry.getEntriesByEmail(req.query.email)
}else{
    entries = await entry.getAllEntries()
}
res.status(200).json(entries); // array [] con las entries encontradas
}

// {
//     "title":"noticia desde Node",
//     "content":"va a triunfar esto2",
//     "email":"alejandru@thebridgeschool.es",
//     "category":"sucesos"} ********************Objeto a probar en el post
//createEntry()
//crear entry por email
const createEntry= async (req,res)=>{
const newEntry=req.body; // la peticion llega y la leo a traves del body
const response = await entry.createEntry(newEntry) // se guarda una entrada en la BBDD
res.status(201).json({   // 201 es para decir ok,creado
    "items_created":response,
    data:newEntry
});

}

module.exports={
    getEntries,
    createEntry,
    //deleteEntry--> DELETE
    //updateEntry--> PUT
}
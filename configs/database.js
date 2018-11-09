const moongose = require('mongoose'); //requerimos la libreria moongose
const {mongodb} = require('./key'); //requerimos el archivo de nuestras crendenciales
//el método connect recibe como parametros la URI de
//conexión.
moongose.connect(mongodb.URI,{ 
    useNewUrlParser: true,
    useCreateIndex: true
    })
.then(db=>console.log('Connection success!!'))
.catch(err=>console.error(err));
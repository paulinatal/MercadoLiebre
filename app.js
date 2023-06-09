const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req,res) =>{
    res.sendFile((__dirname + '/views/index.html'));  // Permite enviar un archivo HTML
});

app.get('/mostrar_mensaje', (req,res) =>{
    res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
});

// app.get('/mostrar_sitio', (req,res) =>{
//    res.sendFile((__dirname + '/views/index.html'));  // Permite enviar un archivo HTML
// });

app.get('*', (req,res) =>{
    res.send("Ruta restringida, hemos localizado la direccion de su computador");  // Permite enviar texto o codigo HTML
});

app.listen(3002, function () {
    console.log("Servidor corriendo");
});















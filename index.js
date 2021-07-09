const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const app = express();
const puerto = 3000;
const fetch = require("node-fetch");

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

//levantamos app
app.listen(3000, () =>{
    //Funcion const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const app = express();
const puerto = 3000;
const fetch = require("node-fetch");

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

//levantamos app
app.listen(3000, () =>{
    //Funcion se ejecuta cuando la aplicación se levante
    console.log('Servidor funcionando!');
});


let headers = new fetch.Headers();
let username = 'megabits'; //usuario API Tecnoglobal
let password = 'e228c595db0dbfaf0057ebb35743cd1f'; //password API Tecnoglobal
let encode = `${username}:${password}`; // combinacion username + password 

const buf = Buffer.from(encode,'utf-8'); 
const hash = buf.toString('base64');

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    })

const obtenerArticulo = async() =>{
    try {
            const res = await fetch("http://200.6.78.34/stock/v1/price/DE0-852", {
                method:'GET',
                headers: {'Authorization':'Basic '+ hash}
            });
            const data = await res.json();
            return data;
        } catch(error){
            console.log(error);
        }
}

let articulo = obtenerArticulo();
console.log(articulo);


/*
fetch("http://200.6.78.34/stock/v1/price/DE0-852", {
    method:'GET',
    headers: {'Authorization':'Basic '+ hash}
})
.then(promesaFetch => promesaFetch.json())
.then(contenido => console.log(contenido));
/*
app.listen(puerto, () => {
    console.log(`Example app listening at http://localhost:${puerto}`)
});
*/
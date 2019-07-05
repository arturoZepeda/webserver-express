const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT|| 8080;
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales')

//Expres HBS engine
app.set('view engine','hbs');





// comentamos para evitar que choque con  la muestra de publuic de solo respuestas genericas.
// app.get('/', (req, res) => {
//     //   res.send('1Hello World')
//     let salida = {
//         nombre: 'Alberto',
//         apellido: 'Zepeda',
//         edad: 26,
//         url: req.url
//     }
//     res.send(salida);
// })

//para renderizar (HBS) desde un template y evitar reprogramar
app.get('/', (req, res) => {
    res.render('home',{
        nombre:'alberto zepeda'
    });
})
//  ejemplo de peticion con URL especifica
app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})
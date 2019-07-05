//helpers permiten ayudar a enviar condiciones en condiciones especificas.
const hbs = require('hbs');

hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar',(texto)=>{
    let palabras =texto.split(' ');
    palabras.forEach((palabra,idx)=>{
        palabra[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        // debug console.log(palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase());
    });
    return palabras.join(' ');
});
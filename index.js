const { response } = require('express');
const express = require('express');
const app= express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views/pug');


app.get('/', (request, response) => {
    const name = request.query.name;
    const edad = request.query.edad;
    const nacionalidad = request.query.nacionalidad;
    const genero = request.query.genero;
    const estatura = request.query.estatura;

    //console.log('Name:', name);
    //console.log('Name:', edad);

    response.render('index', {name, edad, nacionalidad, genero, estatura});
});

app.listen(3000, () => {
    console.log('Ready in port 3000');
}
);


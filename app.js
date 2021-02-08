const express = require ('express');
const path = require ('path');

const app = express ();

const publicPath = path.resolve (__dirname, './public');

app.use(express.static (publicPath));

app.set('puerto', process.env.PORT || 3000);

app.listen (app.get('puerto'), () => {
    console.log ( 'Servidor activo puerto 3000')
} );

app.get('/',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/index.html'))
});

app.get('/login',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/login.html'))
});

app.get('/registro',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/registro.html'))
});

app.get('/carrito',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/carrito.html'))
});

app.get('/producto',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/producto.html'))
});

const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.set('puerto', process.env.PORT || "3000");

app.listen(app.get('puerto'), () => {
    console.log( 'Servidor activo puerto 3000');
} );

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

// <<<<<<< HEAD
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/productCart',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});

app.get('/productDetail',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
});


app.post('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.post('/registerMessage',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/registerMessage.html'));
});


// Agregar ruta a catálogo y a "olvidé mi contraseña"

app.get('/registro',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/registro.html'))
});

app.get('/carrito',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/carrito.html'))
});

app.get('/productDetail',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/productDetail.html'))
});


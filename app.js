const express = require('express');
const path = require('path');

const mainRoutes = require('./src/routes/main');
const productRoutes = require('./src/routes/products');
const users = require('./src/routes/users');
const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));
app.set('view engine', 'ejs');

app.set('puerto', process.env.PORT || "3001");

app.listen(app.get('puerto'), () => {
    console.log( 'Servidor activo puerto 3001');
} );


/********************************************** 
Rutas implementadas: index, login, register, detalle de producto, 

olvidé contraseña, olvidé contraseña mensaje
***********************************************/
app.use('/', mainRoutes);
app.use('/', users);
app.use('/', productRoutes);




/**********************************************    
Faltan implementar: carrito, mensaje de registro, catálogo, 
***********************************************/

/* app.get('/',(req,res)=>{
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



// Agregar ruta a catálogo

app.get('/registro',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/registro.html'))
});

app.get('/carrito',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/carrito.html'))
});

app.get('/producto',(req,res)=>{
    res.sendFile (path.resolve (__dirname, './views/producto.html'))
});
*/
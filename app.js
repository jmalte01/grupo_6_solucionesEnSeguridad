const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

const mainRoutes = require('./src/routes/main');
const productRoutes = require('./src/routes/products');
const users = require('./src/routes/users');
const admin = require('./src/routes/admin');

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('puerto', process.env.PORT || "3001");

app.listen(app.get('puerto'), () => {
    console.log(`[app] http://localhost:3001`);
} );


/********************************************** 
Rutas implementadas: index, login, register, detalle de producto, 

olvidé contraseña, olvidé contraseña mensaje
***********************************************/
app.use(mainRoutes);
app.use(users);
app.use(productRoutes);
app.use(admin);


/**********************************************    
Faltan implementar: carrito, mensaje de registro, catálogo, 
***********************************************/


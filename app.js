const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const cors = require('cors');

const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

const mainRoutes = require('./src/routes/main');
const productRoutes = require('./src/routes/products');
const userRoutes = require('./src/routes/users');
const adminRoutes = require('./src/routes/admin');
const usersAPI = require('./src/routes/api/users');
const productsAPI = require('./src/routes/api/products');
const cartRoutes = require ('./src/routes/shoppingCart')
const acceso = require('./src/middlewares/acceso');
const mantenimiento = require('./src/middlewares/mantenimiento');
const { shoppingCart } = require('./src/controllers/shoppingCartController');
const usersApiController = require('./src/controllers/api/usersApiControllers');

const publicPath = path.resolve(__dirname, './public');
app.use(cors());

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


app.use(session({
    secret : 'topSecret',
    resave: true,
    saveUninitialized: true,
}))


//Aqui coloco el Middleware para activar lo referido a las cookies
app.use(cookieParser());

//Middleware de aplicación que se encarga de controlar si el usuario está logueado o no.
app.use(acceso);


app.use(mainRoutes);
app.use(userRoutes);
app.use(productRoutes);
app.use(adminRoutes);
app.use(cartRoutes);
app.use('/api/users', usersAPI);
app.use('/api/products', productsAPI);

/**********************************************    
Faltan implementar: carrito, mensaje de registro, catálogo, 
***********************************************/


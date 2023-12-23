const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const productController = require('./controllers/productController');

const app = express();

// Configuración del motor de plantillas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
app.get('/', productController.getAllProducts);
app.get('/add', productController.showAddForm);
app.post('/add', productController.addProduct);
app.get('/edit/:id', productController.showEditForm);
app.post('/edit/:id', productController.editProduct);
app.get('/delete/:id', productController.deleteProduct);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

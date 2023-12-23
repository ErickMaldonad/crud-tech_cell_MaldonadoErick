const Product = require('../models/productModel');

const productController = {
  getAllProducts: (req, res) => {
    Product.getAllProducts((err, results) => {
      if (err) throw err;
      res.render('index', { products: results });
    });
  },

  showAddForm: (req, res) => {
    res.render('add');
  },

  addProduct: (req, res) => {
    const { brand, model, price, quantity } = req.body;
    const total = price * quantity;

    Product.addProduct({ brand, model, price, quantity, total }, (err) => {
      if (err) throw err;
      res.redirect('/');
    });
  },

  showEditForm: (req, res) => {
    const productId = req.params.id;
    Product.getProductById(productId, (err, result) => {
      if (err) throw err;
      res.render('edit', { product: result });
    });
  },

  editProduct: (req, res) => {
    const productId = req.params.id;
    const { brand, model, price, quantity } = req.body;
    const total = price * quantity;

    Product.editProduct(productId, { brand, model, price, quantity, total }, (err) => {
      if (err) throw err;
      res.redirect('/');
    });
  },

  deleteProduct: (req, res) => {
    const productId = req.params.id;
    Product.deleteProduct(productId, (err) => {
      if (err) throw err;
      res.redirect('/');
    });
  },
};

module.exports = productController;

const connection = require('./db');

const Product = {
  getAllProducts: (callback) => {
    const query = 'SELECT * FROM products';
    connection.query(query, callback);
  },

  addProduct: (product, callback) => {
    const query = 'INSERT INTO products SET ?';
    connection.query(query, product, callback);
  },

  getProductById: (id, callback) => {
    const query = 'SELECT * FROM products WHERE id = ?';
    connection.query(query, [id], (err, result) => {
      if (err) throw err;
      callback(null, result[0]);
    });
  },

  editProduct: (id, product, callback) => {
    const query = 'UPDATE products SET ? WHERE id = ?';
    connection.query(query, [product, id], callback);
  },

  deleteProduct: (id, callback) => {
    const query = 'DELETE FROM products WHERE id = ?';
    connection.query(query, [id], callback);
  },
};

module.exports = Product;

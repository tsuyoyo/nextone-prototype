/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  showDateOrder: function(req, res) {

    var onFound = function(err, products) {
      res.view("product/list",
        {listType: 'Date order', products: products});
    };

    Product.find({}).sort({ createdAt: 'asc' }).exec(onFound);
  }

};


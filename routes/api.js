
//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Product = require('../model/product');


//routes
Product.methods(['get','post','put','delete']);
Product.register(router, '/products');

// var Resource = app.resource = restful.model('resource', mongoose.Schema({
//     title: String,
//     year: Number,
//   }))
//   .methods(['get', 'post', 'put', 'delete']);
//
// Resource.register(app, '/resources');

//Return Router
module.exports = router;

/**
 * Created by SONY on 2016/8/5.
 */
var express = require('express');
let BarToPost = require("./src/core/getbartopost-core");
let PostToBar = require("./src/core/getposttobar-core");
var app = express();

app.get('/', function(req, res) {
    res.send('Hello, world!');
});

app.get('/zipcode-to-barcode/:zipcode', function(req, res) {
  let barTopost = new BarToPost();
  let result = barTopost.do(req.params.zipcode);
  if(result!== false){
    res.send('200--barcode ' + result);
  }
  res.send('400-- ' + result);
})

app.get('/barcode-to-zipcode/:barcode', function(req, res) {
  let postTobar = new PostToBar();
  let result = postTobar.do(req.params.barcode);

  if(result !== false){
    res.send('200--zipcode ' + result);
  }
  res.send('400-- ' + result);
})

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000');
});
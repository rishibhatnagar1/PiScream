var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser')
var cV0 = "0";
var cV1 = "0";
var cV2 = "0";
var cV3 = "0";

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function (req, res) {

  console.log(req.body.value);
  cV0 = req.body.value;
  res.json("Got Request");
console.log("After Post : " + cV0);
})

app.get('/', function (req, res) {
console.log(cV0)
  if(cV0 != "0"){
  res.send(cV);
  cV0 = "0";
}
else
{
res.send("0");
}
})

app.post('/home', function (req, res) {

  console.log(req.body.value);
  cV1 = req.body.value;
  res.json("Got Request");
console.log("After Post : " + cV1);
})

app.get('/home', function (req, res) {
console.log(cV1)
  if(cV1 != "0"){
  res.send(cV1);
  cV1 = "0";
}
else
{
res.send("0");
}
})


app.post('/wheel', function (req, res) {

  console.log(req.body.value);
  cV2 = req.body.value;
  res.json("Got Request");
console.log("After Post : " + cV2);
})

app.get('/wheel', function (req, res) {
console.log(cV2)
  if(cV2 != "0"){
  res.send(cV2);
  cV2 = "0";
}
else
{
res.send("0");
}
})


app.post('/robot', function (req, res) {

  console.log(req.body.value);
  cV3= req.body.value;
  res.json("Got Request");
console.log("After Post : " + cV3);
})

app.get('/robot', function (req, res) {
console.log(cV3)
  if(cV3 != "0"){
  res.send(cV3);
  cV3 = "0";
}
else
{
res.send("0");
}
})



app.use(bodyParser.json());
//app.use(connect.bodyParser({strict: false}));
var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})


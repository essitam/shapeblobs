var fs = require('fs');
var data = fs.readFileSync('words.json');
var words = JSON.parse(data);
// console.log(words);

console.log("My socket server is running");

var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var server = app.listen(3000);

app.use(express.static('draw'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.post('/analyze', analyzeThis);

function analyzeThis(request, response){
console.log(request.body);
var data = request.body;
var jsonObj = JSON.stringify(data);
console.log(jsonObj);

var reply = {
  msg: "thanks!"
}

 fs.writeFile('words.json', jsonObj, finished);

    function finished(err){
      console.log('done');
      reply = {

        status: "success!"
      }
      response.send(reply)
    }
}

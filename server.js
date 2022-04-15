// Code taken from https://medium.com/@BaaniLeen/connecting-angular-5-app-to-mongodb-database-mean-stack-9b4b4232e219
// Commented by Alex Wills

// Imported packages
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');


// Run a local mongodb database, log error or success
var db = mongo.connect("mongodb://localhost:27017/AngularCRUD", function(err, response) {
    if(err){
      console.log(err);
    } else {
      console.log('Connected to ' + db + ' + ' + response);
    }
  }
  )

var app = express();
app.use(bodyParser);
app.use(bodyParser.json({ limit:'5mb' }));
app.use(bodyParser.urlencoded({extended:true}));

// Headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://localhost:4200');                   // Website to connect to
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  // These are the methods that may be requested of the server
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');           // "defines request headers we wish to allow"
  res.setHeader('Access-Control-Allow-Credentials', true);                                  // Allows for cookies to be sent in API requests
  next();
})


// Database Schemas
var Schema = mongo.Schema;


// We're just storing name and address strings
var UsersSchema = new Schema({
  name: {type: String},
  address: {type: String},
}, {versionKey: false});

var model = mongo.model('users', UsersSchema, 'users');


// API CALL DEFINITIONS

// SaveUser
app.post("/api/SaveUser", function(req, res){
  var mod = new model(req.body);
  if(req.body.mode == "Save"){
    mod.save(function(err, data){
      if(err){
        res.send(err);
      } else {
        res.send({data:"Record has been inserted!"});
      }
    });
  }
  else {
    model.findByIdAndUpdate(req.body.id, {name: req.body.name, address: req.body.address},
      function(err, data){
        if(err){
          res.send(err);
        } else {
          res.send({data:"Record has been updated!"});
        }
      }
      );
  }
});


// deleteUser
app.post("/api/deleteUser", function(req, res){
  model.remove({_id: req.body.id}, function(err) {
    if(err){
      res.send(err);
    } else {
      res.send({data: "Record has been deleted!"});
    }
  });
});


// getUser
app.get("/api/getUser", function(req, res){
  model.find({}, function(err, data){
    if(err){
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


app.listen(8000, function(){
  console.log('Example app listening on port 8000');
});

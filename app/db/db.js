var mongoose = require("mongodb");
var assert = require("assert");

var url = "mongodb://localhost:27017/renadb";

mongoose.connect(
  url,
  function() {
    {
      useNewUrlParser: true;
    }
    testdb.clients.insertOne({
      login: "ehgerente",
      senha: "gerenteviupapai"
    });
  }
);

mongoose.connection.on("connected", function() {
  console.log("Mongoose connected to " + url);
});

mongoose.connection.on("error", function(err) {
  console.log("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", function() {
  console.log("Mongoose disconnected");
});

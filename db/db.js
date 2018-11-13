var mongo = require("mongodb");
var assert = require("assert");

var url = "mongodb://localhost:27017/testdb";

mongo.connect(
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

mongo.connection.on("connected", function() {
  console.log("Mongoose connected to " + url);
});

mongo.connection.on("error", function(err) {
  console.log("Mongoose connection error: " + err);
});

mongo.connection.on("disconnected", function() {
  console.log("Mongoose disconnected");
});

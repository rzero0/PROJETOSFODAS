const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema(
  {
    name: {
      required: true,
      type: String
    },
    ne: {
      required: true,
      type: St Integer
    },
    },
  { collection: "products" }
);

clientSchema.statics.isLoginTaken = function (login) {
  if (login)
    return this.findOne({ login: login }).then(function (client) {
      return client ? true : false;
    });
};

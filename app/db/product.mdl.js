const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema(
  {
    name: {
      required: true,
      type: String,
      unique: true
    },
    price: {
      required: true,
      type: Integer
    },
    description: {
      required: true,
      type: String
    }
  },
  { collection: "products" }
);

productSchema.statics.isNameTaken = function (name) {
  if (name)
    return this.findOne({ name: name }).then(function (product) {
      return product ? true : false;
    });
};

module.exports = mongoose.model('Products', productSchema);

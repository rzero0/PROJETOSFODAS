const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = Schema(
  {
    name: {
      required: true,
      type: String
    },
    login: {
      required: true,
      type: String,
      unique: true
    },
    password: {
      required: true,
      type: String
    },
    phone: {
      type: String
    },
    address: {
      type: String
    }
  },
  { collection: "clients" }
);

clientSchema.statics.isLoginTaken = function(login) {
  if (login)
    return this.findOne({ login: login}).then(function(client) {
      return client? true : false;
    });
};

module.exports = mongoose.model('Clients', clientSchema);

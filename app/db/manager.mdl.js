const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managerSchema = Schema(
  {
    login: {
      required: true,
      type: String,
      unique: true
    },
    pasword: {
      required: true,
      type: String
    }
  },
  { collection: "managers" }
);

managerSchema.statics.isLoginTaken = function (login) {
  if (login)
    return this.findOne({ login: login }).then(function (manager) {
      return manager ? true : false;
    });
};

module.exports = mongoose.model('Managers', managerSchema);

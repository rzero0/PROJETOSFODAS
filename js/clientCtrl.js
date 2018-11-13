const Rest = require("js/rest.js");
const Clients = require("db/clientSchema.js");

async function addUser(req, res) {
  try {
    if (isEmpty(req.body.name)) Rest.nameIsRequired(res, true);
    else if (isEmpty(req.body.password)) Rest.passwordIsRequired(res, true);
    else if (isEmpty(req.body.login)) Rest.loginIsRequired(res, true);
    else {
      var usr = {
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address
      };

      Clients.create(usr)
        .then(user => {
          Rest.ok(res, user);
        })
        .catch(err => {
          if (err.code === 11000) Rest.userAlreadyExists(res, true);
          else Rest.somethingWentWrong(res, err);
        });
    }
  } catch (err) {
    Rest.somethingWentWrong(res, err);
  }
}

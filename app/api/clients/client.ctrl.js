const Rest = require('../../util/rest');
const {isEmpty} = require('../../util/stringCheckers');
const Clients = require('../../db/clientSchema');


async function login(req, res) {
  try {
      await Clients.findOne({login: req.body.login}, (err, client) => {
        if(!client) {
          Rest.unregisteredClient(res, true);
        } else {
          Rest.ok(res, { client: { login: client.name, password: client.password }});
        }
      });
  } catch (err) {
      Rest.somethingWentWrong(res, err);
  }
}

async function addClient(req, res) {
  try {
    if (isEmpty(req.body.name)) Rest.nameIsRequired(res, true);
    else if (isEmpty(req.body.password)) Rest.passwordIsRequired(res, true);
    else if (isEmpty(req.body.login)) Rest.loginIsRequired(res, true);
    else {
      var clt = {
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address
      };

      Clients.create(clt)
        .then(client => {
          Rest.ok(res, client);
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

async function deleteClient(req, res) {
  try {
      await Clients.findByIdAndRemove(req.params.login, (err, result) => {
        if(err) {
          Rest.somethingWentWrong(res, true);
        } else {
          Rest.ok(res, true);
        }
      });
  } catch (err) {
      Rest.somethingWentWrong(res, err);
  }
}

async function updateClient(req, res) {
    try {
        var client = Clients.findOne({login: req.body.login}, (err, client) => {
          if(!client) {
            Rest.unregisteredClient(res, true);
          } else {
            Rest.ok(res, { client: { login: client.name, password: client.password }});
          }
        });

        Clients.findOneAndUpdate({login: client.login}, req.body, {new: true}).then((updated) => {
            if(!updated)
                Rest.userNotFound(res, true);
            else
                Rest.ok(res, { name: updated.name, password: updated.password, login: updated.login });
        }).catch((err) => {
            Rest.somethingWentWrong(res, err);
        });
    } catch(err) {
        Rest.somethingWentWrong(res, err);
    }
}

module.exports = {
  login: login,
  addClient: addClient,
  deleteClient: deleteClient,
  updateClient: updateClient
};

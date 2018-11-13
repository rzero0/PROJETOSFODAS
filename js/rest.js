function nameIsRequired(res, err) {
  res.status(401);
  res.json({ err: err, log: "Nome não pode ser vazio!" });
}

function passwordIsRequired(res, err) {
  res.status(401);
  res.json({ err: err, log: "Senha não pode ser vazia!" });
}

function loginIsRequired(res, err) {
  res.status(401);
  res.json({ err: err, log: "Login não pode ser vazio!" });
}

function ok(res, content) {
  res.status(200);
  res.json(content);
}

function userAlreadyExists(res, err) {
  res.status(401);
  res.json({ err: err, log: "Usuário já cadastrado!" });
}

function somethingWentWrong(res, err) {
  res.status(500);
  res.json({ err: err, log: "Algo deu errado!" });
}

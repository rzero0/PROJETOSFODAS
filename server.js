var express = require('express');
var cors = require('cors');
var app = express();
var Config = require('./app/util/config');
const bodyParser = require('body-parser');

require('./app/db/db');

const routes = require('./app/index.route');

app.use(cors());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: false }));
app.use('/api', routes);

const PORT = Config.PORT || 8080;

var server = app.listen(PORT, function () {
    console.log(`Renadb running on port ${PORT}...`);
});

server.timeout = 300000;

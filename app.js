require('dotenv').config();
const Koa = require('koa');
const logger = require('koa-morgan');
const Router = require('koa-router');
const bodyParser = require('koa-body');

const fs = require('fs');
const https = require('https');

const cookiesMiddleware = require('universal-cookie-koa');

const prefixPath = '/api';

const usersRoutes = require('./api/users').prefix(prefixPath);

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.use(cookiesMiddleware());
app.use(logger('tiny'));

app.use(usersRoutes.routes());

app.use(router.routes());

const server = https.createServer({
    key: fs.readFileSync('./config/keys/key.pem'),
    cert: fs.readFileSync('./config/keys/cert.pem'),
    requestCert: false,
    rejectUnauthorized: false
}, app.callback()).listen(process.env.PORT);

module.exports = server;
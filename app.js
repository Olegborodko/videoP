const Koa = require('koa');
const logger = require('koa-morgan');
const Router = require('koa-router');
const bodyParser = require('koa-body');

const cookiesMiddleware = require('universal-cookie-koa');

const prefixPath = '/api';

const usersRoutes = require('./api/users').prefix(prefixPath);

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cookiesMiddleware());
app.use(logger('tiny'));

app.use(usersRoutes.routes());

//app.use(router.routes());

const server = app.listen(3000);

module.exports = server;
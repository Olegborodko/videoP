const Koa = require('koa');
const logger = require('koa-morgan');
const Router = require('koa-router');
const bodyParser = require('koa-body');

const cookiesMiddleware = require('universal-cookie-koa');
const usersRoutes = require('./api/users');

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cookiesMiddleware());
app.use(logger('tiny'));

app.use(usersRoutes.routes());

//app.use(router.routes());

app.listen(3000);


const bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync();

bcrypt.hash('mypassword', salt, function(err, hash){
    if(err) throw err;
        console.log(hash);
    bcrypt.compare('mypassword', hash, function(err, result) {
        if (err) { throw (err); }
        console.log(result);
    });

});
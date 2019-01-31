const Koa = require('koa');
const logger = require('koa-morgan');
const Router = require('koa-router');
const bodyParser = require('koa-body')();
const cookiesMiddleware = require('universal-cookie-koa');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    // ctx.request.universalCookies.set('cat','name3',{
    //     //domain: "localhost"
    //     //signed: true
    //     // secure: true,
    //     httpOnly: false
    // });
    ctx.request.universalCookies.remove('cat');
    ctx.body = {ok: "test"};
});

router.post('/user', bodyParser, ctx => {
    ctx.cookies.set = ("test", "result test", {
    signed: true
    // secure: true,
    // httpOnly: false
    });
    ctx.body = {data: ctx.request.body};
});

app.use(cookiesMiddleware());

app.use(logger('tiny'));

app.use(router.routes());

app.listen(3000);
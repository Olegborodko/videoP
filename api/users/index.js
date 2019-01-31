const Router = require('koa-router');

const router = new Router();

//create user
router.post('/user', (ctx) => {
    // ctx.request.universalCookies.set('cat','name3',{
    //     //domain: "localhost"
    //     //signed: true
    //     // secure: true,
    //     httpOnly: false
    // });
    ctx.body = { data: ctx.request.body }
});

module.exports = router;
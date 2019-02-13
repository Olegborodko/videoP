const Router = require('koa-router');
const sequelize = require('../../config/sequelize');
const models = require('../../db/models');
const formatErrors = require('../../config/formatErrors');
const errorText = require('../../config/listErrors');
require('../../config/auth');
const passport = require('koa-passport');
//router.use(passport.initialize());

const router = new Router();

//create user
router.post('/users', async (ctx) => {
    // ctx.request.universalCookies.set('cat','name3',{
    //     //domain: "localhost"
    //     //signed: true
    //     // secure: true,
    //     httpOnly: false
    // });

    //ctx.request.body // your POST params
    //ctx.params // URL params, like :id

    const password = ctx.request.body['password'];
    const email = ctx.request.body['email'];
    const login = ctx.request.body['login'];

    return models.User.create({
        email: email,
        password: password,
        login: login
    }).then(data => {
        ctx.request.universalCookies.set('cat','name3',{
            //domain: "localhost"
            //signed: true,
            //secure: true,
            httpOnly: false
        });

        ctx.body = { success: data };
    })
    .catch(data => {
        ctx.status = 400;
        ctx.body = { errors: formatErrors(data) };
        //console.log(error.message);
        //console.log(error.name);
        //console.log(error.errors[0]);
    });

});

//get users
router.get('/users', async (ctx) => {
    return models.User.findAll().then(data => {
        ctx.body = { success: data };
    })
    .catch(data => {
        ctx.status = 404;
        ctx.body = { errors: errorText.something }
    })
});

//======================
router.post('/user', function(ctx) {
    return passport.authenticate('jwt', function(err, user, info, status) {
        if (user === false) {
            ctx.body = { success: false }
            ctx.throw(401);
        } else {
            ctx.body = { success: true }
            return ctx.login(user);
        }
    })(ctx)
});

module.exports = router;
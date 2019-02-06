const Router = require('koa-router');
const sequelize = require('../../config/sequelize');
const models = require('../../db/models');
const formatErrors = require('../../config/formatErrors');
const errorText = require('../../config/listErrors');

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
        ctx.body = { success: data };
    })
    .catch(data => {
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
        ctx.body = { errors: errorText.something }
    })
});

module.exports = router;
const Router = require('koa-router');
const sequelize = require('../../config/sequelize');
const models = require('../../db/models');


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

    models.User.create({
        email: email,
        password: password,
        login: login
    }).then(anotherTask => {

    })
    .catch(error => {
        //throw error;
        // console.log(error.errors[0].message);
        // console.log(error.errors[1].message);

        error.errors.forEach(function(item, i, arr) {
            console.log( item.message );
        });

        //console.log(error.message);
        //console.log(error.name);
        //console.log(error.errors[0]);
    }).catch(err => {
        console.log(err);
    });


});

module.exports = router;
const Router = require('koa-router');
const Joi = require('joi');
const sequelize = require('../../config/sequelize');

const schema = Joi.object().keys({
    login: Joi.string().alphanum().min(3).max(20).required().label('Login'),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(6).max(20).required().error(() => "is not correct"),
    //access_token: [Joi.string(), Joi.number()],
    email: Joi.string().email({ minDomainAtoms: 2 }).required().error(() => "is not correct")
});

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

    Joi.validate(ctx.request.body, schema, {abortEarly: false, language: {key: ''}}, function(err, value) {
        if (err) {
            const obj = {};
            let index = 0;
            err.details.forEach(function(item, i, arr) {
                if (!obj[item.context.key]) {
                    obj[item.context.key] = {}
                    index = 0;
                }
                obj[item.context.key][index] =  item.message;
                index += 1;
            });
            ctx.body = { errors: obj }
        } else {
            sequelize.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                    console.error('Unable to connect to the database:', err);
            });
        }
    });


});

module.exports = router;
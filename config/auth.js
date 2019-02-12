const passport = require('koa-passport')

const fetchUser = (() => {
    // This is an example! Use password hashing in your project and avoid storing passwords in your code
    const user = { id: 1, username: 'test', password: 'test' }
    return async function() {
        return user
    }
})()

// passport.serializeUser(function(user, done) {
//     done(null, user.id)
// })
//
// passport.deserializeUser(async function(id, done) {
//     try {
//         const user = await fetchUser()
//         done(null, user)
//     } catch(err) {
//         done(err)
//     }
// })

// const LocalStrategy = require('passport-local').Strategy
// passport.use(new LocalStrategy(function(username, password, done) {
//     done(null, false)
// }))

//===========

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(new JwtStrategy({
    secretOrKey: '123',
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt")
}, function(payload, done) {
    done(null, false);
}));
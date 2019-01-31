const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.bcryptHashSync = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}
    // return bcrypt.genSalt(saltRounds, function (err, salt) {
    //         bcrypt.hash(password, salt, function (err, hash) {
    //             return hash;
    //         });
    //     });
    // }

    //
    // return await promise(password);
    // var salt = bcrypt.genSaltSync(saltRounds);
    // var hash = bcrypt.hashSync(password, salt);
    // return hash;

module.exports.bcryptCheck = async (password, hash) => {
    bcrypt.compare(password, hash, function(err, res) {
        return res;
    });
}
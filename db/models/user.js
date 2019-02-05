'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                  msg: 'email is not correct'
                },
                len: {
                    args: [3, 30],
                    msg: 'email length is not correct'
                },
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))/,
                    msg: 'password symbols are not correct'
                },
                len: {
                    args: [6, 20],
                    msg: 'password length is not correct'
                },
            }
        },
        login: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: /^[a-zA-Z1-9]+$/,
                    msg: 'login symbols are not correct'
                },
                len: {
                    args: [6, 20],
                    msg: 'login length is not correct'
                },
            }
        },
        nightMode: DataTypes.BOOLEAN,
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};
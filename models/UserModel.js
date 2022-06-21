const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    chucvu: String,
    lastlogin: Number,
    timeregister: Number
});

/*
const UserNew = mongoose.model('User', UserSchema)
UserNew.create({
    username: 'admin',
    pwd: '123456',
    name: 'Tran Minh Thong',
});
*/

module.exports = mongoose.model('User', UserSchema)
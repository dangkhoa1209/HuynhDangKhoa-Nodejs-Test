const UserModel = require("../models/UserModel");


module.exports.home = async (req, res) => {
    let userid = req.signedCookies["userid"];
    let user = await UserModel.findOne({"_id": userid});
    let countUser = await UserModel.find({});
    let countUser1h = countUser.filter((user) => user.lastlogin >= Math.floor(Date.now()/1000) - 60*60);
    let countUserRegister1h = countUser.filter((user) => user.timeregister >= Math.floor(Date.now()/1000) - 60*60);
    res.render('home', {title: "Trang chủ", userLogin: user, countUser:countUser.length, countUser1h:countUser1h.length, countUserRegister1h:countUserRegister1h.length});
}
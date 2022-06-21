const express = require('express')
const Router = express.Router();
const HomeController = require('../controllers/HomeController');
const AuthController = require('../controllers/AuthController');

const UserModel = require("../models/UserModel");

const Auth = async (req, res, next) => {
    var userid = req.signedCookies["userid"];
    var user = await UserModel.findOne({"_id": userid});
    if(user && userid != "" && userid != undefined && userid != null ){
        next();
    }else{
        res.redirect('/login');
    }
}


Router.get('/', Auth, HomeController.home)

//Auth
Router.get('/login', AuthController.login);
Router.post('/register', AuthController.register);
Router.post("/login", AuthController.userlogin);
Router.post("/logout", AuthController.logout);

module.exports = Router
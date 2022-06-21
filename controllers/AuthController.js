const UserModel = require("../models/UserModel")
const md5 = require('md5');

module.exports.login = async (req, res) => {
    res.render('login', {title: "Đăng Kí -  Đăng Nhập"});
}

module.exports.register = async (req, res) => {
    try{
        let { name, username, password } = req.body;

        var user = await UserModel.findOne({"username": username});

        if(user){
            res.send({code: 400, message: "Người dùng đã tồn tại"})
        }else{
            
        
            
            if (name != "" && username != "" && password != "") {
                let newUser = new UserModel({
                    name: name,
                    username: username,
                    password: md5(password),
                    chucvu: "nguoidung",
                    lastlogin : 0,
                    timeregister : Math.floor(Date.now()/1000)
                });
                newUser.save();
                res.send({code: 200, message: "Đăng ký tài khoản thành công"})
            }else{
                res.send({code: 400, message: "Thông tin đăng ký không được để trống"})
            }  
        }   

    }catch(e){
        console.log(e);
        res.send({code: 400, message: "Lỗi hệ thống, vui lòng thử lại"})
    }
}

module.exports.userlogin = async (req, res) => {
    try{
        let {username, password } = req.body;

        var user = await UserModel.findOne({"username": username, "password":md5(password)});

        if(user){

            await UserModel.updateOne({"username": username}, {"lastlogin" : Math.floor(Date.now()/1000)});

            res.cookie('userid', user._id , {signed: true}, { expires: new Date(Date.now() + 60000*60*24*60), httpOnly: false });

            res.send({code: 200, message: "Đăng nhập thành công"});
        }else{
            res.send({code: 400, message: "Tài khoản hoặc mật khẩu không đúng"});
        }   

    }catch(e){
        console.log(e);
        res.send({code: 400, message: "Lỗi hệ thống, vui lòng thử lại"})
    }
}

module.exports.logout = (req, res) => {
    try{
        res.cookie('userid', "", { expires: new Date(Date.now()), httpOnly: false });
        res.send({code: 200, message: "Đăng xuất thành công"})

    }catch(e){
        console.log(e);
        res.send({code: 400, message: "Lỗi hệ thống, vui lòng thử lại"})
    }
}

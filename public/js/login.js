$(document).ready(function () {
    $(".username").focus();
})

function fromRegister() {
    $(".form").html(`
        <div class="form-register">
            <h3>Đăng Ký</h3>
            <input type="text" class="name" placeholder="Họ và tên">
            <input type="text" class="username" placeholder="Username">
            <input type="password" class="password" placeholder="Password">
            <button onclick="registerAccount()">Đăng ký</button>
            <p>Bạn chưa có tài khoản <span class="from-register" onclick="fromLogin()">đăng nhập ngay</span></p>
        </div>
    `)
    $(".name").focus();


}

function fromLogin() {
    $(".form").html(`
    <div class="form-login">
        <h3>Đăng Nhập</h3>
        <input type="text" class="username" placeholder="Username">
        <input type="password" class="password" placeholder="Password">
        <button onclick="Login()">Đăng nhập</button>
        <p>Bạn chưa có tài khoản <span class="from-register" onclick="fromRegister()">đăng ký ngay</span></p>
    </div>
`)
    $(".username").focus();
}

function registerAccount() {
    let name = $(".name").val();
    let username = $(".username").val();
    let password = $(".password").val();

    if (name != "" && username != "" && password != "") {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                username: username,
                password: password
            })
        }

        fetch("/register", options)
            .then(response => response.json())
            .then(data => {
                if (data.code == 200) {
                    alert(data.message);
                    $(".form").html(`
                    <div class="form-login">
                    <h3>Đăng Nhập</h3>
                    <input type="text" class="username" placeholder="Username">
                    <input type="password" class="password" placeholder="Password">
                    <button onclick="Login()">Đăng nhập</button>
                    <p>Bạn chưa có tài khoản <span class="from-register" onclick="fromRegister()">đăng ký ngay</span></p>
                </div>
                    `)
                    $(".username").val(username);
                    $(".password").val(password);
                } else {
                    alert(data.message);
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("Đăng ký tài khoản không thành công");
            })
    } else {
        alert("Vui lòng điền đầy đủ thông tin");
    }

}

function Login(){
    let username = $(".username").val();
    let password = $(".password").val();

    if (username != "" && password != "") {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }

        fetch("/login", options)
            .then(response => response.json())
            .then(data => {
                if (data.code == 200) {
                    window.location = "/";
                } else {
                    alert(data.message);
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("Đăng nhập không thành công");
            })
    } else {
        alert("Vui lòng điền đầy đủ thông tin");
    }
}
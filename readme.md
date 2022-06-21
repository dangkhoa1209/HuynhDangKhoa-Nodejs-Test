1. Cài đặt và chạy dự án
    B1. Cài đặt môi trường
        npm v8 và nodejs v16

    B2. Cài đặt package
        npm install
    
    B3. Chạy
        node index.js

    (DB em dùng mongodb atlas nên anh/chị không cần cấu hình lại ạ);

2. Mô tả về bài test
    - Bài test có chức năng đăng ký, đăng nhập, và đăng xuất 
    - Mã hoá mật khẩu
    - Cập nhật lại thời gian đăng nhập cuối cùng
    - Lưu lại cookie khi đăng nhập
    - Phân quyền người dùng - admin
    - Sau khi đăng nhập 
        + người dùng sẽ vào trong trang chủ và hiện họ và tên
        + admin sẽ có thêm phần thống kê người dùng
            ++ Số lượng user trong hệ thống;
            ++ Số lượng user đăng nhập trong vòng 1h
            ++ Số lương user đăng ký trong vòng 1h
            (em để 1h cho anh/chị dễ kiểm tra ạ)
    
    ADMIN có 1 tài khoản duy nhất là
        username: admin
        password: 123456

3. Thời gian làm bài test
    - Bắt đầu : 8:40 21/6/2022
    - Kết thúc: 12:20 21/6/2022


4. Github 
    https://github.com/dangkhoa1209/HuynhDangKhoa-Nodejs-Test.git

5. Deploy

    https://huynhdangkhoa-test.herokuapp.com

    (Có thể chờ 20s để server khởi động lại)


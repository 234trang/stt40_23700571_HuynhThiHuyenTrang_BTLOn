$(document).ready(function() {
    // Hàm xử lý đăng nhập
    function handleLogin(event) {
        event.preventDefault();
        const loginEmail = $('#loginEmail').val();
        const loginPassword = $('#loginPassword').val();

        // Ở đây bạn thường sẽ kiểm tra thông tin đăng nhập với server
        // Để minh họa, chúng ta chỉ hiển thị thông báo thành công
        $('#userStatusMessage').text('Bạn đã đăng nhập thành công!');
        $('#userStatus').show();
        $('#loginForm')[0].reset();
        $('#accountInfo').show();
        $('#displayEmail').text(loginEmail);
    }

    // Hàm xử lý đăng ký
    function handleRegister(event) {
        event.preventDefault();
        const registerEmail = $('#registerEmail').val();
        const registerPassword = $('#registerPassword').val();
        const registerConfirmPassword = $('#registerConfirmPassword').val();

        if (registerPassword === registerConfirmPassword) {
            // Ở đây bạn thường sẽ gửi dữ liệu đăng ký lên server
            // Để minh họa, chúng ta lưu vào localStorage
            localStorage.setItem('stogetraderEmail', registerEmail);
            localStorage.setItem('stogetraderPassword', registerPassword);

            $('#userStatusMessage').text('Bạn đã đăng ký thành công!');
            $('#userStatus').show();
            $('#registerForm')[0].reset();
            $('#accountInfo').show();
            $('#displayEmail').text(registerEmail);
        } else {
            alert('Mật khẩu không khớp.');
        }
    }

    // Hàm khôi phục thông tin đăng nhập từ localStorage
    function restoreLoginInfo() {
        const email = localStorage.getItem('stogetraderEmail');
        const password = localStorage.getItem('stogetraderPassword');

        if (email) {
            $('#loginEmail').val(email);
            $('#loginPassword').val(password || ''); // Sử dụng mật khẩu đã lưu nếu có
            $('#accountInfo').show();
            $('#displayEmail').text(email);
            $('#userStatusMessage').text('Bạn đã đăng nhập trước đó.');
            $('#userStatus').show();
        }
    }

    // Gắn các sự kiện
    $('#loginForm').submit(handleLogin);
    $('#registerForm').submit(handleRegister);

    // Khôi phục thông tin đăng nhập khi trang được tải
    restoreLoginInfo();

    // Đóng modal sau khi đăng nhập hoặc đăng ký thành công
    $('#loginForm, #registerForm').on('submit', function() {
        $(this).closest('.modal').modal('hide');
    });
});
document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của biểu mẫu

    const searchTerm = document.querySelector('.search-input').value;
    window.location.href = `results.html?q=${searchTerm}`;
});
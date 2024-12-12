// Lấy các phần tử cần thiết
const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Hàm kiểm tra email
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Hàm xử lý submit form
form.addEventListener('submit', function(event) {
    let isValid = true;

    // Reset các thông báo lỗi
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Kiểm tra email
    if (!validateEmail(email.value)) {
        emailError.textContent = 'Email không hợp lệ!';
        isValid = false;
    }

    // Kiểm tra mật khẩu
    if (password.value.length < 6) {
        passwordError.textContent = 'Mật khẩu phải có ít nhất 6 ký tự!';
        isValid = false;
    }

    // Kiểm tra xác nhận mật khẩu
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Mật khẩu và xác nhận mật khẩu không khớp!';
        isValid = false;
    }

    // Nếu form không hợp lệ, ngừng gửi form
    if (!isValid) {
        event.preventDefault();
    }
});
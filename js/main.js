document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Vui lòng nhập email hợp lệ.';
        return;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('passwordError').textContent = 'Vui lòng nhập mật khẩu.';
        return;
    }

    // Submit form if valid (here you can add AJAX request or redirect to another page)
    alert('Đăng nhập thành công!');
    // Form submission or redirection logic
});
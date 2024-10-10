document.getElementById('logoutButton').addEventListener('click', handleLogout);

function handleLogout() {
    window.location.href = 'Index.html'; // Redirect to login page when logging out
}

function handleLogin(event) {
    event.preventDefault(); 

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username is 'admin' and the password is 'admin123'
    if (username === 'admin' && password === 'admin123') {
        alert('Login successful! Welcome Admin.');

        // Redirect to home page after successful login
        window.location.href = 'Home.html';
    } else {
        // Alert if credentials are incorrect
        alert('Incorrect Username or Password!');
        
        // Optionally, reset the input fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}

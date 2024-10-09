function handleLogin(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    alert(`Login attempted with Username: ${username}`);
    alert('Thanks for Logging In');
    
    // Reset the form
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Debugging logs
    console.log('Email:', email);
    console.log('Password:', password);

    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => {
        if (response.ok) {
            // Display welcome alert
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido!',
                text: 'Has iniciado sesión con éxito.',
            });
            window.location.href = '/index.html'; // Redirect to index.html
        } else {
            return response.json().then(data => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: data.message || 'An unexpected error occurred.',
                });
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred during login.',
        });
    });
});

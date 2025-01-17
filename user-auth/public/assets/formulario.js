// Sign-Up Form Handling
const signupForm = document.querySelector('#signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#signupEmail').value;
        const password = document.querySelector('#signupPassword').value;
        const csrfToken = document.querySelector('input[name="csrf_token"]').value; // Get CSRF token

        // Frontend validation
        if (!name || !email || !password) {
            Swal.fire({
                icon: "error",
                title: 'Please fill in all fields!',
            });
            return;
        }

        // Input sanitization (basic example)
        const sanitizedEmail = email.trim();
        const sanitizedName = name.trim();
        const sanitizedPassword = password.trim();

        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken // Include CSRF token in the request
                },
                body: JSON.stringify({ name: sanitizedName, email: sanitizedEmail, password: sanitizedPassword }),
            });

            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: data.message,
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: data.message,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: 'Error registering user!',
            });
        }
    });
}

// Login Form Handling
const loginForm = document.querySelector('#loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        // Frontend validation
        if (!email || !password) {
            Swal.fire({
                icon: "error",
                title: 'Please fill in all fields!',
            });
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: 'Login successful!',
                }).then(() => {
                    window.location.href = '/index.html'; // Redirect to index.html
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: data.message,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: 'Error logging in!',
            });
        }
    });
}

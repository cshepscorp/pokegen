async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (password.length < 4) {
        alert('Please enter a password with at least 4 characters');
        return;
    }

    if (!username) {
        alert('Please enter a username');
        return;
    }

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        // check the response status
        if (response.ok) {
            console.log('success');
            document.location.replace('/');
        } else {
            alert('Username already exists. Please enter a different username');
        }
    }
}

async function loginFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch(`/api/users/login`, {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check the response status
        if (response.ok) {
            document.location.replace('/');
        } else {
            fetch('api/users')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                let found = false;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].username === username) {
                        found = true;
                    }
                }
                if (!found) {
                    alert('The entered username does not exist! Please enter a valid username or sign up as a new user!')
                } else if (found) {
                    alert('Invalid password. Please enter the correct password for this username!')
                }
            })
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

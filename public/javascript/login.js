async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const alertEl = document.querySelector(".signup-card");
    const alertElDiv = document.createElement('div');

    if (password.length < 4) {
        //alert('Please enter a password with at least 4 characters');
        alertElDiv.innerHTML = ` <span class="alertEl rounded">Password needs at least 4 characters</span>`;
        alertEl.append(alertElDiv);
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
        const duplicateUsername = await response.json();
    
        // check the response status
        if (response.ok) {
            console.log('success');
            document.location.replace('/');
        } else {
            alertElDiv.innerHTML = `<span class="alertEl rounded">` + duplicateUsername.message + `</span>`;
            alertEl.append(alertElDiv);
            //alert(duplicateUsername.message);
        }
    }
}

async function loginFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    //I put the alert element in the handlebars file, set it to hidden,
    //and then it will show itself when an error happens
    const alertElDiv = document.querySelector('#login-error-alert');

    if (username && password) {
        const response = await fetch(`/api/users/login`, {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        const loginResponse = await response.json();
        
        if (response.ok) {
            document.location.replace('/');
        } else if (loginResponse.message1) {
            alertElDiv.innerHTML = `<span class="alertEl rounded">` + loginResponse.message1 + `</span>`;
            alertElDiv.classList.remove('hide');
            //alert(loginResponse.message1);
        } else if (loginResponse.message2) {
            alertElDiv.innerHTML = `<span class="alertEl rounded">` + loginResponse.message2 + `</span>`;
            alertElDiv.classList.remove('hide');
            //alert(loginResponse.message2);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

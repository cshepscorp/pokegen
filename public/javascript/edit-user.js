async function editUserHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#username-edit').value.trim();
  const password = document.querySelector('#password-edit').value.trim();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (username && password) {
      const response = await fetch(`/api/users/${id}`, {
          method: 'put',
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
          alert(response.statusText);
      }
  }
}

document.querySelector('.edit-form').addEventListener('submit', editUserHandler);

async function editFormHandler(event) {
  event.preventDefault();
  console.log('first line of editFormHandler');

  // When the button is clicked, capture the id of the post
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const name = document.querySelector('input[name="pokemon-name"]').value;
  const type = document.getElementById('type1').value;
  const type2 = document.getElementById('type2').value;
  const move1 = document.querySelector('input[name="move1"]').value;
  const move2 = document.querySelector('input[name="move2"]').value;
  const move3 = document.querySelector('input[name="move3"]').value;
  const move4 = document.querySelector('input[name="move4"]').value;
  const ability1 = document.querySelector('input[name="ability1"]').value;
  const ability2 = document.querySelector('input[name="ability2"]').value;
  const ability3 = document.querySelector('input[name="ability3"]').value;

  const alertEl = document.getElementById("edit-alert");

  if (name == "") {
    alertEl.innerHTML = `<div class="alertEl rounded">` + "There needs to be a name." + `</div>`;
    return;
  }
  if (move1 === "" && move2 === "" && move3 === "" && move4 === "") {
    alertEl.innerHTML = `<div class="alertEl rounded">` + "There needs to be at least one move." + `</div>`;
    return;
  } 
  if (ability1 === "" && ability2 === "" && ability3 === "") {
    alertEl.innerHTML = `<div class="alertEl rounded">` + "There needs to be at least one ability." + `</div>`;
    return;
  }

  console.log('data attributes' + document.querySelector('input[name="ability3"]').value);
  const response = await fetch(`/api/pokemon/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      name,
      type, type2,
      move1, move2, move3, move4,
      ability1, ability2, ability3
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  // check the response status
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alertEl.innerHTML = `<div class="alertEl rounded">` + response.statusText + `</div>`;
  }
}

document.querySelector('.edit-pokemon-form').addEventListener('submit', editFormHandler);

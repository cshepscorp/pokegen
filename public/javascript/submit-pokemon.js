function addClass() {
	var text = document.getElementById('create-pokemon');
	text.classList.remove('hide');

  var createButton = document.getElementById('create');
  createButton.remove();
};

const nameAlertEl = document.querySelector("#name-alert");
const typeAlertEl = document.querySelector("#type-alert");
const submitAlertEl = document.querySelector("#submit-alert");
    
async function newFormHandler(event) {
    event.preventDefault();
    
    const name = document.querySelector('input[name="pokemon-name"]').value;
    const type = document.getElementById('type').value;
    const type2 = document.getElementById('type2').value;
    const move1 = document.querySelector('input[name="move1"]').value;
    const move2 = document.querySelector('input[name="move2"]').value;
    const move3 = document.querySelector('input[name="move3"]').value;
    const move4 = document.querySelector('input[name="move4"]').value;
    const ability1 = document.querySelector('input[name="ability1"]').value;
    const ability2 = document.querySelector('input[name="ability2"]').value;
    const ability3 = document.querySelector('input[name="ability3"]').value;

    if (!name) {
      nameAlertEl.innerHTML = `<div class="alert-msg rounded">Please enter a name.</div>`;
      return;
    }

    if (type === 'Select a type here!') {
      typeAlertEl.innerHTML = ` <div class="alert-msg rounded">You must enter a type here.</div>`;
      return;
    }

    if (!move1 && !move2 && !move3 && !move4) {
      submitAlertEl.innerHTML = ` <div class="alertEl rounded">Please enter at least one move.</div>`;
      return;
    }

    if (!ability1 && !ability2 && !ability3) {
      submitAlertEl.innerHTML = ` <div class="alertEl rounded">Please enter at least one ability.</div>`;
      return;
    }

    const response = await fetch(`/api/pokemon`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        type,type2,
        move1,move2,move3,move4,
        ability1,ability2,ability3
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-pokemon-form').addEventListener('submit', newFormHandler);
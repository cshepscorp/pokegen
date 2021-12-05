function addClass() {
<<<<<<< HEAD
	var text = document.getElementById('create-blog');
	text.classList.remove('hide'); //do we need this? it looks irrelevant
=======
	var text = document.getElementById('create-pokemon');
	text.classList.remove('hide');
>>>>>>> 448978f3b0ca5331ac358cdab8268ddea829c9e3
}

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
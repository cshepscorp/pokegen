function addClass() {
	var text = document.getElementById('create-pokemon');
	text.classList.remove('hide');

  var createButton = document.getElementById('create');
  createButton.remove();
};

function showMove2() {
  var mv2 = document.getElementById("second-move");
  mv2.classList.remove('hide');
}
function showMove3() {
  var mv3 = document.getElementById("third-move");
  mv3.classList.remove('hide');
}
function showMove4() {
  var mv4 = document.getElementById("fourth-move");
  mv4.classList.remove('hide');
}
function showAbility2() {
  var ab2 = document.getElementById("second-ability");
  ab2.classList.remove('hide');
}
function showAbility3() {
  var ab3 = document.getElementById("third-ability");
  ab3.classList.remove('hide');
}

// const typeTwo = document.getElementById("type2")
// let newOpt = document.createElement("option")
// newOpt.setAttribute("value", "test")
// newOpt.textContent = "test"

// typeTwo.appendChild(newOpt)

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
  
    if (type === 'Select a type here!') {
      alert('You must select at least one type');
      return;
    }

    if (!move1 || !ability1) {
      alert('You must select at least one type and one ability');
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

  // show input fields when inputs are filled in
  function showMove2() {
    var mv2 = document.getElementById("second-move");
    mv2.classList.remove('hide');
  }
  function showMove3() {
    var mv3 = document.getElementById("third-move");
    mv3.classList.remove('hide');
  }
  function showMove4() {
    var mv4 = document.getElementById("fourth-move");
    mv4.classList.remove('hide');
  }
  function showAbility2() {
    var ab2 = document.getElementById("second-ability");
    ab2.classList.remove('hide');
  }
  function showAbility3() {
    var ab3 = document.getElementById("third-ability");
    ab3.classList.remove('hide');
  }
  
  document.querySelector('.new-pokemon-form').addEventListener('submit', newFormHandler);
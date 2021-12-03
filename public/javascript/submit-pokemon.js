function addClass() {
	var text = document.getElementById('create-blog');
	text.classList.remove('hide');
}
const typeTwo = document.getElementById("type2")
let newOpt = document.createElement("option")
newOpt.setAttribute("value", "test")
newOpt.textContent = "test"

typeTwo.appendChild(newOpt)



async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-body"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_text
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
  
  document.querySelector('.submit-post-form').addEventListener('submit', newFormHandler);
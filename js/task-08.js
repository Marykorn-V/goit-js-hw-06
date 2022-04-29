const form = document.querySelector('.login-form');

function handleSubmit(event) {
    event.preventDefault();
    
    const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const dataObj = {
    email: email.value,
    password: password.value,
  }
  console.log(dataObj);
  
    event.currentTarget.reset();
}

form.addEventListener('submit', handleSubmit);

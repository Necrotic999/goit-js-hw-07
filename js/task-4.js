const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormElSubmit);

function onFormElSubmit(e) { 
    e.preventDefault();

    
    const inputEmail = e.currentTarget.elements.email;
    const inputPass = e.currentTarget.elements.password;

    if (!inputEmail.value || !inputPass.value.trim()) return alert('All form fields must be filled in');
    
    const userData = {
        email: inputEmail.value.trim(),
        password: inputPass.value.trim(),
    }

    console.log(userData);

    e.currentTarget.reset();
}

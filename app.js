const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById('submit');

function Validation(){

    if(username.value === ""){
        throwError(username, "Username field must be filled");
    }
    else{
        successMessage(username)
    }

    if(email.value === ""){
        throwError(email, "email field must be filled");
    }
    else{
        successMessage(email)
    }

    if(password.value === ""){
        throwError(password, "password field must be filled");
    }
    else{
        successMessage(password)
    }

    if(password2.value !== password.value){
        throwError(password2, "password does not match");
    }
    else{
        successMessage(password2)
    }
}


function throwError(input, message){
    // console.log(input.parentElement.getElementByTagName("small"));
    const parent = input.parentElement;
    const small = parent.querySelector("small");
    small.className = "form-control error"
    small.innerText = message;
}

function successMessage(input){
    const parent = input.parentElement;
    const small = parent.querySelector("small");
    input.classList.add("success");
    // input.className = ""
}

submit.addEventListener("click", (event)=>{
    event.preventDefault();
    Validation();
})
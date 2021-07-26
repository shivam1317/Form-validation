
// we will validate name,phone and address
let fname = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');

let nameValid = false;
let emailValid = false;
let phoneValid = false;

fname.addEventListener('blur',()=>{
    
    let regex = /^([a-zA-Z])([0-9a-zA-Z]){2,10}$/;
    let str = fname.value;
 
    if(regex.test(str)){
        fname.classList.add('is-valid');
        fname.classList.remove('is-invalid');
        nameValid = true;
    }else{
        fname.classList.add('is-invalid');
        fname.classList.remove('is-valid');
        nameValid = false;
    }
})

email.addEventListener('blur',()=>{
    
    let regex = /^([_a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    
    if(regex.test(str)){
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        emailValid = true;
    }else{
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        emailValid = false;
    }
})

phone.addEventListener('blur',()=>{
    
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    
    if(regex.test(str)){
        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
        phoneValid = true;
    }else{
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
        phoneValid = false;
    }
})

let submit = document.getElementById('submit');
let msgDiv = document.getElementById('showmsg');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(nameValid && emailValid && phoneValid){
        msgDiv.innerHTML = `<div class="alert alert-success alert-dismissible fade show" id="success" role="alert">
        <strong>Success!</strong> your form has been submitted successfully
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    }
    else{
        msgDiv.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" id="error" role="alert">
        <strong>Error!</strong> some fields are empty or invalid
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
    }
})

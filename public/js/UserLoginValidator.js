const form = document.querySelector('form#userLogin')
const email = document.querySelector('input[name=email]')
const password = document.querySelector('input[name=password]')

const db = require('../../src/database/models')

let errorImput = {};

email.addEventListener('blur', function(){
    if(validator.isEmail(this.value, { ignore_whitespace: true })) {
        this.classList.remove('is-invalid');
        this.nextElementSibling.innerHTML = '';
        delete errorImput[this.name]
    }else{
        this.classList.add('is-invalid');
        this.nextElementSibling.innerHTML = 'Debe ingresar un Email valido';
        errorImput[this.name] = true
    }
});

password.addEventListener('blur', function(){
    if(validator.isEmpty(this.value, { ignore_whitespace: true })) {
        this.classList.add('is-invalid');
        this.nextElementSibling.innerHTML = 'Este campo es obligatorio';
        errorImput[this.name] = true
    }else{
        this.classList.remove('is-invalid');
        this.nextElementSibling.innerHTML = '';
        delete errorImput[this.name]
    }
});

form.addEventListener('submit', function(e){
    if (Object.keys(errorImput).length > 0) {
        e.preventDefault
    }
})

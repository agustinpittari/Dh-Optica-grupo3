const form = document.querySelector('form#userCreate')

const firstname = document.querySelector('input[name=first_name]')

const lastname = document.querySelector('input[name=last_name]')

const email = document.querySelector('input[name=email]')

const password = document.querySelector('input[name=password]')

let errorImput = {};

firstname.addEventListener('blur', function(){
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

lastname.addEventListener('blur', function(){
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

email.addEventListener('blur', function(){
    if(validator.isEmail(this.value, { ignore_whitespace: true })) {
        this.classList.add('is-invalid');
        this.nextElementSibling.innerHTML = 'Este campo es obligatorio';
        errorImput[this.name] = true
    }else{
        this.classList.remove('is-invalid');
        this.nextElementSibling.innerHTML = '';
        delete errorImput[this.name]
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
const form = document.querySelector('#productCreate')

const first_name = document.querySelector('input[name=nombre]')
const description = document.querySelector('input[name=descripcion]')
let errorImput = {};
first_name.addEventListener('blur', function(){
    if(validator.isLength(this.value, {max:4 })){
        this.classList.add('is-invalid')
        errorImput[this.name] = true
    } else {
        this.classList.remove('is-invalid')
        delete errorImput[this.name]
    }
})
description.addEventListener('blur', function(){
    if(validator.isLength(this.value, {max:19 })){
        this.classList.add('is-invalid')
        errorImput[this.name] = true
    } else {
        this.classList.remove('is-invalid')
        delete errorImput[this.name]
    }
})

form.addEventListener('submit', function(e){
    if (Object.keys(errorImput).length > 0) {
        e.preventDefault
        }
})
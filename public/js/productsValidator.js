const form = document.querySelector('#productCreate')

const first_name = document.querySelector('input[name=nombre]')
const description = document.querySelector('input[name=descripcion]')

first_name.addEventListener('blur', function(){
    if(validator.isLength(this.value, {max:4 })){
        this.classList.add('is-invalid')

    } else {
        this.classList.remove('is-invalid')
    }
})
description.addEventListener('blur', function(){
    if(validator.isLength(this.value, {max:19 })){
        this.classList.add('is-invalid')

    } else {
        this.classList.remove('is-invalid')
    }
})

form.addEventListener('submit', function(event){
    event.preventDefault()
})
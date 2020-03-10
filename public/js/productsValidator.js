const form = document.querySelector('#productCreate')

const first_name = document.querySelector('input[name=nombre]')

first_name.addEventListener('blur', function(){
    if(validator.isEmpty(this.value, {ignore_whitespace:true })){
        this.classList.add('is-invalid')
        
    }
})

form.addEventListener('submit', function(event){
    event.preventDefault()
})
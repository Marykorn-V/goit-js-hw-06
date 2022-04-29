const input = document.querySelector('#validation-input');

const valid = () => {

    input.classList.add('valid')
    if (input.classList.contains('invalid')) {
        input.classList.remove('invalid')
    }  
}

const invalid = () => {

    input.classList.add('invalid')
    if (input.classList.contains('valid')) {
        input.classList.remove('valid')
    }
}
input.addEventListener('blur', () => {
    
    if (input.value.length === Number(input.dataset.length)) {
        valid();
    } else { invalid(); }
    
})


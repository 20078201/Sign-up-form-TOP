// Select the password inputs 
const password1 = document.querySelector('[data-password="user_password"]')
const password2 = document.querySelector('[data-password="password_confirm"]')

function matchPassword() {
    const errorMsg = document.querySelector('[data-validate="error"]')
    
    if (password1.value === '' || password2.value === '') {
        errorMsg.classList.remove('error-msg')
        errorMsg.classList.remove('pass-msg')
    } else if (password1.value === password2.value) {
        if (errorMsg.classList.contains('error-msg')){
            errorMsg.classList.remove('error-msg')
        }
        errorMsg.classList.add('pass-msg')
    } else {
        if (errorMsg.classList.contains('pass-msg')){
            errorMsg.classList.remove('pass-msg')
        }
        errorMsg.classList.add('error-msg')
    }
}

password2.addEventListener('change', matchPassword)

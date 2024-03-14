const form = document.getElementById('form')
const password1El  = document.getElementById('password1')
const password2El = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message= document.getElementById('message')

const processFormData = (e) => {
   e.preventDefault();
   console.log(e) //THE PAGE WONT BE RELOADING
}
form.addEventListener("submit", processFormData)

let isValid = false;
const validateForm = () => {
    isValid = form.checkVisibility(  )
    console.log(isValid)
}
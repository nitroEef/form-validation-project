const form = document.getElementById("form");
const password1EL = document.getElementById("password1");
const password2EL = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

const validateForm = () => {
  isValid = form.checkVisibility();
  console.log(isValid);

  // style message for an error
  if (!isValid) {
    message.textContent = "Please fill out the field";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  // check to see if password match..

  if (password1EL.value === password2EL.value) {
    passwordMatch = true;
    password1EL.style.borderColor = "green !important";
    password2EL.style.borderColor = "green !important";
  } else {
    passwordMatch = false;
    message.textContent = "Make sure password match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1EL.style.borderColor = "red !important";
    password2EL.style.borderColor = "red !important";
    return
  }


//   if form is valid and d password match return success message

  if(isValid && passwordMatch) {
    message.textContent = "Successfully registered";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
    return
  }
};

const storeFormData = () => {
   const user = {
    name:form.name.value,
    phone:form.phone.value,
    email:form.email.value,
    website:form.website.value,
    password:form.password.value
   }
console.log(user)
}

const processFormData = (e) => {
    e.preventDefault();
    console.log(e);
    
    validateForm();

    // submit data if valid
    if(isValid & passwordMatch){
        storeFormData()
        form.reset() //for everything to disappear after reg
    }
    
};

form.addEventListener("submit", processFormData);
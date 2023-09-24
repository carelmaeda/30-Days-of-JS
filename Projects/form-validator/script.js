var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('name').value;
    console.log("Name:",name);
    //if input field empty
    if(name.length === 0){
        nameError.innerHTML = 'Name is required';
        nameError.classList.remove("d-none");
        return false;
    }
    //if name does not have 2 words
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        nameError.classList.remove("d-none");
        return false;
    }
    nameError.innerHTML = 'Name Valid';
    nameError.classList.remove("d-none");
    nameError.classList.remove("alert-danger");
    nameError.classList.add("alert-success");
    return true;
}


function validatePhone(){
    var phone = document.getElementById('phone').value;
    console.log("Phone:",phone);
    //if input field empty
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone No is required';
        phoneError.classList.remove("d-none");
        phoneError.classList.remove("alert-success");
        return false;
    }
     //if input lenght different than 10      
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone No must be 10 digits';
        phoneError.classList.remove("d-none");
        phoneError.classList.remove("alert-success");
        return false;
    }
    //if input field has invalid char
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Phone No - Only Digits Please'
        return false;
    }
    phoneError.innerHTML = 'Phone Valid';
    phoneError.classList.remove("d-none");
    phoneError.classList.remove("alert-danger");
    phoneError.classList.add("alert-success");
    return true;
}


function validateEmail(){
    var email = document.getElementById('email').value;
    console.log("Email Value:",email);
    //if input field empty
    if(email.length === 0){
        emailError.innerHTML = 'Email is required';
        emailError.classList.remove("d-none");
    }
    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML = 'Invalid Email';
        emailError.classList.remove("d-none");
        return false;
    }
    emailError.innerHTML = 'Email Valid';
    emailError.classList.remove("d-none");
    emailError.classList.remove("alert-danger");
    emailError.classList.add("alert-success");
    return true;
}

function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;
    //if input field empty
    if(message.length === 0){
        messageError.innerHTML = 'Message is required';
        messageError.classList.remove("d-none");
        return false;
    }
    if(left > 0){
        messageError.innerHTML = 'Your Message needs ' + left + ' carachters more';
        return false;
    }
    messageError.innerHTML = 'Message Valid';
    messageError.classList.remove("d-none");
    messageError.classList.remove("alert-danger");
    messageError.classList.add("alert-success");
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.classList.remove = 'd-none';
        submitError.innerHTML = 'Please fix error(s) to submit form';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
    submitError.innerHTML = 'Form is Valid';
    submitError.classList.remove("d-none");
    submitError.classList.remove("alert-primary");
    submitError.classList.add("alert-success");
    return true;
}





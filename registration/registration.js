const form = document.getElementById("form");
const email = document.getElementById("email_input");
const password = document.getElementById("password_input");
const confirm_password = document.getElementById("confirm_password_input");
const username = document.getElementById("username_input");
const country = document.getElementById("country_input");
const city = document.getElementById("city_input");
const phoneNumber = document.getElementById("phone_number_input");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
menu.style.display = "none";

hamburger.addEventListener("click", () => {
    if(menu.style.display == "none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
});

form.addEventListener("submit", (e) => {
    let error = false;
    if(!/@.+\.[a-zA-Z]{2,}/.test(email.value)){
        document.getElementById("email_error").innerHTML = "invalid email";
        error = true;
    }else{
        document.getElementById("email_error").innerHTML = "";
    }
    if(password.value == ""){
        document.getElementById("password_error").innerHTML = "password field is empty";
        error = true;
    }else{
        document.getElementById("password_error").innerHTML = "";
    }
    if(password.value != confirm_password.value){
        document.getElementById("confirm_password_error").innerHTML = "passwords don't match";
        error = true;
    }else{
        document.getElementById("confirm_password_error").innerHTML = "";
    }
    if(username.value == ""){
        document.getElementById("username_error").innerHTML = "username field is empty";
        error = true;
    }else{
        document.getElementById("username_error").innerHTML = "";
    }
    if(error) e.preventDefault();
});

function keyUp(){
    let strength = "";
    if(/[a-zA-Z]/.test(password.value)) strength = "weak";
    if(strength == "weak" && /[0-9]/.test(password.value)) strength = "medium";
    if(/[a-z]/.test(password.value) && /[A-Z]/.test(password.value) && /[0-9]/.test(password.value)) strength = "strong";
    if(strength == "strong" && /[#$!%&*^]/.test(password.value)) strength = "very strong";
    document.getElementById("password_error").innerHTML = "";
    document.getElementById("password_strength").innerHTML = strength;
}
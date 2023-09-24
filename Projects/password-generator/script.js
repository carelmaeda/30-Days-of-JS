const passwordBox = document.getElementById("password");
const lenght = 12; //password lenght
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-={}[]|<>?/~";

var bannerElement = document.createElement("div");


const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    
    console.log("Password Copied")

    bannerElement.textContent = "Password copied!!!";
        bannerElement.style.position = "fixed";
        bannerElement.style.top = "0";
        bannerElement.style.left = "50%";
        bannerElement.style.transform = "translateX(-50%)";
        bannerElement.style.background = "green";
        bannerElement.style.color = "white";
        bannerElement.style.padding = "10px";
        bannerElement.style.zIndex = "9999";
        bannerElement.style.transition = "opacity 2s ease-in-out";
        
        document.body.appendChild(bannerElement);
        
        setTimeout(function() {
            bannerElement.style.opacity = "0";
            setTimeout(function() {
                document.body.removeChild(bannerElement);
            }, 2000);
        }, 2000);
}
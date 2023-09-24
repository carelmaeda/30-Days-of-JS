let imgBox = document.getElementById("imgBox");
let imgQR = document.getElementById("imgQR");
let textQR = document.getElementById("textQR");


function genetateQR(){
    if(textQR.value.length > 0){
    imgQR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textQR.value;
} else{
    textQR.classList.add('error');
    setTimeout(()=>{
        textQR.classList.remove('error')
    },1000);
}
}
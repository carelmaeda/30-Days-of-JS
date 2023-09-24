let toastBox = document.getElementById('toastBox');
let successMsg = 'This is a success message!'
let errorMsg = 'This is an error message!'
let infoMsg = 'This is an informative message!'



function showToast(msg){
   let toast = document.createElement('div');
   toast.classList.add('alert');
   toast.classList.add('alert-success');
   toast.innerHTML = msg;
   toastBox.appendChild(toast);

//if the msg has different text it displays notification accordingly

   if(msg.includes('error')){
    toast.classList.add('alert-danger');
}
    if(msg.includes('informative')){
    toast.classList.add('alert-warning');
}

setTimeout(() => {
    toast.remove();
    
}, 6000);

}





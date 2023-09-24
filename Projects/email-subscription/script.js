let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopWatch(){
    seconds++;
    //if seconds hit 60, one minute is added
    if(seconds == 60){
        seconds = 0;
        minutes++;
            //if minutes hit 60, one hour is added
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h +":"+ m +":"+ s;
} 

//executes the function above every second

function watchStart(){
    if (timer!== null)
    {
        clearInterval(timer);
    }
        timer = setInterval(stopWatch,1000);
    }

 function watchStop(){
            clearInterval(timer);
        } 

 function watchReset(){
            clearInterval(timer);
            [seconds, minutes, hours] = [0,0,0];
            displayTime.innerHTML = "00:00:00";
        } 
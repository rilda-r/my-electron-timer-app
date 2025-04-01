let displaytime = document.getElementById("display");


function resettimer() {
    displaytime.textContent = document.getElementById("time-to-set").value;
    document.getElementById("resetbutton").disabled = true;
    document.getElementById("pausebutton").disabled = true;
    document.getElementById("startbutton").disabled = false;
}

function settimer() {
    pausetimer();
    resettimer();
    t = document.getElementById("time-to-set").value
    let timeset = parseInt(t);

    if (isNaN(timeset) || timeset<=0){
        document.getElementById("startButton").disabled = true;
        document.getElementById("resetbutton").disabled = true;
        document.getElementById("pausebutton").disabled = true;
        displaytime.textContent = "Give correct Entry";
        return;
    } else {
        // displaytime.textContent = timeset;
        displaytime.textContent = t;

        document.getElementById("startbutton").disabled = false;
        document.getElementById("resetbutton").disabled = true;
        document.getElementById("pausebutton").disabled = true;

    }
    
}

let count_down = null;

function starttimer() {
    
    document.getElementById("startbutton").disabled = true;
    document.getElementById("pausebutton").disabled = false;
    document.getElementById("resetbutton").disabled = true;


    let timeleft = displaytime.textContent-1 ;

    count_down = setInterval(function() {
    if (timeleft<0){
        displaytime.textContent = "Time's Up!";

        document.getElementById("resetbutton").disabled = false;
        document.getElementById("pausebutton").disabled = true;
        document.getElementById("startbutton").disabled = true;
        

        clearInterval(count_down);
    }
    else {
        displaytime.textContent = timeleft;
    }
    timeleft--    
    }, 1000);
}

function pausetimer() {
        clearInterval(count_down);
        document.getElementById("resetbutton").disabled = false;
        document.getElementById("startbutton").disabled = false;
        document.getElementById("pausebutton").disabled = true;
}

document.getElementById("resetbutton").disabled = true;
document.getElementById("startbutton").disabled = true;
document.getElementById("pausebutton").disabled = true;
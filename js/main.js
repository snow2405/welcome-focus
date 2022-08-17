//DOM ELEMENTS

const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focuse = document.getElementById('focus');

//Show Time

function showTime(){
    let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today. getSeconds();

    //const amPm = hour >= 12 ? 'PM' : 'AM';
    //hour = hour % 12 || 12;

    //output 
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);

    console.log ("executed function");
}

function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

showTime();
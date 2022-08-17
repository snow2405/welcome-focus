//DOM ELEMENTS



const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  title = document.getElementById('title'),
  focus = document.getElementById('focus');

//Show Time

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //const amPm = hour >= 12 ? 'PM' : 'AM';
  //hour = hour % 12 || 12;

  //output 
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}`;

  setTimeout(showTime, 1000);

}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


function setup() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('/welcome-focus/img/morning.jpg')";
    title.textContent = 'Good Morning';
    greeting.textContent = 'Good Morning';
    document.body.style.color = 'white';

  } else if (hour < 20) {
    document.body.style.backgroundImage = "url('/welcome-focus/img/afternoon.jpg')";
    title.textContent = 'Good Afternoon';
    greeting.textContent = 'Good Afternoon';
    document.body.style.color = 'black';
  } else {
    document.body.style.backgroundImage = "url('/welcome-focus/img/evening.jpg')";
  
    title.textContent = 'Good Evening';
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }

}


showTime();
setup();
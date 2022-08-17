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
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);

}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


function setup() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    title.textContent = 'Good Morning';
    greeting.textContent = 'Good Morning';

  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    title.textContent = 'Good Morning';
    greeting.textContent = 'Good Morning';
  } else {
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    title.textContent = 'Good Morning';
    greeting.textContent = 'Good Morning';
  }

}


showTime();
setup();
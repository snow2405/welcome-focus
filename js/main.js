//DOM ELEMENTS



const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  title = document.getElementById('title'),
  focus = document.getElementById('focus');

  ny = document.getElementById('newyork');
  ld = document.getElementById('london');
  zh = document.getElementById('zurich');
  kv = document.getElementById('kyiv');
  tk = document.getElementById('tokyo');
//Show Time

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes();
   // sec = today.getSeconds();

  //const amPm = hour >= 12 ? 'PM' : 'AM';
  //hour = hour % 12 || 12;

  //output 
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}`;

  setTimeout(showTime, 1000);

}

function getWorldTime(){
  var h = currentTime.getUTCHours();
  var m = currentTime.getUTCMinutes();
  var s = currentTime.getUTCSeconds();
 //-5, 0 , + 1, + 2, +9

  ny.innerHTML = `${addZero(h)}<span>:</span>${addZero(m)}<span>:</span>${addZero(s)}`;
  ld.innerHTML = `${addZero(h)}<span>:</span>${addZero(m)}<span>:</span>${addZero(s)}`;
  zh.innerHTML = `${addZero(h)}<span>:</span>${addZero(m)}<span>:</span>${addZero(s)}`;
  kv.innerHTML = `${addZero(h)}<span>:</span>${addZero(m)}<span>:</span>${addZero(s)}`;
  tk.innerHTML = `${addZero(h)}<span>:</span>${addZero(m)}<span>:</span>${addZero(s)}`;


  setTimeout(getWorldTime, 1000);
  
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

  } else if (hour < 18) {
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

function setName(e){
  if(e.type == 'keypress'){
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('name', e.target.innerHTML);
      name.blur();
    }
  }else{
    localStorage.setItem('name', e.target.innerHTML);
  }
}

function setFocus(e){
  if(e.type == 'keypress'){
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('focus', e.target.innerHTML);
      focus.blur();
    }
  }else{
    localStorage.setItem('focus', e.target.innerHTML);
  }
}

function getName(){
  if(localStorage.getItem('name') == null){
    name.textContent = '[Enter Name]';
  }else{
    name.textContent = localStorage.getItem('name');
  }

}

function getFocus(){
  if(localStorage.getItem('focus') == null){
    focus.textContent = '[Enter Goal]';
  }else{
    focus.textContent = localStorage.getItem('focus');
  }

}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


getWorldTime();
showTime();
setup();
getName();
getFocus();
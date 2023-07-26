let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
  /*
setInterval(displayTime, 1000);*/


let currentTime = new Date();

console.log(currentTime.getHours());

hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
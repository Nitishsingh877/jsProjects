const colors = ["green","red","rgba(133,122,120)", "#f15025","#5d8aa8","#efdecd"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" ,function() {
    // get random number bw 0 3
  const randomNumber =getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}
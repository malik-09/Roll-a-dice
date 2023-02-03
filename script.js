
'use strict'
const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");
const btnNewgame = document.querySelector(".newgame");
const player1Points = document.querySelector(".playerSUm--1");
const player2Points = document.querySelector(".playerSUm--2");
const player1Total = document.querySelector(".playerTotal--1");
const player2Total = document.querySelector(".playerTotal--2");
const imgDice = document.querySelector("img");
const player1BOX = document.querySelector(".div1");
const player2BOX = document.querySelector(".div3");
player1BOX.classList.add("player-active");

let sum = 0;

function displayPint1() {
  player1Points.textContent = sum;
}
function displayPint2() {
  player2Points.textContent = sum;
}

btnRoll.addEventListener('click', function () {
  if (player1BOX.classList.contains("player-active")) {
    let random = Math.floor(Math.random() * 6 + 1);
    imgDice.src = `dice-${random}.png`;
    if (random != 1) {
      sum += random;
      displayPint1();
    } else {
      sum = 0;
      points1ToZero();
    }
  } else {
    let random = Math.floor(Math.random() * 6 + 1);
    imgDice.src = `dice-${random}.png`;
    if (random != 1) {
      sum += random;
      displayPint2();
    } else {
      sum = 0;
      points2ToZero();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (player1BOX.classList.contains("player-active")) {
    points1ToZero();
  } else {
    points2ToZero();
  }
});

function points1ToZero() {
  player1Total.textContent = sum + Number(player1Total.textContent);
  sum = 0;
  displayPint1();
  player1BOX.classList.remove("player-active");
  player2BOX.classList.add("player-active");
}
function points2ToZero() {
  player2Total.textContent = sum + Number(player2Total.textContent);
  sum = 0;
  displayPint2();
  player1BOX.classList.add("player-active");
  player2BOX.classList.remove("player-active");
}
btnNewgame.addEventListener('click',function(){
  sum=0
  displayPint1()
  displayPint2()
  player1Total.textContent = sum
  player2Total.textContent = sum

})

document.addEventListener('keydown',function(e){
  if(e.key==='Escape' ){
    sum=0
    displayPint1()
    displayPint2()
    player1Total.textContent = sum
    player2Total.textContent = sum

  }

})
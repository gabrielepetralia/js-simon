let randNumbers = [];
let inputNumbers = [];
let guessedNumbers = [];
let min;
let max;
let points = 0;

const genNum = document.getElementById("gen-num");
const checkNum = document.getElementById("check-num")
const numCellCollection = document.getElementsByClassName("num-rand");
const numInputCollection = document.querySelectorAll("input");
const heading = document.querySelector("h2");
const output = document.querySelector(".message");

checkNum.classList.add("hide");

genNum.addEventListener("click", () => {
  reset();
  
  min = parseInt(document.getElementById("min-num").value);
  max = parseInt(document.getElementById("max-num").value);

  if(min < max) {
    if ( max - min < 4) {
      alert("Max deve essere di almeno 4 più grande di Min");
    } else {
      generateRandomNumbers();
      console.log(randNumbers)
    }
  } else {
    alert("Min deve essere minore di Max");
  }
  startSetTimeout()
})

checkNum.addEventListener("click", () => {
  getNumInput();
  check();
  checkNum.classList.add("hide");
})

/*--------------- Functions ---------------*/
function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generateRandomNumbers () {
  i = 0;
  while(randNumbers.length < 5) {
    num = getRandomNumber(min, max);
    if(!randNumbers.includes(num)) {
      randNumbers.push(num);
      numCellCollection[i].innerHTML =  num;
      i++;
    }
  }
}

function startSetTimeout() {
  setTimeout(function() {
    for(let i=0 ; i<numCellCollection.length ; i++) {
      numCellCollection[i].innerHTML = "";
    }
    heading.innerHTML = "Inserisci i numeri (tutti diversi)";
    checkNum.classList.remove("hide");
    toggleNumInput();
  }, 5000);
}

function toggleNumInput() {
  for(let i=2 ; i<numInputCollection.length ; i++) {
    numInputCollection[i].classList.toggle("hide");
    numInputCollection[i].value="";
  }
}

function getNumInput() {
  for(let i=2 ; i<numInputCollection.length ; i++) {
    inputNumbers.push(parseInt(numInputCollection[i].value));
  }
}

function check () {
  for(let i=0 ; i<randNumbers.length ; i++) {
    if(randNumbers.includes(inputNumbers[i])) {
      points++;
      guessedNumbers.push(inputNumbers[i]);
    }

    output.innerHTML = `Hai indovinato ${points} numeri :`;
    for(let i=0; i<guessedNumbers.length ; i++) {
      if(i===guessedNumbers.length - 1) {
        output.innerHTML += ` ${guessedNumbers[i]}.`;
      } else {
        output.innerHTML += ` ${guessedNumbers[i]},`;
      }
    }
  }
}

function reset(){
  toggleNumInput();
  heading.innerHTML = "Memorizza i numeri"
  checkNum.classList.add("hide");
  output.innerHTML="";
  randNumbers = [];
  inputNumbers= [];
  guessedNumbers = [];
  points = 0;
}

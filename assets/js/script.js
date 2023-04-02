let randNumbers = [];
let min;
let max;

const genNum = document.getElementById("gen-num");
const checkNum = document.getElementById("check-num")
const numsRand = document.getElementsByClassName("num-rand");
const numInput = document.querySelectorAll("input");
const insNum = document.querySelector("h2");

insNum.classList.add("hide2");
checkNum.classList.add("hide");

genNum.addEventListener("click", () => {
  toggleNumInput();
  insNum.classList.add("hide2");
  checkNum.classList.add("hide");
  randNumbers = [];
  
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
      numsRand[i].innerHTML =  num;
      i++;
    }
  }
}

function startSetTimeout() {
  setTimeout(function() {
    for(let i=0 ; i<5 ; i++) {
      numsRand[i].innerHTML = "";
    }
    insNum.classList.remove("hide2");
    checkNum.classList.remove("hide");
    toggleNumInput();
  }, 5000);
}

function toggleNumInput() {
  for(let i=2 ; i<numInput.length ; i++) {
    numInput[i].classList.toggle("hide");
  }
}

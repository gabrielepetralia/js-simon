let randNumbers = [];
let min;
let max;

const genNum = document.getElementById("gen-num");
const cells = document.getElementsByClassName("num-cell");

genNum.addEventListener("click", () => {
  min = parseInt(document.getElementById("min-num").value);
  max = parseInt(document.getElementById("max-num").value);
  randNumbers = [];
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
      cells[i].innerHTML =  num;
      i++;
    }
  }
}

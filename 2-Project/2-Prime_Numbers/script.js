document.getElementById("form").addEventListener("submit", (e) => {

e.preventDefault();

let num = Number(document.getElementById("num").value);

let result = "";

for(let i = 2; i <= num; i++){

  let isPrime = true;

  for(let j = 2; j < i; j++){

    if(i % j === 0){
      isPrime = false;
      break;
    }

  }

  if(isPrime){
    result += i + " ";
  }

}

document.getElementById("result").innerHTML =
"Prime Numbers:<br>" + result;

});
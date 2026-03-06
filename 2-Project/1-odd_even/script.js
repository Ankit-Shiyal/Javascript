document.getElementById("form").addEventListener("submit", (e) => {

  e.preventDefault();

  let num = Number(document.getElementById("num").value);

  let even = 0;
  let odd = 0;

  for (let i = 1; i <= num; i++) {

    if (i % 2 === 0) {
      even++;
    } else {
      odd++;
    }

  }

  document.getElementById("result").innerHTML =
    "Even Numbers: " + even + "<br>" +
    "Odd Numbers: " + odd;

});
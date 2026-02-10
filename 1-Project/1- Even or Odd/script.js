document.getElementById("form").addEventListener("submit",  (e) => {
  e.preventDefault();

  let num = Number(document.getElementById("num").value);
  let result = document.getElementById("result");

  if (num % 2 === 0) {
    result.textContent= "Even Number";
  } else {
    result.textContent= "Odd Number";
  }
});

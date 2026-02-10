document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let num = Number(document.getElementById("num").value);
  let result = document.getElementById("result");

  let sum = 0;
  let temp = Math.abs(num);

  while (temp > 0) {
    sum = sum + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  result.textContent = "Sum of digits = " + sum;
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let n3 = Number(document.getElementById("n3").value);

  let result = document.getElementById("result");

  if (n1 >= n2 && n1 >= n3) {
    result.textContent = "Largest Number is " + n1;
  } else if (n2 >= n1 && n2 >= n3) {
    result.textContent = "Largest Number is " + n2;
  } else {
    result.textContent = "Largest Number is " + n3;
  }
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let num = document.getElementById("num").value;   // string
  let result = document.getElementById("result");

  let rev = "";

  for (let i = num.length - 1; i >= 0; i--) {
    rev = rev + num[i];
  }

  result.textContent = "Reversed Number = " + rev;
});

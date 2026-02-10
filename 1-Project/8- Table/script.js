document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let num = Number(document.getElementById("num").value);
  let result = document.getElementById("result");

  let table = "";

  for (let i = 1; i <= 10; i++) {
    table += num + " * " + i + " = " + (num * i) + "\n";
  }

  result.textContent = table;
});

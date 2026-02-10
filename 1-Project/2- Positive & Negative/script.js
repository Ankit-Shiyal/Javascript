document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let num = Number(document.getElementById("num").value);
  let result = document.getElementById("result");

  if (num > 0) {
    result.textContent = "Positive Number";
  } else if (num < 0) {
    result.textContent = "Negative Number";
  } else {
    result.textContent = "Zero";
  }
});

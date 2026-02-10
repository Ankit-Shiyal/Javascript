document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let temp = Number(document.getElementById("temp").value);
  let type = document.getElementById("type").value;
  let result = document.getElementById("result");

  if (type === "CtoF") {
    let f = (temp * 9 / 5) + 32;
    result.textContent = temp + " °C = " + f.toFixed(2) + " °F";
  } else {
    let c = (temp - 32) * 5 / 9;
    result.textContent = temp + " °F = " + c.toFixed(2) + " °C";
  }
});

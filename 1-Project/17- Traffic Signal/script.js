document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let signal = document.getElementById("signal").value;
  let result = document.getElementById("result");

  if (signal === "red") {
    result.textContent = "STOP";
  } else if (signal === "yellow") {
    result.textContent = "WAIT";
  } else if (signal === "green") {
    result.textContent = "GO";
  } else {
    result.textContent = "Please select a signal";
  }
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let year = Number(document.getElementById("year").value);
  let result = document.getElementById("result");

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result.textContent = year + " is a Leap Year";
  } else {
    result.textContent = year + " is NOT a Leap Year";
  }
});
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);
  let result = document.getElementById("result");

  let bmi = weight / (height * height);
  let status = "";

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 25) {
    status = "Normal";
  } else if (bmi < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  result.textContent =
    "BMI = " + bmi.toFixed(2) + " (" + status + ")";
});

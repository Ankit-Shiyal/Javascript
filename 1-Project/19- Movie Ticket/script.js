document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let age = Number(document.getElementById("age").value);
  let result = document.getElementById("result");

  let price = 0;

  if (age < 12) {
    price = 100;
  } else if (age >= 60) {
    price = 120;
  } else {
    price = 150;
  }

  result.textContent = "Ticket Price = ₹" + price;
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let amount = Number(document.getElementById("amount").value);
  let result = document.getElementById("result");

  let discount = 0;

  if (amount >= 5000) {
    discount = amount * 0.20;
  } else if (amount >= 2000) {
    discount = amount * 0.10;
  } else {
    discount = 0;
  }

  let finalAmount = amount - discount;

  result.textContent =
    "Discount = ₹" + discount + " | Final Amount = ₹" + finalAmount;
});

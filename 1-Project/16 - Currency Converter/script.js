document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let amount = Number(document.getElementById("amount").value);
  let type = document.getElementById("type").value;
  let result = document.getElementById("result");

  let RATE = 90; 

  if (type === "INRtoUSD") {
    let usd = amount / RATE;
    result.textContent = "₹" + amount + " = $" + usd.toFixed(2);
  } else {
    let inr = amount * RATE;
    result.textContent = "$" + amount + " = ₹" + inr.toFixed(2);
  }
});

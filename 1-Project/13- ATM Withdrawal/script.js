document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let balance = Number(document.getElementById("balance").value);
  let withdraw = Number(document.getElementById("withdraw").value);
  let result = document.getElementById("result");

  if (withdraw <= 0) {
    result.textContent = "Enter valid withdrawal amount";
  } else if (withdraw > balance) {
    result.textContent = "Insufficient Balance";
  } else {
    let remaining = balance - withdraw;
    result.textContent =
      "Withdrawal Successful. Remaining Balance = ₹" + remaining;
  }
});

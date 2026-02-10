document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let num = document.getElementById("num").value; // string
  let result = document.getElementById("result");

  let rev = "";

  for (let i = num.length - 1; i >= 0; i--) {
    rev = rev + num[i];
  }

  if (num === rev) {
    result.textContent = "Palindrome Number";
  } else {
    result.textContent = "Not a Palindrome Number";
  }
});

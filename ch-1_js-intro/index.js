const button = document.getElementsByClassName("btn")[0];

let userStatus = document.getElementById("status");

button.addEventListener("click", () => {
  userStatus.textContent = "logged in";
});
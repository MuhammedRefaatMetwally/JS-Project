let loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", function (e) {
  let emailInput = document.querySelector("#emailInput");
  let passwordInput = document.querySelector("#passwordInput");
  let getEmail = localStorage.getItem("emailInput");
  let getPassword = localStorage.getItem("passwordInput");

  e.preventDefault();
  if (emailInput.value == null || passwordInput.value == "") {
    alert("Please Fill in Data");
  } else {
    if (
      getEmail &&
      getEmail.trim() == emailInput.value.trim() &&
      getPassword &&
      getPassword.trim() == passwordInput.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
      alert("username or password is wrong");
    }
  }
});

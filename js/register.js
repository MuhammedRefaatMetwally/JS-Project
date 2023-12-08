let registerBtn = document.querySelector("#register-btn");

registerBtn.addEventListener("click", function (e) {
  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let emailInput = document.querySelector("#emailInput");
  let passwordInput = document.querySelector("#passwordInput");

  e.preventDefault();
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    emailInput.value == "" ||
    passwordInput.value == ""
  ) {
    alert("Please Enter Data");
  } else {
    localStorage.setItem("firstName", firstName.value);
    localStorage.setItem("lastName", lastName.value);
    localStorage.setItem("emailInput", emailInput.value);
    localStorage.setItem("passwordInput", passwordInput.value);

    setTimeout(() => {
      window.location = "index.html";
    }, 1500);
  }
});

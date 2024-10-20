const firstNameInput = document.querySelector(".fiName");
const lastNameInput = document.querySelector(".laName");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".pass");
const errorIcons = document.querySelectorAll(".error-icon");
const errorTxt = document.querySelectorAll(".error-txt");
const Submit = document.querySelector(".claim");

Submit.addEventListener("click", (e) => {
  e.preventDefault();
  let hasErrors = false;

  errorIcons.forEach((icon) => (icon.style.display = "none"));
  errorTxt.forEach((text) => (text.textContent = ""));

  if (firstNameInput.value.trim() === "") {
    hasErrors = true;
    errorIcons[0].style.display = "block";
    errorTxt[0].textContent = "First Name can't be empty";
  }

  if (lastNameInput.value.trim() === "") {
    hasErrors = true;
    errorIcons[1].style.display = "block";
    errorTxt[1].textContent = "Last Name can't be empty";
  }

  if (!isValidEmail(emailInput.value.trim())) {
    hasErrors = true;
    errorIcons[2].style.display = "block";
    errorTxt[2].textContent = "Looks like this is not an email";
  }

  if (passwordInput.value.trim() === "") {
    hasErrors = true;
    errorIcons[3].style.display = "block";
    errorTxt[3].textContent = "Password can't be empty";
  }

  if (!hasErrors) {
    swal({
      title: "Good job!",
      text: "You've successfully claimed!",
      icon: "success",
      button: "Aww yiss!",
    });
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

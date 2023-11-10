main();

function main() {
  const form = document.querySelector(".main-form");
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      console.log("error");
      e.preventDefault();
      validateEmailError();
      validatePasswordError();
      validateConfirmPasswordError();
      validateCountryZipCode();
    }
  });
  setupValidations();
}

function setupValidations() {
  setupEmailValidation();
  setupPasswordValidation();
  setupConfirmPasswordValidation();
  setupCountryZipCodeValidation();
}

/**
 *
 * @param {Element} errorElement
 * @param {string} message
 */
function showError(errorElement, message) {
  errorElement.textContent = message;
}

function containsUppercase(str) {
  return /[A-Z]/.test(str);
}

function setupEmailValidation() {
  const email = document.getElementById("email");

  email.addEventListener("input", (e) => {
    validateEmailError();
  });
}

function validateEmailError() {
  const email = document.getElementById("email");
  const emailError = document.querySelector(".email-error");
  if (email.validity.valueMissing) {
    showError(emailError, "You need to enter an email address.");
  } else if (email.validity.typeMismatch) {
    showError(emailError, "Entered value needs to be an email address.");
  } else {
    showError(emailError, "");
  }
}

function setupPasswordValidation() {
  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("confirm-password");

  password.addEventListener("input", (e) => {
    validatePasswordError();
    if (passwordConfirm.value.length > 0) {
      validateConfirmPasswordError();
    }
  });
}

function validatePasswordError() {
  const password = document.getElementById("password");
  const passwordError = document.querySelector(".password-error");
  if (password.validity.valueMissing) {
    showError(passwordError, "Please input password.");
  } else if (password.value.length < 8) {
    showError(
      passwordError,
      "Length is too short, please input at least 8 characters and at least on uppercase characters."
    );
  } else if (!containsUppercase(password.value)) {
    showError(
      passwordError,
      "No uppercase characters, please input at least 8 characters and at least on uppercase characters."
    );
  } else {
    showError(passwordError, "");
  }
}

function setupConfirmPasswordValidation() {
  const passwordConfirm = document.getElementById("confirm-password");
  passwordConfirm.addEventListener("input", (e) => {
    validateConfirmPasswordError();
  });
}

function validateConfirmPasswordError() {
  const password = document.getElementById("password");
  const passwordConfirm = document.getElementById("confirm-password");
  const passwordConfirmError = document.querySelector(
    ".confirm-password-error"
  );
  if (passwordConfirm.validity.valueMissing) {
    showError(passwordConfirmError, "Please confirm your password.");
  } else if (password.value != passwordConfirm.value) {
    showError(
      passwordConfirmError,
      "confirm password not match previously input value."
    );
  } else {
    showError(passwordConfirmError, "");
  }
}

function setupCountryZipCodeValidation() {
  const zipField = document.getElementById("ZIP");
  const country = document.getElementById("Country");

  zipField.addEventListener("input", (e) => {
    validateCountryZipCode();
  });
  country.addEventListener("input", (e) => {
    validateCountryZipCode();
  });
}

function validateCountryZipCode() {
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };
  const country = document.getElementById("Country").value;
  const zipField = document.getElementById("ZIP");
  const zipError = document.querySelector(".zip-error");

  const constraint = new RegExp(constraints[country][0], "");

  console.log(constraint);
  if (zipField.value.valueMissing) {
    showError(zipError, "please input zip code of your chosen country.");
  } else if (!constraint.test(zipField.value)) {
    showError(zipError, constraints[country][1]);
  } else {
    showError(zipError, "");
  }
}

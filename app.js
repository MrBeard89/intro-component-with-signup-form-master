//Form elements
const firstName = document.querySelector('.firstname')
const lastName = document.querySelector('.lastname')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const firstNameLabel = document.querySelector('.firstname_label')
const lastNameLabel = document.querySelector('.lastname_label')
const emailLabel = document.querySelector('.email_label')
const passwordLabel = document.querySelector('.password_label')

//Claim Button - Submit
const claimButton = document.querySelector('.btn')

//Valid Regex variables
const regex = {
  validFirstName: /^[A-Z]{1}[a-z]{1}[a-z]+$/,
  validLastName: /^[A-Z]{1}[a-z]{1}[a-z]+$/,
  validEmail:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
  validPassword: /^[a-zA-Z0-9-]+$/,
}

//Firstname Validation Handler
const firstNameValidation = function () {
  if (firstName.value.match(regex.validFirstName)) {
    firstNameLabel.textContent = 'Valid Firstname'
    firstNameLabel.style.color = 'green'
    firstName.style.borderColor = 'green'
    return true
  } else if (firstName.value <= 0) {
    firstNameLabel.textContent = 'Firstname cannot be empty'
    firstNameLabel.style.color = 'red'
    firstName.style.borderColor = 'red'
    return false
  } else {
    firstNameLabel.textContent = 'Invalid Firstname,please try again'
    firstNameLabel.style.color = 'red'
    firstName.style.borderColor = 'red'
    return false
  }
}
//Lastname Validation Handler
const lastNameValidation = function () {
  if (lastName.value.match(regex.validLastName)) {
    lastNameLabel.textContent = 'Valid Lastname'
    lastNameLabel.style.color = 'green'
    lastName.style.borderColor = 'green'
    return true
  } else if (lastName.value <= 0) {
    lastNameLabel.textContent = 'Lastname cannot be empty'
    lastNameLabel.style.color = 'red'
    lastName.style.borderColor = 'red'
    return false
  } else {
    lastNameLabel.textContent = 'Invalid Lastname,please try again'
    lastNameLabel.style.color = 'red'
    lastName.style.borderColor = 'red'
    return false
  }
}
//Email Validation Handler
const emailValidation = function () {
  if (email.value.match(regex.validEmail)) {
    emailLabel.textContent = 'Valid Email'
    emailLabel.style.color = 'green'
    email.style.borderColor = 'green'
    return true
  } else if (email.value <= 0) {
    emailLabel.textContent = 'Email cannot be empty'
    emailLabel.style.color = 'red'
    email.style.borderColor = 'red'
    return false
  } else {
    emailLabel.textContent = 'Invalid Email,please try again'
    emailLabel.style.color = 'red'
    email.style.borderColor = 'red'
    return false
  }
}
//Password Validation Handler
const passwordValidation = function () {
  if (password.value.match(regex.validPassword)) {
    passwordLabel.textContent = 'Valid Password'
    passwordLabel.style.color = 'green'
    password.style.borderColor = 'green'
    return true
  } else if (password.value <= 0) {
    passwordLabel.textContent = 'Password cannot be empty'
    passwordLabel.style.color = 'red'
    password.style.borderColor = 'red'
    return false
  } else {
    passwordLabel.textContent = 'Invalid Password,please try again'
    passwordLabel.style.color = 'red'
    password.style.borderColor = 'red'
    return false
  }
}

//EventListeners
firstName.addEventListener('keyup', firstNameValidation)
lastName.addEventListener('keyup', lastNameValidation)
email.addEventListener('keyup', emailValidation)
password.addEventListener('keyup', passwordValidation)

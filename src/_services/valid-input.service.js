export const validity = {
  emailForm,
  passwordForm,
  passwordConfirmation
}

function emailForm(value) {
  return value.length > 1
}

function passwordForm(value) {
  return value.length > 1
}

function passwordConfirmation(password, confirmPassword) {
  return password === confirmPassword
}

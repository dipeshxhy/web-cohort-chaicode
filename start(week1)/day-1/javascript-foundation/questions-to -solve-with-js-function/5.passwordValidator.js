function validatePassword(password) {
  if (password.length >= 8) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>\-_+=;`~\\\]\[']).*$/;

    return regex.test(password);
  }
  return false;
}
const password = "ilovejs123";
if (validatePassword(password)) {
  console.log("validate password");
} else {
  console.log("invalid password");
}

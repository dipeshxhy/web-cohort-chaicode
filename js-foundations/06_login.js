function login(username, password) {
  if (password) {
    password = String(password);
  }
  if (username === "admin" && password === "1234") {
    return "Login successful";
  } else {
    return "Nope!";
  }
}
console.log(login("admin", "1234"));
console.log(login("admin", 1234));

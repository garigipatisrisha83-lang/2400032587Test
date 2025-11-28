function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "admin" && p === "123") {
    document.getElementById("msg").innerText = "Login Successful!";
  } else {
    document.getElementById("msg").innerText = "Invalid Credentials";
  }
}

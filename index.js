//function to store data to localstorage
function store() {
  //to get data input from form by user
  var email = document.getElementById("email");
  var pw = document.getElementById("pw");

  // regex for mail and pw
  const mailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const pwFormat = /^[A-Z][A-Za-z0-9]{1,11}$/;

  if (!email) {
    alert("beliau, username mohon diisi!");
  } else if (!mailFormat.test(email.value)) {
    alert("beliau, mohon input email dengan benar");
  } else if (!pw) {
    alert("beliau, password mohon diisi!");
  } else if (!pwFormat.test(pw.value)) {
    alert(
      "beliau, password setidaknya harus ada 1 uppercase, 1 lowercase, dan angka"
    );
  } else {
    alert("success!");
    localStorage.setItem("email", email.value);
    localStorage.setItem("pw", pw.value);
  }
}

//function to check data stored in localstorage
function check() {
  //to get data input form form by user
  var emailInput = document.getElementById("emailLogin");
  var pwInput = document.getElementById("pwLogin");

  //variable to get item from localstorage by key
  // var getName = localStorage.getItem(key);
  var getEmail = localStorage.getItem("email");
  var getPw = localStorage.getItem("pw");

  //logic if input data = data from localstorage.
  if (emailInput.value == getEmail && pwInput.value == getPw) {
    alert("success");
    window.location.href = "crud-app.html";
  } else {
    alert("error");
  }
}

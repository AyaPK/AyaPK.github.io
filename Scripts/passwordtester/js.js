function testPassword() {
  //Pull password from input
  var passwordInput = document.getElementById("passInput").value;

  //prepare checks
  var finalCheck = [

  ]
  var lengthCheck = true
  var numCheck = false
  var capCheck = false
  var specCheck = false

  //Check Password Length
  if (passwordInput.length < 8) {
    lengthCheck = false
    finalCheck.push("Password is too short, please use at least 8 characters <br/>");
  }


  //Check for a number
  for (a = 0; a < passwordInput.length; a++) {
    var num = passwordInput[a]
    if (isNaN(num) === false) {
      numCheck = true
    }
  }
  if (numCheck === false) {
    finalCheck.push("Please use at least one number in your password <br/>");
  }

  //Check for a capital
  for (b = 0; b < passwordInput.length; b++) {
    var cap = passwordInput[b]
    if (isNaN(cap) && cap === cap.toUpperCase() && /^[a-zA-Z]$/.test(cap) == true) {
      capCheck = true
    }
  }
  if (capCheck == false) {
    finalCheck.push("Please use at least one capital letter in your password <br/>");
  }

  //Check for special characters
  for (c = 0; c < passwordInput.length; c++) {
    var spec = passwordInput[c]
    if (isNaN(spec) && /^[a-zA-Z0-9]$/.test(spec) == false) {
      specCheck = true
    }
  }
  if (specCheck == false) {
    finalCheck.push("Please use at least one special character <br/>");
  }

  //Check results and feed them back
  if (lengthCheck && numCheck && capCheck && specCheck) {
    finalCheck.push("Your password meets all of our requirements!");
  } else {
    finalCheck.push("There are issues with your password, please check them and fix them");
  }
  document.getElementById("result").innerHTML = (finalCheck.join(""));
}

//reveal password
function reveal() {
  document.getElementById("passInput").type = "text";
}
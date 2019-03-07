function testPassword(){
  //Pull password from input
  var passwordInput = document.getElementById("passInput").value;

  //prepare checks
  var finalCheck = [

  ]
  var lengthCheck = true
  var numCheck = false

  //Check Password Length
  if(passwordInput.length<8){
    lengthCheck = false
    finalCheck.push("Password is too short, please use at least 8 characters <br/>");
    }
  

  //Check for a number
  for(a = 0; a < passwordInput.length; a++){
    var num = passwordInput[a]
    if (isNaN(num) === false){
        numCheck = true
    }
  }
  if (numCheck === false){
    finalCheck.push("Please use at least one number in your password <br/>");
  }


 


  if(lengthCheck && numCheck){
    finalCheck.push("Your password meets all of our requirements!");
  } else {
    finalCheck.push("There are issues with your password, please check them and fix them");
  }
  document.getElementById("result").innerHTML = (finalCheck.join(""));
}
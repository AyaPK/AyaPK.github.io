var passwordInput = prompt("")
var truth = false
for(a = 0; a < passwordInput.length; a++){
  var num = passwordInput[a]
  if(!isNaN(num)){
      truth = true
  }
}

if (truth){
  console.log("true")
} else {
  console.log("false")
}
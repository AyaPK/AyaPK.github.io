function fizzbuzzPaste() {
  var numberOne = document.getElementById("num1").value;
  var numberTwo = document.getElementById("num2").value;
  var fizz1 = document.getElementById("fizz1").value;
  var buzz2 = document.getElementById("buzz2").value;

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    var array = "Please put a number in the first two boxes"
    document.getElementById("result").innerHTML = (array);
    return
  }


  var array = [

  ]

  function FIZZ() { array.push(fizz1 + "!<br/>"); }

  function BUZZ() { array.push(buzz2 + "!<br/>"); }

  function FIZZBUZZ() { array.push(fizz1 + buzz2 + "!<br/>"); }

  function divisible(first, second) {
    if (first % second == 0) {
      return true
    }
  }

  for (a = 0; a < 101; a++) {
    fizCheck = divisible(a, numberOne)
    buzzCheck = divisible(a, numberTwo)

    if (fizCheck && buzzCheck) { FIZZBUZZ() }
    else if (fizCheck) { FIZZ() }
    else if (buzzCheck) { BUZZ() }
    else { array.push(a + "<br/>"); }
  }
  document.getElementById("result").innerHTML = (array.join(""));
}
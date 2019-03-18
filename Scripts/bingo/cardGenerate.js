var cardNumbers = []
var pulledNumbers = []
var lastNumber = 0
var bingo = false
var match1 = false
var match2 = false
var match3 = false
var match4 = false
var match5 = false
var match6 = false
var match7 = false
var match8 = false
var match9 = false


//generate a card
function generateCard() {

   cardNumbers = []
   pulledNumbers = []
   lastNumber = ""
   bingo = false
   document.getElementById("pulledNumbers").innerHTML = (pulledNumbers);
   document.getElementById("lastNumber").innerHTML = (lastNumber);
   document.getElementById("bingoTest").innerHTML = ("");

   function draw() {
      for (a = 1; a < 10; a++) {

         chosenNumber = Math.floor(Math.random() * 99)
         if (!cardNumbers.includes(chosenNumber)) {
            cardNumbers.push(chosenNumber)
         } else { draw() }
      }
   }
   draw()
   console.log(cardNumbers)

   document.getElementById("number1").innerHTML = (cardNumbers[0]);
   document.getElementById("number2").innerHTML = (cardNumbers[1]);
   document.getElementById("number3").innerHTML = (cardNumbers[2]);
   document.getElementById("number4").innerHTML = (cardNumbers[3]);
   document.getElementById("number5").innerHTML = (cardNumbers[4]);
   document.getElementById("number6").innerHTML = (cardNumbers[5]);
   document.getElementById("number7").innerHTML = (cardNumbers[6]);
   document.getElementById("number8").innerHTML = (cardNumbers[7]);
   document.getElementById("number9").innerHTML = (cardNumbers[8]);

}
//end of card generation

//pull a number
function test() {
   numberDraw = Math.floor(Math.random() * 99)
   if (!pulledNumbers.includes(numberDraw)) {
      pulledNumbers.push(numberDraw)
      lastNumber = numberDraw
      pulledNumbers.sort(function (a, b) { return a - b })
      document.getElementById("lastNumber").innerHTML = ("And the number is... <b>" + lastNumber + "!!!</b>");
      document.getElementById("pulledNumbers").innerHTML = (pulledNumbers);

   } else {
      test()
   }
}
//end of number pull


//check for matches
function check() {
   for (b = 0; b < pulledNumbers.length; b++) {
      if (pulledNumbers.includes(cardNumbers[b])) {
         cardNumbers[b] = ("<p style=\"background-color:lightgreen\"><s>" + cardNumbers[b] + "</s></p>")
         document.getElementById("number1").innerHTML = (cardNumbers[0]);
         document.getElementById("number2").innerHTML = (cardNumbers[1]);
         document.getElementById("number3").innerHTML = (cardNumbers[2]);
         document.getElementById("number4").innerHTML = (cardNumbers[3]);
         document.getElementById("number5").innerHTML = (cardNumbers[4]);
         document.getElementById("number6").innerHTML = (cardNumbers[5]);
         document.getElementById("number7").innerHTML = (cardNumbers[6]);
         document.getElementById("number8").innerHTML = (cardNumbers[7]);
         document.getElementById("number9").innerHTML = (cardNumbers[8]);
      }
   }
}
//end of match check


//reset game
function reset() {
   cardNumbers = ["", "", "", "", "", "", "", "", ""]
   pulledNumbers = [""]
   lastNumber = [""]
   bingo = false
   document.getElementById("bingoTest").innerHTML = ("");
   document.getElementById("number1").innerHTML = (cardNumbers[0]);
   document.getElementById("number2").innerHTML = (cardNumbers[1]);
   document.getElementById("number3").innerHTML = (cardNumbers[2]);
   document.getElementById("number4").innerHTML = (cardNumbers[3]);
   document.getElementById("number5").innerHTML = (cardNumbers[4]);
   document.getElementById("number6").innerHTML = (cardNumbers[5]);
   document.getElementById("number7").innerHTML = (cardNumbers[6]);
   document.getElementById("number8").innerHTML = (cardNumbers[7]);
   document.getElementById("number9").innerHTML = (cardNumbers[8]);
   document.getElementById("pulledNumbers").innerHTML = (cardNumbers[1]);
   document.getElementById("lastNumber").innerHTML = (lastNumber);
}
//end of reset

//check for bingo
function bingoCheck() {
   num1 = cardNumbers[0]

   if (/<s>/.test(cardNumbers[0])) { match1 = true } else { match1 = false }
   if (/<s>/.test(cardNumbers[1])) { match2 = true } else { match2 = false }
   if (/<s>/.test(cardNumbers[2])) { match3 = true } else { match3 = false }
   if (/<s>/.test(cardNumbers[3])) { match4 = true } else { match4 = false }
   if (/<s>/.test(cardNumbers[4])) { match5 = true } else { match5 = false }
   if (/<s>/.test(cardNumbers[5])) { match6 = true } else { match6 = false }
   if (/<s>/.test(cardNumbers[6])) { match7 = true } else { match7 = false }
   if (/<s>/.test(cardNumbers[7])) { match8 = true } else { match8 = false }
   if (/<s>/.test(cardNumbers[8])) { match9 = true } else { match9 = false }

   if (match1 && match2 && match3) {
      bingo = true
   } else if (match4 && match5 && match6) {
      bingo = true
   } else if (match7 && match8 && match9) {
      bingo = true
   } else if (match1 && match4 && match7) {
      bingo = true
   } else if (match2 && match5 && match8) {
      bingo = true
   } else if (match3 && match6 && match9) {
      bingo = true
   } else if (match1 && match5 && match9) {
      bingo = true
   } else if (match3 && match5 && match7) {
      bingo = true
   } else {
      bingo = false
   }


   if (bingo) {
      document.getElementById("bingoTest").innerHTML = ("<b>BINGO!!!</b>");
   } else {
      document.getElementById("bingoTest").innerHTML = ("No bingo found...?");
   }

}
//end of Bingo check
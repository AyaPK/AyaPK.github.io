var cardNumbers = []
var pulledNumbers = []
var lastNumber = 0
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
   document.getElementById("pulledNumbers").innerHTML = (pulledNumbers);
   document.getElementById("lastNumber").innerHTML = (lastNumber);

   function draw(){
   for (a = 1; a < 10; a++) {
      
      chosenNumber = Math.floor(Math.random() * 99)
      if(!cardNumbers.includes(chosenNumber)){
      cardNumbers.push(chosenNumber)
      }else{draw()}
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
   numberDraw = Math.floor(Math.random()*99)
   if(!pulledNumbers.includes(numberDraw)){
      pulledNumbers.push(numberDraw)
      lastNumber = numberDraw
      pulledNumbers.sort(function(a, b){return a-b})
   document.getElementById("lastNumber").innerHTML = ("And the number is... <b>"+lastNumber+"!!!</b>");
   document.getElementById("pulledNumbers").innerHTML = (pulledNumbers);
   
   }else{
      test()
   }
}
//end of number pull


//check for matches
function check() {
   for (b=0; b<pulledNumbers.length; b++){
      if(pulledNumbers.includes(cardNumbers[b])){
         cardNumbers[b] = ("<s>"+cardNumbers[b]+"</s>")
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
   cardNumbers = ["","","","","","","","",""]
   pulledNumbers = [""]
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
}
//end of reset

//check for bingo




//
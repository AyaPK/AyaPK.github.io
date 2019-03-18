
document.getElementById("navbar").innerHTML = (`
<div><li class="button1"> <a href="index.html">Home</a> </li>
  <li class="button2"> <a href="#">Javascript Projects</a>
  
    <ul class="options2">
      <li class=""> <a href="dndGenerator.html">DnD Character Sheet</a> </li>
      <li class=""> <a href="fizzbuzz.html">FizzBuzz Generator</a> </li>
      <li class=""> <a href="passwordTester.html">Password Validator</a> </li>
      <li class=""> <a href="bingoCard.html">Javascript Bingo Game</a> </li>
    </ul>
  
  </li>
  
  <li class="button5"> <a href="#">WebDev</a>
  
    <ul class="options5">
      <li class=""> <a href="luciusDraws.html" target="_blank">Lucius Draws</a> </li>
    </ul>
  
  </li>
  
  <li class="button3"> <a href="#">About me</a>
    <ul class="options3">
      <li class=""> <a href="#">Skillset</a> </li>
      <li class=""> <a href="#">Qualifications</a> </li>
    </ul>
  </li>
  <li class="button4"> <a href="#">Contact info</a> 
  <ul class="options4">
    <li class=""> <a href="contactForm.html">Contact form</a> </li>
    <li class=""> <a href="#">Social Media</a> </li>
    <li class=""> <a href="#">Get in touch</a> </li>
  </ul></li></div> `)

$(window).bind("load", function() {
  // code goes here


$('.options1').hide()
$('.options2').hide()
$('.options3').hide()
$('.options4').hide()
$('.options5').hide()

$('.button1').hover(function() {
  $(this).toggleClass("active");
  $('.options1').slideToggle(200);
})

$('.button2').hover(function() {
  $(this).toggleClass("active");
  $('.options2').slideToggle(200);
})

$('.button3').hover(function() {
  $(this).toggleClass("active");
  $('.options3').slideToggle(200);
})

$('.button4').hover(function() {
  $(this).toggleClass("active");
  $('.options4').slideToggle(200);
})

$('.button5').hover(function() {
  $(this).toggleClass("active");
  $('.options5').slideToggle(200);
})
});
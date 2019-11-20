
document.getElementById("navbar").innerHTML = (`<div><li class="button1"> <a href="index.html">Home</a> </li>
<li class="button2"> <a href="#">Javascript Projects</a>

  <ul class="options2">
    <li class=""> <a href="dndGenerator.html">DnD Character Sheet</a> </li>
    <li class=""> <a href="fizzbuzz.html">FizzBuzz Generator</a> </li>
    <li class=""> <a href="passwordTester.html">Password Validator</a> </li>
    <li class=""> <a href="bingoCard.html">Javascript Bingo Game</a> </li>
    <li class=""> <a href="8ball.html">8ball</a> </li>
    <li class=""> <a href="lance.html">Lance</a> </li>
  </ul>
</li>


<li class="button6"> <a href="#">Python</a>

  <ul class="options6">
    <li class=""> <a href="https://github.com/AyaPK/SS-Python-Portfolio">Python Tkinter portfolio</a> </li>
    <li class=""> <a href="https://github.com/AyaPK/RpgGame/">Python 3.6 RPG Game</a> </li>
    <li class=""> <a href="https://github.com/AyaPK/UserDirectory">User Directory</a> </li>
    <li class=""> <a href="https://github.com/AyaPK/TwitterClient">Twitter Client</a> </li>
  </ul>

</li>


<li class="button5"> <a href="#">Twitter Bots</a>

  <ul class="options5">
    <li class=""> <a href="http://twitter.com/GeneratorArt">Album Art Generator</a> </li>
    <li class=""> <a href="http://twitter.com/TheUSOfficeBot">The US Office Bot</a> </li>
    <li class=""> <a href="http://twitter.com/PokeFusionsBot">Pokémonstrosities</a> </li>
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
</ul></li></div>
`)


//run menu JS after previous JS has loaded in to build the menu
$(window).bind("load", function () {

  $('.options1').hide()
  $('.options2').hide()
  $('.options3').hide()
  $('.options4').hide()
  $('.options5').hide()
  $('.options6').hide()

  $('.button1').hover(function () {
    $(this).toggleClass("active");
    $('.options1').slideToggle(200);
  })

  $('.button2').hover(function () {
    $(this).toggleClass("active");
    $('.options2').slideToggle(200);
  })

  $('.button3').hover(function () {
    $(this).toggleClass("active");
    $('.options3').slideToggle(200);
  })

  $('.button4').hover(function () {
    $(this).toggleClass("active");
    $('.options4').slideToggle(200);
  })

  $('.button5').hover(function () {
    $(this).toggleClass("active");
    $('.options5').slideToggle(200);
  })

  $('.button6').hover(function () {
    $(this).toggleClass("active");
    $('.options6').slideToggle(200);
  })
});






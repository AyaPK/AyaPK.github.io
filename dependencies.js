$('.options1').hide()
$('.options2').hide()
$('.options3').hide()
$('.options4').hide()

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

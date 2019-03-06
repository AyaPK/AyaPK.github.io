var minSliderValue = $("#strengthSlider").data("slider-min");
var maxSliderValue = $("#slider").data("slider-max");


//Strength
$('#strengthSlider').slider({
    value : 0,
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

$('#strengthSlider').on('slide', function(slider){
	$("#inputValuestr").val(slider.value);
});

$("#inputValuestr").on("keyup", function() {
    var val = Math.abs(parseInt(this.value, 10) || minSliderValue);
    this.value = val > maxSliderValue ? maxSliderValue : val;
    $('#strengthSlider').slider('setValue', val);
});


//Dexterity
$('#dexSlider').slider({
  value : 0,
formatter: function(value) {
  return 'Current value: ' + value;
}
});

$('#dexSlider').on('slide', function(slider){
$("#inputValueDex").val(slider.value);
});

$("#inputValueDex").on("keyup", function() {
  var vala = Math.abs(parseInt(this.value, 10) || minSliderValue);
  this.value = vala > maxSliderValue ? maxSliderValue : vala;
  $('#dexSlider').slider('setValue', vala);
});



//Constitution
$('#conSlider').slider({
  value : 0,
formatter: function(value) {
  return 'Current value: ' + value;
}
});

$('#conSlider').on('slide', function(slider){
$("#inputValuecon").val(slider.value);
});

$("#inputValuecon").on("keyup", function() {
  var vala = Math.abs(parseInt(this.value, 10) || minSliderValue);
  this.value = vala > maxSliderValue ? maxSliderValue : vala;
  $('#conSlider').slider('setValue', vala);
});


//Intelligence
$('#intSlider').slider({
  value : 0,
formatter: function(value) {
  return 'Current value: ' + value;
}
});

$('#intSlider').on('slide', function(slider){
$("#inputValueInt").val(slider.value);
});

$("#inputValueInt").on("keyup", function() {
  var vala = Math.abs(parseInt(this.value, 10) || minSliderValue);
  this.value = vala > maxSliderValue ? maxSliderValue : vala;
  $('#intSlider').slider('setValue', vala);
});


//Intelligence
$('#wisSlider').slider({
  value : 0,
formatter: function(value) {
  return 'Current value: ' + value;
}
});

$('#wisSlider').on('slide', function(slider){
$("#inputValueWis").val(slider.value);
});

$("#inputValueWis").on("keyup", function() {
  var vala = Math.abs(parseInt(this.value, 10) || minSliderValue);
  this.value = vala > maxSliderValue ? maxSliderValue : vala;
  $('#wisSlider').slider('setValue', vala);
});



//Intelligence
$('#chaSlider').slider({
  value : 0,
formatter: function(value) {
  return 'Current value: ' + value;
}
});

$('#chaSlider').on('slide', function(slider){
$("#inputValueCha").val(slider.value);
});

$("#inputValueCha").on("keyup", function() {
  var vala = Math.abs(parseInt(this.value, 10) || minSliderValue);
  this.value = vala > maxSliderValue ? maxSliderValue : vala;
  $('#chaSlider').slider('setValue', vala);
});
var minSliderValue = $("#exstr").data("slider-min");
var maxSliderValue = $("#exstr").data("slider-max");



$('#exstr').slider({
    value : 0,
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

$('#exstr').on('slide', function(slider){
	$("#inputValuestr").val(slider.value);
});

$("#inputValuestr").on("keyup", function() {
    var val = Math.abs(parseInt(this.value, 10) || minSliderValue);
    this.value = val > maxSliderValue ? maxSliderValue : val;
    $('#exstr').slider('setValue', val);
});




$('#exspe').slider({
  value : 0,
formatter: function(value) {
  return 'Current value: ' + value;
}
});

$('#exspe').on('slide', function(slider){
$("#inputValuespe").val(slider.value);
});

$("#inputValuespe").on("keyup", function() {
  var vala = Math.abs(parseInt(this.value, 10) || minSliderValue);
  this.value = vala > maxSliderValue ? maxSliderValue : vala;
  $('#exspe').slider('setValue', vala);
});
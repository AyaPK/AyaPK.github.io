var secret = "3838404037393739666513"; //Konami Code
var input = "";
var timer;
var mode = false;
var showclassName = false;

$(document).ready(function () {
});



$(document).keyup(function (e) {
    //alert(e.which);
    input += e.which;
    clearTimeout(timer);
    timer = setTimeout(function () { input = ""; }, 500);
    check_input();
});


function check_input() {
    if (input == secret) {
        $("body").get(0).style.setProperty("--fg-color", "rgb(0, 255, 0)");
    }
};

$(document).ready(function () {
    setInterval(function () { $('#info').html('Keystroke: ' + input);}, 100);
});
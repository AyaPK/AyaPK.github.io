var secret = "3838404037393739666513"; //Konami Code
var input = "";
var timer;
var mode = false;
var showclassName = false;
var textcolor = "#000";

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
        $("body").get(0).style.setProperty("--bg-color", "rgba(0, 0, 0, 0)");
        textcolor = "rgba(0, 255, 0, .4)"
    }
};

$(document).ready(function () {
    rain()
    setInterval(function () { $('#info').html('Keystroke: ' + input);}, 100);
});

function rain(){
    // Initialising the canvas
var canvas = document.querySelector('canvas'),
ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
drops[i] = 1;
}

// Setting up the draw function
function draw() {
ctx.fillStyle = 'rgba(0, 0, 0, .1)';
ctx.fillRect(0, 0, canvas.width, canvas.height);
for (var i = 0; i < drops.length; i++) {
var text = letters[Math.floor(Math.random() * letters.length)];
ctx.fillStyle = textcolor;
ctx.fillText(text, i * fontSize, drops[i] * fontSize);
drops[i]++;
if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
  drops[i] = 0;
}
}
}

// Loop the animation
setInterval(draw, 33);
}
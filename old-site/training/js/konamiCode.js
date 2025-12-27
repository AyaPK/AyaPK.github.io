konamiSecret = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
pointer = 0;
var textcolor = "rgb(187, 113, 125)";
bgcol = 'rgba(187, 113, 125, .2)'

document.addEventListener("keydown", function (e) {
    if(e.key == konamiSecret[pointer]) {
        pointer++;
    }else{
        pointer = 0
    }

    if(pointer === konamiSecret.length) {
        textcolor = "rgb(0, 200, 0)"
        bgcol = "rgba(0, 0, 0, .05)"
        document.body.style.setProperty("color", "rgb(0, 255, 0)");
    }
});

function rain() {
    var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ雨水使奶奶与爷爷给我姐姐讲：也可以给小狗好好洗澡';
    letters = letters.split('');
    var fontSize = 10,
        columns = canvas.width / fontSize;

    var drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    function draw() {
        ctx.fillStyle = bgcol;
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

    setInterval(draw, 33);
}
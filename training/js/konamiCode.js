konamiSecret = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
pointer = 0;
var inputs = [];

document.addEventListener('keydown', function (e) {
    if(e.key == konamiSecret[pointer]) {
        inputs.push(e.key)
        pointer++;
    }else{
        inputs = []
        pointer=0
    }

    if(inputs.join("") == konamiSecret.join("")) {
        alert("You now have more lives!")
    }
});




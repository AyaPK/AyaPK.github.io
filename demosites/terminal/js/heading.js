var stringToAdd = $(".animateTextArea").html();
$(".animateTextArea").html("> ");
var index = 0;
function addLetter(){
    $(".animateTextArea").append(stringToAdd[index]);
    index++;
    if(index > stringToAdd.length){
        clearInterval(running);
    }
}
jQuery(document).ready(function() {
    setTimeout(function() {
        var running = setInterval(addLetter, 100);
    }, 1000);
});

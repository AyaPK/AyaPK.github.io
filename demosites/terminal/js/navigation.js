$(".navarea .area:nth-child(1) .header span").addClass("navline-selected")

$(".area").click(function () {
    if ($(this).children(".header").children("span").hasClass("navline-selected")) {
        var html = $(this).children(".header").children("span");
        var t = html.html();
        if (html.html().indexOf("v") != -1) {
            html.html(t.replace("v", "&gt;"));
        } else {
            html.html(t.replace("&gt;", "v"));
        }
    } else {
        $(".navline-selected").removeClass("navline-selected")
        $(this).children(".header").children("span").addClass("navline-selected")
        var html = $(this).children(".header").children("span");
        var t = html.html();
        if (html.html().indexOf("v") != -1) {
            html.html(t.replace("v", "&gt;"));
        } else {
            html.html(t.replace("&gt;", "v"));
        }
    }

    $(this).children(".content").slideToggle(500)
})

var stringToAdd = "Aya website hahaha...";
var index = 0;
function addLetter(){
    $(".animateTextArea").append(stringToAdd[index]);
    index++;
    if(index > stringToAdd.length){
        clearInterval(running);
    }
}
jQuery(document).ready(function() {
    $(".animateTextArea").append("> ");
    setTimeout(function() {
        var running = setInterval(addLetter, 100);
    }, 1000);
});

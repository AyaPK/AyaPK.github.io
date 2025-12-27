$(".navarea .area:nth-child(1) .header span").addClass("navline-selected")

$(".area .header").click(function () {
    var area = $(this).parent();
    if ($(area).children(".header").children("span").hasClass("navline-selected")) {
        var html = $(area).children(".header").children("span");
        var t = html.html();
        if (html.html().indexOf("v") != -1) {
            html.html(t.replace("v", "&gt;"));
        } else {
            html.html(t.replace("&gt;", "v"));
        }
    } else {
        $(".navline-selected").removeClass("navline-selected")
        $(area).children(".header").children("span").addClass("navline-selected")
        var html = $(area).children(".header").children("span");
        var t = html.html();
        if (html.html().indexOf("v") != -1) {
            html.html(t.replace("v", "&gt;"));
        } else {
            html.html(t.replace("&gt;", "v"));
        }
    }

    $(area).children(".content").slideToggle(500)
})


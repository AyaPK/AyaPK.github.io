var timer,secret="3838404037393739666513",input="",mode=!1,showclassName=!1;function check_input(){input==secret&&$("body").get(0).style.setProperty("--fg-color","rgb(0, 255, 0)")}$(document).ready(function(){}),$(document).keyup(function(t){input+=t.which,clearTimeout(timer),timer=setTimeout(function(){input=""},500),check_input()}),$(document).ready(function(){setInterval(function(){$("#info").html("Keystroke: "+input)},100)});
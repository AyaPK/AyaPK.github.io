var ball = [
    "yes",
    "no",
    "maybe",
    "I don't know",
    "Try again later",
    "Signs point to yes",
    "Signs point to no"
]

var broken = false
var brokemsg = "The ball is broken and won't work anymore :("

function randomise(){
if(!broken){
    var question = document.getElementById("question").value

var random = Math.floor(Math.random()*ball.length)

var reply = ("You asked: "+question+"</br> The ball says: "+ball[random])
document.getElementById("response").innerHTML = (reply)
}
else{
    document.getElementById("response").innerHTML = (brokemsg)
}}

function ownReply(){
    var provide = document.getElementById("reply").value
    ball.push(provide)
    document.getElementById("added").innerHTML = ("New question added!")
}

function list() {
    var allAnswers = (ball)
    document.getElementById("listAnswers").innerHTML = (allAnswers);
}

function breakBall() {
    broken = true
    document.getElementById("broken").innerHTML = ("You broke the ball!")
}
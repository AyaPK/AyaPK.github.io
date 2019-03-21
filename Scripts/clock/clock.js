var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]


function tellTime(){
    var d = new Date();
    document.getElementById("date").innerHTML = (d.getDate())
    document.getElementById("monthName").innerHTML = (months[d.getMonth()])
    document.getElementById("year").innerHTML = (d.getFullYear())
    document.getElementById("hours").innerHTML = (d.getHours())
    document.getElementById("minutes").innerHTML = (d.getMinutes())
    document.getElementById("seconds").innerHTML = (d.getSeconds())
    setTimeout(tellTime,1000);
}

function changeCat() {
    console.log("aaaaaaaaaaaaaa")

    var current = document.getElementById("bongo-cat").src.split("-")[1].split(".")[0]
    console.log(current)
    current++
    if (current > 4) {
        current = 0
    }
    document.getElementById("bongo-cat").src = "bongo-"+current+".gif"
}
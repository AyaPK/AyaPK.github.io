function lance() {
    input = document.getElementById("lanceinput").value;
    document.getElementById("output").innerHTML = input.replace(/[aeiouAEIOU]/g, "i");
}
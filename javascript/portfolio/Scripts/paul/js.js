function translate() {
    var input = document.getElementById("input").value.toLowerCase();
    
    
    input = input.replace("other","uvva");
    input = input.replace("outh","auf");
    input = input[0]+input.substr(1,input.length).replace("th", "f");
    var newinput = ""
for(x=0;x<input.split(" ").length;x++) {
    var word = input.split(" ")[x];
    if(word != ""){
    word = word[0]+word.substr(1, word.length).replace("t", "'")
    document.getElementById("output").innerHTML = word;
    newinput = newinput+" "+word;
    }
}

    input = newinput
    input = input.replace("h", "'");
    document.getElementById("output").innerHTML = input;
}

document.getElementById("button").onclick = translate;
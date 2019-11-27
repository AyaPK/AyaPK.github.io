var currentview = 0;

function updateimage(){
    
    var newimage = this.src.replace("small","");
    document.getElementById("largepic").src = newimage;
    if(currentview != 0){
    document.getElementById("tn"+currentview).className = "";
    }
    currentview = this.id[2];
    this.className = "selected";
}

function next(){
    if(currentview != 0){
        document.getElementById("tn"+currentview).className = "";
        }
    if(currentview == 5){
        currentview = 1
        var newimage = document.getElementById("tn"+currentview).src.replace("small","");
        document.getElementById("largepic").src = newimage;
        document.getElementById("tn"+currentview).className = "selected";
} else if(currentview < 6) {
        currentview++
        var newimage = document.getElementById("tn"+currentview).src.replace("small","");
        document.getElementById("largepic").src = newimage;
        document.getElementById("tn"+currentview).className = "selected";        
    }
}

function previous(){
    if(currentview != 0){
        document.getElementById("tn"+currentview).className = "";
        }
    if(currentview == 0 || currentview == 1){
        currentview = 5
        var newimage = document.getElementById("tn"+currentview).src.replace("small","");
        document.getElementById("largepic").src = newimage;
        document.getElementById("tn"+currentview).className = "selected";
    } else if(currentview > 1){
        currentview--
        var newimage = document.getElementById("tn"+currentview).src.replace("small","");
        document.getElementById("largepic").src = newimage;
        document.getElementById("tn"+currentview).className = "selected";
    }

}

for(x = 1; x < 6; x++){  
    var xs = x.toString();
    document.getElementById("tn"+xs).onclick = updateimage;
}

document.getElementsByTagName("button")[0].onclick = previous;
document.getElementsByTagName("button")[1].onclick = next;
var currentview = 0;

function bigFunction() {

    if (this.innerHTML.indexOf("Next") != -1) {
        if (currentview != 0) {
            document.getElementById("tn" + currentview).className = "";
        }
        if (currentview == 5) {
            currentview = 1
            var newimage = document.getElementById("tn" + currentview).src.replace("small", "");
            document.getElementById("largepic").src = newimage;
            document.getElementById("tn" + currentview).className = "selected";
        } else if (currentview < 6) {
            currentview++
            var newimage = document.getElementById("tn" + currentview).src.replace("small", "");
            document.getElementById("largepic").src = newimage;
            document.getElementById("tn" + currentview).className = "selected";
        }
    }

    else if (this.innerHTML.indexOf("Previous") != -1) {
        if (currentview != 0) {
            document.getElementById("tn" + currentview).className = "";
        }
        if (currentview == 0 || currentview == 1) {
            currentview = 5
            var newimage = document.getElementById("tn" + currentview).src.replace("small", "");
            document.getElementById("largepic").src = newimage;
            document.getElementById("tn" + currentview).className = "selected";
        } else if (currentview > 1) {
            currentview--
            var newimage = document.getElementById("tn" + currentview).src.replace("small", "");
            document.getElementById("largepic").src = newimage;
            document.getElementById("tn" + currentview).className = "selected";
        }
    }

    else if (this.id.indexOf("tn") !== -1) {
        var newimage = this.src.replace("small", "");
        document.getElementById("largepic").src = newimage;
        if (currentview != 0) {
            document.getElementById("tn" + currentview).className = "";
        }
        currentview = this.id[2];
        this.className = "selected";
    }
}



for (x = 1; x <= 5; x++) {
    document.getElementById("tn" + x).onclick = bigFunction;
}
document.getElementsByTagName("button")[0].onclick = bigFunction;
document.getElementsByTagName("button")[1].onclick = bigFunction;	 	         	  	   	     	      	         	

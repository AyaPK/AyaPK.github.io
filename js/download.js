function downloader(x) {
    input = prompt("Please enter the download password included in the Submission Document")
    if(input=="CI4250.download!"){
        window.location.href = x;
    }else{
        alert("Sorry you have entered the wrong password")
    }
}
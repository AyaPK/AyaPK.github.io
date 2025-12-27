API_KEY = "rwKTmmiJbzz6vsjIlt0JAhC0jOEvMcGT"

dumb_iteration_test = 0

fetch("https://api.giphy.com/v1/gifs/trending?api_key="+API_KEY+"&limit=10&rating=g")
  .then((response) => response.json())
  .then((data) => {
    data["data"].forEach(img => {
        console.log(img)
        document.getElementById("img_"+dumb_iteration_test).src = img["images"]["fixed_height"]["url"];
        console.log(img["embed_url"])
        dumb_iteration_test++;
    });
  })
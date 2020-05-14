//You can edit ALL of the code here
function setup() {//function for setting up api/function with json data
  const allEpisodes = getAllEpisodes();//creating a variable to getAllEpisodes
  makePageForEpisodes(allEpisodes);//calling function passing another function
}

function makePageForEpisodes(episodeList) {//function to loop through all elements 
  const rootElem = document.getElementById("root");//getting root element from HTML page
  rootElem.textContent = `Got ${episodeList.length} episode(s) and data has (originally) come from TVMaze.com`;//displaying how many episodes
  episodeList.forEach((episodeList) => {//using foreach to manipulate the episode.js json file
     let divElement = document.createElement("div");//create div element to put all elements here
     divElement.className = "column";//to put it in a column
     rootElem.appendChild(divElement);//div element gets added to the root so can add the json elements to it
     let name = episodeList.name;//variable to get the name
     let season = episodeList.season;//variable to get the season
     let number = episodeList.number;//variable to get the number
    let image = episodeList.image.medium;//variable to get the medium
    let summary = episodeList.summary;//variable to get the summary

    let h1El = document.createElement("h1");//create a h1 element
    divElement.appendChild(h1El);//on the divelement append the h1
    h1El.textContent = name;//putting name on it

    let elementSeason = document.createElement("h1");
    divElement.appendChild(elementSeason);
    let elementNumber = document.createElement("h1");
    elementSeason.textContent = `S0`+ season + `E0` + number;


    let elementImg = document.createElement("img");
    divElement.appendChild(elementImg);
    elementImg.src = image;

    let elementSummary = document.createElement("p");
    divElement.appendChild(elementSummary);
    elementSummary.innerHTML = summary;

  });

   
  }
  //this makes a promise to this tvmaze (fresh prince nice tv show)
  fetch("https://api.tvmaze.com/shows/582/episodes")
     .then((response) => {
    console.log("response");
    console.log(response);//seeing what the response looks like
    return response.json();//api is json format
  })

  .then((jsonData) => {
    console.log("data found");
    console.log(jsonData);
});

window.onload = setup;

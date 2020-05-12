//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();//creating a variable to getAllEpisodes
  makePageForEpisodes(allEpisodes);//calling function passing another function
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");//getting root element from HTML page
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;//
  episodeList.forEach((episodeList) => {
     let divElement = document.createElement("div");
     divElement.className = "column";
     rootElem.appendChild(divElement);
     let name = episodeList.name;
     let season = episodeList.season;
     let number = episodeList.number;
    let image = episodeList.image.medium;
    let summary = episodeList.summary;

    let h1El = document.createElement("h1");
    divElement.appendChild(h1El);
    h1El.textContent = name;

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


window.onload = setup;

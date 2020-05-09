//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();//creating a variable to getAllEpisodes
  makePageForEpisodes(allEpisodes);//calling function passing another function
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");//getting root element from HTML page
  rootElem.textContent = `Got ${episodeList.length} episode()`;//
  episodeList.forEach((episodeList) => {
     let container = document.createElement("div");
     container.className = "column";
     rootElem.appendChild(container);
     let name = episodeList.name;
     let season = episodeList.season;
     let number = episodeList.number;
    let image = episodeList.image.medium;
    let summary = episodeList.summary;

    let h1El = document.createElement("h1");
    container.appendChild(h1El);
    h1El.textContent = name + number;

    let seas = document.createElement("h2");
    container.appendChild(seas);
    seas = season;

    let elementImg = document.createElement("img");
    container.appendChild(elementImg);
    elementImg.src = image;

    let elementSummary = document.createElement("p");
    container.appendChild(elementSummary);
    elementSummary.innerHTML = summary;

  });

   
  }


window.onload = setup;

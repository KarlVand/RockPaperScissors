// COMPETITOR //

function Competitor() {
  var imageURL = [
    "./assets/scissors.webp",
    "./assets/rock.webp",
    ".assets/paper.webp",
  ];
  var imageContainer = document.getElementById("botPlayer");
  var imgElement = document.createElement("img");
  var randomIndex = Math.floor(Math.random() * imageURL.length);
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
}

function launchCompetitor() {
  Competitor();
}

// CLICK TO FIGHT //

var papier = document.getElementById("paper");
var ciseau = document.getElementById("scissors");
var pierre = document.getElementById("rock");

pierre.addEventListener("click", function () {
  var imageURL = "./assets/rock.webp";
  var imageContainer = document.getElementById("imgPlayer");
  var imgElement = document.createElement("img");

  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
});

papier.addEventListener("click", function () {
  var imageURL = "./assets/paper.webp";
  var imageContainer = document.getElementById("imgPlayer");
  var imgElement = document.createElement("img");

  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
  launchCompetitor();
});

ciseau.addEventListener("click", function () {
  var imageURL = "./assets/scissors.webp";
  var imageContainer = document.getElementById("imgPlayer");
  var imgElement = document.createElement("img");

  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
});

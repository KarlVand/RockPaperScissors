// CLICK TO FIGHT //

const choices = ["rock", "paper", "scissors"];
const imageContainer = document.getElementById("imgPlayer");

// BUTTONS //

const papier = document.getElementById("paper");
const ciseau = document.getElementById("scissors");
const pierre = document.getElementById("rock");

// DISPLAY PLAYER CHOICES //

pierre.addEventListener("click", function () {
  var imageURL = "./assets/rock.webp";
  var imgElement = document.createElement("img");
  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
});

papier.addEventListener("click", function () {
  var imageURL = "./assets/paper.webp";
  var imgElement = document.createElement("img");

  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
  launchCompetitor();
});

ciseau.addEventListener("click", function () {
  var imageURL = "./assets/scissors.webp";
  var imgElement = document.createElement("img");

  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
});

// VERSUS //

function playGame(playerChoice) {
  const choices = [
    { name: "rock", url: "./assets/rock.webp" },
    { name: "paper", url: "./assets/paper.webp" },
    { name: "scissors", url: "./assets/scissors.webp" },
  ];
  /*const computerChoices = ["rock", "paper", "scissors"];*/
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const computerDisplay = document.getElementById("botPlayer");

  /* computerChoices.imageUrls = [
    "./assets/rock.webp",
    "./assets/paper.webp",
    "./assets/scissors.webp",
  ];*/
  var imgElement = document.createElement("img");
  imgElement.src = imageURL;
  computerDisplay.innerHTML = "";
  computerDisplay.appendChild(imgElement);
}

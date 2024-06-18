// CLICK TO FIGHT //

const choices = ["rock", "paper", "scissors"];
const imageUrls = [
  "./assets/rock.webp",
  "./assets/paper.webp",
  "./assets/scissors.webp",
];

const imageContainer = document.getElementById("imgPlayer");

// BUTTONS //

const papier = document.getElementById("paper");
const ciseau = document.getElementById("scissors");
const pierre = document.getElementById("rock");

// DISPLAY PLAYER CHOICES //

pierre.addEventListener("click", function () {
  let imgElement = document.createElement("img");
  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
});

papier.addEventListener("click", function () {
  let imgElement = document.createElement("img");
  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
});

ciseau.addEventListener("click", function (playGame) {
  let imgElement = document.createElement("img");
  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
});

// VERSUS //

function playGame(playerChoice) {
  const choiceIndex = choices[Math.floor(Math.random() * 3)];

  const imageUrl = imageUrls[choiceIndex];

  const computerChoice = {
    choices: choices[choiceIndex],
    imageUrl: imageUrl[choiceIndex],
  };
  const computerDisplay = document.getElementById("botPlayer");

  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  computerDisplay.innerHTML = "";
  computerDisplay.appendChild(imgElement);
  console.log(result);
}

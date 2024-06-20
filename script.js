// CLICK TO FIGHT //
const playerChoice = ["rock", "paper", "scissors"];
const imageContainer = document.getElementById("imgPlayer");

// BUTTONS //

const papier = document.getElementById("paper");
const ciseau = document.getElementById("scissors");
const pierre = document.getElementById("rock");

// DISPLAY PLAYER CHOICES //

pierre.addEventListener("click", function () {
  const imageURL = "./assets/rock.webp";
  let imgElement = document.createElement("img");
  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
  playGame("rock");
});

papier.addEventListener("click", function () {
  const imageURL = "./assets/paper.webp";
  let imgElement = document.createElement("img");
  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
  playGame("paper");
});

ciseau.addEventListener("click", function () {
  const imageURL = "./assets/scissors.webp";
  let imgElement = document.createElement("img");
  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
  playGame("scissors");
});

// VERSUS //

function playGame(playerChoice) {
  const computerChoice = [
    "./assets/rock2.webp",
    "./assets/paper2.webp",
    "./assets/scissors2.webp",
  ];
  const names = ["rock", "paper", "scissors"];

  /*["rock", "paper", "scissors"];
  const imageUrls = [
    "./assets/rock2.webp",
    "./assets/paper2.webp",
    "./assets/scissors2.webp",
  ];*/
  const computerChoiceIndex = computerChoice[Math.floor(Math.random() * 3)];
  const imageURL = computerChoiceIndex;
  const choicesWithNames = computerChoice.map((url, index) => {
    return {
      url: url,
      name: names[index],
    };
  });
  let result = document.getElementById("resultDisplay");

  const computerDisplay = document.getElementById("botPlayer");

  const imgElement = document.createElement("img");
  imgElement.src = imageURL;
  computerDisplay.innerHTML = "";
  computerDisplay.appendChild(imgElement);
  console.log(computerChoiceIndex);

  // RESULTS (code d'un tuto) //

  if (playerChoice === computerChoiceIndex) {
    result = "It's a Tie";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice == "scissors" ? "You Win" : "You Lose";
        break;
      case "paper":
        result = computerChoice == "rock" ? "You Win" : "You Lose";
        break;
      case "scissors":
        result = computerChoice == "paper" ? "You Win" : "You Lose";
    }
  }
  result.textContent = result;
}

console.log(choices[]);


/*  TEST  DE CODE 
function playerScore(playGame) {
  if (playerChoice == win {
    let i++;
  })
}

yourResult.textContent = `PLAYER: ${score?}`;
botResult.textContent = `MACHINE:` 
*/

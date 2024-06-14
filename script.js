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
});

ciseau.addEventListener("click", function () {
  var imageURL = "./assets/scissors.webp";
  var imageContainer = document.getElementById("imgPlayer");
  var imgElement = document.createElement("img");

  imgElement.src = imageURL;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imgElement);
});

// COMPETITOR //

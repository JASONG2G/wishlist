// add event listener to form element
document.querySelector("#form").addEventListener("submit", renderList);

// get reference of the class right div for displaying destination infos
let board = document.querySelector("#board");

function renderList(event) {

  // prevent page from reload.
  event.preventDefault();

  // collect data from user
  let destinationName = event.target.elements["name"].value;
  let destinationLocation = event.target.elements["location"].value;
  let destinationPhoto = event.target.elements["photo"].value;
  let destinationDesc = event.target.elements["description"].value;

  // Reset the form after button clicked
  resetFormValues(event.target);

  // Use the form elements values to create a destination card by pass value to createCard().
  let destinationCard = createCard(
    destinationName,
    destinationLocation,
    destinationPhoto,
    destinationDesc
  );
  // updating board with form entry.
  board.appendChild(destinationCard);
}

function resetFormValues(form) {
    // Go through all the form values and reset their values
    for (let i = 0; i < form.length; i++) {
      form.elements[i].value = "";
    }
  }

function createCard(name, location, photoUrl, description) {
  // Use the passed arguments to create a card/ container with destination details
  var card = document.createElement("div");
  card.setAttribute("class", "card container");
  card.style.width = "15rem";
  card.style.height = "fit-content";
  card.style.margin = "20px;";

  // Create the destination photo element and append it to the card
  var img = document.createElement("img");
  img.setAttribute("class", "card-img-top");
  img.setAttribute("alt", name);

  // Check to make sure that the photo url was entered since it's optional
  // if the user didn't enter a photo url, show a constant photo
  let constantPhotoUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qSa435vBhh121sLT8TAoq0fNTfustjKzfw&usqp=CAU";
  if (photoUrl.length === 0) {
    img.setAttribute("src", constantPhotoUrl);
  } else {
    img.setAttribute("src", photoUrl);
  }

  card.appendChild(img);

  // Create the card body with the destination name, location, and description and append it to the card
  var cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  var cardTitle = document.createElement("h5");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.innerText = name;
  cardBody.appendChild(cardTitle);

  var cardSubtitle = document.createElement("h6");
  cardSubtitle.setAttribute("class", "card-subtitle");
  cardSubtitle.innerText = location;
  cardBody.appendChild(cardSubtitle);

  // Only add description text if the user entered some
  if (description.length !== 0) {
    var cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.innerText = description;
    cardBody.appendChild(cardText);
  }

  card.appendChild(cardBody);

  return card;
}

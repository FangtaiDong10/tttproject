function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // +'1' => 1
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

// prevent default form submission is possible with of help that
// event object
// which we get automatically get in functions that are executed because of an event.
function savePlayerConfig(event) {
  event.preventDefault();
  // extract the value that was submitted -->
  // makes handling form submission with browser-side JavaScript extremely simple.
  const formData = new FormData(event.target); // --> will looking for the inputs that have a name field
  const enteredPlayername = formData.get("playername").trim();

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    // stop the function
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  // if (editedPlayer === 1) {
  //   players[0].name = enteredPlayername;
  // } else {
  //   players[1].name = enteredPlayername;
  // }
  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}

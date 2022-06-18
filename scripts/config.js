function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
}

// prevent default form submission is possible with of help that
// event object
// which we get automatically get in functions that are executed because of an event.
function savePlayerConfig(event) {
  event.preventDefault();
  // extract the value that was submitted -->
  // makes handling form submission with browser-side JavaScript extremely simple.
  const formData = new FormData(event.target); // --> will looking for the inputs that have a name field
  const enteredPlayername = formData.get("playername");
}

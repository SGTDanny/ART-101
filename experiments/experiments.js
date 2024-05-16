
console.log("Hello from experiment.js")

function getNameAndDisplay() {
  let name = prompt("Name please:");
  $("#title").html("Hello, " + name);
}

$("#my-button").click(getNameAndDisplay);
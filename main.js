let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

// Count variables
let numHeads = 0;
let numTails = 0;
// Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a random number
  let randNum = Math.random();

  // Simulate the coin flip
  if (randNum < 0.2) {
    outputEl.innerHTML = "Concentrate and ask again.";
  } else if (randNum < 0.4) {
    outputEl.innerHTML = "Outlook not so good.";
  } else if (randNum < 0.6) {
    outputEl.innerHTML = "Don't count on it.";
  } else if (randNum < 0.8) {
    outputEl.innerHTML = "Without a Doubt.";
  } else {
    outputEl.innerHTML = "As I see it, yes.";
  }
}

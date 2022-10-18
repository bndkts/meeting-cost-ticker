//set initial count
let count = 0;
let counter = 0;
let inputCost = document.getElementById("cost");
let inputParticipants = document.getElementById("participants");
let cost = 0;
let participants = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit");
const form = document.getElementById("form");
const show_info = document.getElementById("show-info");

function countCost() {
  counter = window.setInterval(function () {
    let totalCosts = (parseInt(cost) * parseInt(participants)) / 3600;
    count += totalCosts;
    value.textContent = count.toFixed(2) + "€";
  }, 1000);
}

function startCount() {
  document.getElementById("cost-output").innerHTML = inputCost.value;
  cost = inputCost.value;
  if (participants === 0 ){
  document.getElementById("participants-output").innerHTML =
    inputParticipants.value;
  participants = inputParticipants.value;
  }
  window.clearInterval(counter);
  countCost();

  form.classList.add("hide");
  show_info.classList.remove("hide");
}

function stopCount() {
  window.clearInterval(counter);
}

function resetCount() {
  window.clearInterval(counter);
  count = 0;
  value.textContent = count + "€";

        form.classList.remove("hide");
        show_info.classList.add("hide");
}

function raise() {
  window.clearInterval(counter);
  parsedparticipants = parseInt(participants)
  parsedparticipants += 1
  participants = parsedparticipants
  document.getElementById("participants-output").innerHTML =
    participants;
  countCost();
}

function reduce() {
  window.clearInterval(counter);
  parsedparticipants = parseInt(participants);
  parsedparticipants -= 1;
  participants = parsedparticipants;
  document.getElementById("participants-output").innerHTML = participants;
  countCost();
}

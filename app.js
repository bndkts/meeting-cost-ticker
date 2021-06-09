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

inputCost.onkeyup = function () {
  document.getElementById("cost-output").innerHTML = inputCost.value + "€";
  cost = inputCost.value;
};

inputParticipants.onkeyup = function () {
  document.getElementById("participants-output").innerHTML =
    inputParticipants.value + "€";
  participants = inputParticipants.value;
};

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("start")) {
      counter = window.setInterval(function () {
        let totalCosts = (parseInt(cost) * parseInt(participants)) / 3600;
        count += totalCosts;
        value.textContent = count.toFixed(2) + "€";
      }, 1000);
    } else if (styles.contains("reset")) {
      window.clearInterval(counter);
      count = 0;
      value.textContent = count + "€";
    }
  });
});

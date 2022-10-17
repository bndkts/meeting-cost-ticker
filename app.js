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

inputCost.onkeyup = function () {
  document.getElementById("cost-output").innerHTML = inputCost.value;
  cost = inputCost.value;
};

inputParticipants.onkeyup = function () {
  document.getElementById("participants-output").innerHTML =
    inputParticipants.value;
  participants = inputParticipants.value;
};

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("start")) {
      window.clearInterval(counter);
      counter = window.setInterval(function () {
        let totalCosts = (parseInt(cost) * parseInt(participants)) / 3600;
        count += totalCosts;
        value.textContent = count.toFixed(2) + "€";
      }, 1000);
      form.style.display = "none";
      show_info.style.display = "block";
    } else if (styles.contains("reset")) {
      window.clearInterval(counter);
      count = 0;
      value.textContent = count + "€";
      form.style.display = "block";
      show_info.style.display = "none";
    } else if (styles.contains("stop")) {
      window.clearInterval(counter);
    }
  });
});

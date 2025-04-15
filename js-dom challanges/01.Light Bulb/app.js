const bulbTopPart = document.querySelector("#bulb");
const bulbBottomPart = document.querySelector(".bulb-base");
const status = document.querySelector("#status");

const toggleButton = document.querySelector("#toggleButton");

let on = false;
document.body.style.backgroundColor = "#000";
document.body.style.color = "#DCDEF2";

toggleButton.addEventListener("click", () => {
  if (!on) {
    toggleButton.innerText = "Turn Off";
    turnBulbOn();
    on = true;
  } else {
    toggleButton.innerText = "Turn On";
    turnBulbOff();
    on = false;
  }
  console.log("toggle function ending");
});

function turnBulbOn() {
  bulbTopPart.style.backgroundColor = "#DBF227";
  bulbBottomPart.style.backgroundColor = "#DBF227";
  document.body.style.backgroundColor = "#DAFDBA";
  document.body.style.color = "#000";
  status.innerText = "Status: ON";
}
function turnBulbOff() {
  bulbTopPart.style.backgroundColor = "#DCDEF2";
  bulbBottomPart.style.backgroundColor = "#DCDEF2";
  document.body.style.backgroundColor = "#000";
  document.body.style.color = "#fff";
  status.innerText = "Status: Off";
}

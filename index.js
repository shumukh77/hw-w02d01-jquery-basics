

document.getElementById('stopButton').onclick = turnOnStopLightR;
document.getElementById('slowButton').onclick = turnOnStopLightY;
document.getElementById('goButton').onclick = turnOnStopLightG;

function turnOnStopLightR() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function turnOnStopLightY() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function turnOnStopLightG() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

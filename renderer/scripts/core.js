const Remote = require("remote");
const IPC = require("ipc");
const PortalView = document.getElementById("view");
const LocationInput = document.getElementById("location");

onload = function() {

IPC.on("lowbrow:devtools-toggle", function(event, arg) {
  console.log("TOGGLING!");
  portalView.openDevTools();
});

locationInput.addEventListener("keyup", function(event) {
  if(event.keyCode === 13) {
    portalView.src = event.target.value;
  };
}, false);
}

const Remote = require("remote");
const IPC = require("ipc");

var portalView = document.getElementById("view");
var locationInput = document.getElementById("location");

IPC.on("lowbrow:devtools-toggle", function(event, arg) {
  console.log("TOGGLING!");
  portalView.openDevTools();
});

locationInput.addEventListener("keyup", function(event) {
  if(event.keyCode === 13) {
    portalView.src = event.target.value;
  };
}, false);

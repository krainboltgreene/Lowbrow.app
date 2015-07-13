const Remote = require("remote");
const IPC = require("ipc");
const PortalView = document.getElementById("view");
const LocationInput = document.getElementById("location");

onload = function() {
  LocationInput.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
      PortalView.src = event.target.value;
    };
  }, false);

  console.log("TOGGLING!");
  IPC.on("lowbrow:devtools-toggle", function() {
    if(PortalView.isDevToolsOpened()) {
      PortalView.closeDevTools();
    } else {
      PortalView.openDevTools();
    };
  });
}

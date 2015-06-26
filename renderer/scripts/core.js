var portalView = document.getElementById("view");
var locationInput = document.getElementById("location");

locationInput.addEventListener("keyup", function(event) {
  if(event.keyCode === 13) {
    portalView.src = event.target.value;
  };
}, false);

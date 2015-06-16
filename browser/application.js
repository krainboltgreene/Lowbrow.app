"use strict"
const Application = require("app");
const BrowserWindow = require("browser-window");

require("crash-reporter").start();
require("electron-debug")();

let main;

Application.on("window-all-closed", function() {
  if(process.platform != "darwin") {
    Application.quit();
  }
});

Application.on("ready", function() {
  main = new BrowserWindow({});
  main.loadUrl("file://" + __dirname + "/../renderer/templates/application.html");
  main.openDevTools();
  main.on("closed", function() {
    main = null;
  });
});

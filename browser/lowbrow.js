"use strict"
const Application = require("app");
const BrowserWindow = require("browser-window");

require("crash-reporter").start();
require("electron-debug")();
require("./lowbrow/menu");

let main;

Application.on("window-all-closed", function() {
  if(process.platform != "darwin") {
    Application.quit();
  }
});

Application.on("ready", function() {
  main = new BrowserWindow({});
  main.loadUrl("file://" + __dirname + "/../renderer/index.html");
  main.on("closed", function() {
    main = null;
  });
});

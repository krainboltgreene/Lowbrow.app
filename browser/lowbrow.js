"use strict"
const Application = require("app");
const Menu = require("menu");
const BrowserWindow = require("browser-window");
const ApplicationMenu = require("./lowbrow/menu");
const IPC = require("ipc");

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
  ApplicationMenu.build(Application, Menu, IPC, main);
  main.loadUrl("file://" + __dirname + "/../renderer/index.html");
  main.focus();
  main.on("closed", function() {
    main = null;
  });
});

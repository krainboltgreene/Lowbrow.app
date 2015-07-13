"use strict"
const Application = require("app");
const Menu = require("menu");
const BrowserWindow = require("browser-window");
const IPC = require("ipc");

const CrashReporter = require("crash-reporter");
const ElectronDebug = require("electron-debug");

const ApplicationMenu = require("./lowbrow/menu");

CrashReporter.start();

ElectronDebug();

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

const Menu = require("menu");

const MODIFIER = "CommandOrControl";

var EMPTY_SUBMENU = [];
var NO_ACCELERATOR = null;
var NO_SELECTOR = null;
var NO_SUBMENU = null;
var NO_CLICK_ACTION = null;
var SEPARATOR = {
  type: "separator"
}

var shortcut = function() {
  return Array.prototype.slice.call(arguments).join("+");
}

var menuItem = function(label, accelerator, selector, submenu, click) {
  var item = { label: label };
  if(accelerator) { item.accelerator = accelerator };
  if(selector) { item.selector = selector };
  if(submenu) { item.submenu = submenu };
  if(click) { item.click = click };
  return item;
}

var menuItemWithSelector = function(label, accelerator, selector) {
  return menuItem(label, accelerator, selector, NO_SUBMENU, NO_CLICK_ACTION);
}

var menuItemWithClickAction = function(label, accelerator, click) {
  return menuItem(label, accelerator, NO_SELECTOR, NO_SUBMENU, click);
}

var subMenu = function(label, accelerator, items) {
  return menuItem(label, accelerator, NO_SELECTOR, items, NO_CLICK_ACTION);
}

var menuGroup = function(label, items) {
  return menuItem(label, NO_ACCELERATOR, NO_SELECTOR, items, NO_CLICK_ACTION);
}

const TEMPLATE = [
  menuGroup("Lowbrow", [
    menuItemWithSelector("About Lowbrow",
                         NO_ACCELERATOR,
                         "orderFrontStandardAboutPanel:"),
    SEPARATOR,
    subMenu("Services",
            NO_ACCELERATOR,
            EMPTY_SUBMENU),
    SEPARATOR,
    menuItemWithSelector("Hide Lowbrow",
                         shortcut(MODIFIER, "H"),
                         "hide:"),
    menuItemWithSelector("Hide Others",
                         shortcut(MODIFIER, "Shift", "H"),
                         "hideOtherApplications:"),
    menuItemWithSelector("Show all",
                         NO_ACCELERATOR,
                         "showAll:"),
    SEPARATOR,
    menuItemWithSelector("Quit",
                         shortcut(MODIFIER, "Shift","Q"),
                         "terminate:")
  ]),

  menuGroup("Edit", [
    menuItemWithSelector("Undo",
                         shortcut(MODIFIER, "Z"),
                         "undo:"),
    menuItemWithSelector("Redo",
                         shortcut(MODIFIER, "Shift", "Z"),
                         "redo:"),
    SEPARATOR,
    menuItemWithSelector("Cut",
                         shortcut(MODIFIER, "X"),
                         "cut:"),
    menuItemWithSelector("Copy",
                         shortcut(MODIFIER, "C"),
                         "copy:"),
    menuItemWithSelector("Paste",
                         shortcut(MODIFIER, "V"),
                         "paste:"),
    menuItemWithSelector("Select All",
                         shortcut(MODIFIER, "A"),
                         "selectAll:")
  ]),

  menuGroup("View", [
    menuItemWithClickAction("Reload",
                            shortcut(MODIFIER, "R"),
                            function(){
                              main.getCurrentWindow().reload();
                            }),
    menuItemWithClickAction("Toggle DevTools",
                            shortcut(MODIFIER, "Alt", "I"),
                            function(){
                              // Get webview
                              // Toggle devtools
                            })
  ]),

  menuGroup("Window", [
    menuItemWithSelector("Minimize",
                         shortcut(MODIFIER, "M"),
                         "performMiniaturize:"),
    menuItemWithSelector("Close",
                         shortcut(MODIFIER, "W"),
                         "performClose:"),
    SEPARATOR,
    menuItemWithSelector("Bring All to Front",
                         NO_ACCELERATOR,
                         "arrangeInFront:")
  ]),

  menuGroup("Help", EMPTY_SUBMENU)
]

Menu.setApplicationMenu(Menu.buildFromTemplate(TEMPLATE));

const Menu = require("menu");

const MODIFIER = process.platform == "darwin" ? "Command" : "Control"

const SEPARATOR = {
  type: "separator"
}

var shortcut = function() {
  return Array.prototype.slice.call(arguments).join("+")
}

var menuItem = function(label, accelerator, selector, submenu, click) {
  return {
    label: label,
    accelerator: accelerator,
    selector: selector,
    submenu: submenu,
    click: click
  };
}

var menuGroup = function(label, items) {
  return menuItem(label, null, null, items)
}

const TEMPLATE = [
  menuGroup("Lowbrow", [
    menuItem("About Lowbrow", null, "orderFrontStandardAboutPanel:", null, null),
    SEPARATOR,
    menuItem("Services", null, null, []),
    SEPARATOR,
    menuItem("Hide Lowbrow", shortcut(MODIFIER, "H"), "hide:"),
    menuItem("Hide Others", shortcut(MODIFIER, "Shift", "H"), "hideOtherApplications:"),
    menuItem("Show All", null, "unhideAllApplications:"),
    SEPARATOR,
    menuItem("Quit", shortcut(MODIFIER, "Q")),
  ]),
  menuGroup("Edit", [
    menuItem("Undo", shortcut(MODIFIER, "Z"), "undo:"),
    menuItem("Redo", shortcut("Shift", MODIFIER, "Z"), "redo:"),
    SEPARATOR,
    menuItem("Cut", shortcut(MODIFIER, "X"), "cut:"),
    menuItem("Copy", shortcut(MODIFIER, "C"), "copy:"),
    menuItem("Paste", shortcut(MODIFIER, "V"), "paste:"),
    menuItem("Select All", shortcut(MODIFIER, "A"), "selectAll:")
  ]),
  menuGroup("View", [
    menuItem("Reload", shortcut(MODIFIER, "R"), null, function(){
      main.getCurrentWindow().reload();
    }),
    menuItem("Toggle DevTools", shortcut("Alt", MODIFIER, "I"), null, function(){
      // Get webview
      // Toggle devtools
    })
  ]),
  menuGroup("Window", [
    menuItem("Minimize", shortcut(MODIFIER, "M"), "performMiniaturize:"),
    menuItem("Close", shortcut(MODIFIER, "W"), "performClose:"),
    SEPARATOR,
    menuItem("Bring All to Front", null, "arrangeInFront:")
  ]),
  menuGroup("Help", [])
]

Menu.setApplicationMenu(Menu.buildFromTemplate(TEMPLATE));

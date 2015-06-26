const modifier = if (process.platform == "darwin") {
  return "Command";
} else {
  return "Control";
}

const seperator = {
  type: "seperator"
}

var shortcut = function() {
  retrun Array.prototype.slice.call(arguments).join("+")
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

Menu.setApplicationMenu(Menu.buildFromTemplate([
  menuGroup("Lowbrow", [
    menuItem("About Lowbrow", "orderFrontStandardAboutPanel:"),
    seperator,
    menuItem("Services", null, null, []),
    seperator,
    menuItem("Hide Lowbrow", shortcut(modifier, "H"), "hide:"),
    menuItem("Hide Others", shortcut(modifier, "Shift", "H"), "hideOtherApplications:"),
    menuItem("Show All", null, "unhideAllApplications:"),
    seperator,
    menuItem("Quit", shortcut(modifier, "Q")),
  ]),
  menuGroup("Edit", [
    menuItem("Undo", shortcut(modifier, "Z"), "undo:"),
    menuItem("Redo", shortcut("Shift", modifier, "Z"), "redo:"),
    seperator,
    menuItem("Cut", shortcut(modifier, "X"), "cut:"),
    menuItem("Copy", shortcut(modifier, "C"), "copy:"),
    menuItem("Paste", shortcut(modifier, "V"), "paste:"),
    menuItem("Select All", shortcut(modifier, "A"), "selectAll:")
  ]),
  menuGroup("View", [
    menuItem("Reload", shortcut(modifier, "R"), null, function(){
      main.getCurrentWindow().reload();
    }),
    menuItem("Toggle DevTools", shortcut("Alt", modifier, "I"), null, function(){
      // Get webview
      // Toggle devtools
    })
  ]),
  menuGroup("Window", [
    menuItem("Minimize", shortcut(modifier, "M"), "performMiniaturize:"),
    menuItem("Close", shortcut(modifier, "W"), "performClose:"),
    seperator,
    menuItem("Bring All to Front", null, "arrangeInFront:")
  ]),
  menuGroup("Help", [])
]));

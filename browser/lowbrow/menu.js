const MODIFIER = "CommandOrControl";

exports.build = function(Application, Menu, IPC, main) {
  const EMPTY_SUBMENU = [];
  const NO_ACCELERATOR = null;
  const NO_SELECTOR = null;
  const NO_SUBMENU = null;
  const NO_CLICK_ACTION = null;
  const SEPARATOR = {
    type: "separator"
  }

  var shortcut = function() {
    return Array.prototype.slice.call(arguments).join("+");
  }

  var item = function(label, accelerator, selector, submenu, click) {
    var item = { label: label };
    if(accelerator) { item.accelerator = accelerator };
    if(selector) { item.selector = selector };
    if(submenu) { item.submenu = submenu };
    if(click) { item.click = click };
    return item;
  }

  var itemWithSelector = function(label, accelerator, selector) {
    return item(label, accelerator, selector, NO_SUBMENU, NO_CLICK_ACTION);
  }

  var itemWithClickAction = function(label, accelerator, click) {
    return item(label, accelerator, NO_SELECTOR, NO_SUBMENU, click);
  }

  var group = function(label, items) {
    return item(label, NO_ACCELERATOR, NO_SELECTOR, items, NO_CLICK_ACTION);
  }

  var lowbrowMenuItems = (process.platform != "darwin") ? [] : [
    itemWithSelector("About Lowbrow",
                         NO_ACCELERATOR,
                         "orderFrontStandardAboutPanel:"),
    SEPARATOR,
    itemWithSelector("Hide Lowbrow",
                         shortcut(MODIFIER, "H"),
                         "hide:"),
    itemWithSelector("Hide Others",
                         shortcut(MODIFIER, "Shift", "H"),
                         "hideOtherApplications:"),
    itemWithSelector("Show all",
                         NO_ACCELERATOR,
                         "showAll:"),
    SEPARATOR
  ];

  lowbrowMenuItems.push(itemWithClickAction("Quit",
                                                shortcut(MODIFIER, "Q"),
                                                Application.quit));

  var TEMPLATE = [
    group("Lowbrow", lowbrowMenuItems),

    group("Edit", [
      itemWithClickAction("Undo",
                              shortcut(MODIFIER, "Z"),
                              main.webContents.undo),
      itemWithClickAction("Redo",
                              shortcut(MODIFIER, "Shift", "Z"),
                              main.webContents.redo),
      SEPARATOR,
      itemWithSelector("Cut",
                           shortcut(MODIFIER, "X"),
                           main.webContents.cut),
      itemWithSelector("Copy",
                           shortcut(MODIFIER, "C"),
                           main.webContents.copy),
      itemWithSelector("Paste",
                           shortcut(MODIFIER, "V"),
                           main.webContents.paste),
      itemWithSelector("Select All",
                           shortcut(MODIFIER, "A"),
                           main.webContents.selectAll)
    ]),

    group("View", [
      itemWithClickAction("Reload",
                              shortcut(MODIFIER, "R"),
                              function(){
                                main.webContents.reload();
                              }),
      itemWithClickAction("Toggle DevTools",
                          shortcut(MODIFIER, "Alt", "I"),
                          function(item, window) {
                            window.webContents.send("lowbrow:devtools-toggle");
                          })
    ]),

    group("Window", [
      itemWithSelector("Minimize",
                           shortcut(MODIFIER, "M"),
                           "performMiniaturize:"),
      itemWithSelector("Close",
                           shortcut(MODIFIER, "W"),
                           "performClose:"),
      SEPARATOR,
      itemWithSelector("Bring All to Front",
                           NO_ACCELERATOR,
                           "arrangeInFront:")
    ]),

    group("Help", EMPTY_SUBMENU)
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(TEMPLATE));
}

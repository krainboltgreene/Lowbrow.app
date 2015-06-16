Menu.setApplicationMenu(Menu.buildFromTemplate([
  {
    label: "Lowbrow",
    submenu: [
      {
        label: "About Lowbrow",
        selector: "orderFrontStandardAboutPanel:"
      },
      {
        type: "separator"
      },
      {
        label: "Services",
        submenu: []
      },
      {
        type: "separator"
      },
      {
        label: "Hide Lowbrow",
        accelerator: "Super+H",
        selector: "hide:"
      },
      {
        label: "Hide Others",
        accelerator: "Super+Shift+H",
        selector: "hideOtherApplications:"
      },
      {
        label: "Show All",
        selector: "unhideAllApplications:"
      },
      {
        type: "separator"
      },
      {
        label: "Quit",
        accelerator: "Super+Q",
        selector: "terminate:"
      },
    ]
  },
  {
    label: "Edit",
    submenu: [
      {
        label: "Undo",
        accelerator: "Super+Z",
        selector: "undo:"
      },
      {
        label: "Redo",
        accelerator: "Shift+Super+Z",
        selector: "redo:"
      },
      {
        type: "separator"
      },
      {
        label: "Cut",
        accelerator: "Super+X",
        selector: "cut:"
      },
      {
        label: "Copy",
        accelerator: "Super+C",
        selector: "copy:"
      },
      {
        label: "Paste",
        accelerator: "Super+V",
        selector: "paste:"
      },
      {
        label: "Select All",
        accelerator: "Super+A",
        selector: "selectAll:"
      }
    ]
  },
  {
    label: "View",
    submenu: [
      {
        label: "Reload",
        accelerator: "Super+R",
        click: function() { Remote.getCurrentWindow().reload(); }
      },
      {
        label: "Toggle DevTools",
        accelerator: "Alt+Super+I",
        click: function() { Remote.getCurrentWindow().toggleDevTools(); }
      },
    ]
  },
  {
    label: "Window",
    submenu: [
      {
        label: "Minimize",
        accelerator: "Super+M",
        selector: "performMiniaturize:"
      },
      {
        label: "Close",
        accelerator: "Super+W",
        selector: "performClose:"
      },
      {
        type: "separator"
      },
      {
        label: "Bring All to Front",
        selector: "arrangeInFront:"
      }
    ]
  },
  {
    label: "Help",
    submenu: []
  }
]));

(function($) {
  $(".navbar .location button[type=submit]").click(function(event) {
    event.preventDefault();
    $(".portal .view").attr("src", $(".navbar .location input").val());
  });
})(jQuery);

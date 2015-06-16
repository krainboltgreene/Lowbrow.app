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
        accelerator: "Command+H",
        selector: "hide:"
      },
      {
        label: "Hide Others",
        accelerator: "Command+Shift+H",
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
        accelerator: "Command+Q",
        selector: "terminate:"
      },
    ]
  },
  {
    label: "Edit",
    submenu: [
      {
        label: "Undo",
        accelerator: "Command+Z",
        selector: "undo:"
      },
      {
        label: "Redo",
        accelerator: "Shift+Command+Z",
        selector: "redo:"
      },
      {
        type: "separator"
      },
      {
        label: "Cut",
        accelerator: "Command+X",
        selector: "cut:"
      },
      {
        label: "Copy",
        accelerator: "Command+C",
        selector: "copy:"
      },
      {
        label: "Paste",
        accelerator: "Command+V",
        selector: "paste:"
      },
      {
        label: "Select All",
        accelerator: "Command+A",
        selector: "selectAll:"
      }
    ]
  },
  {
    label: "View",
    submenu: [
      {
        label: "Reload",
        accelerator: "Command+R",
        click: function() { Remote.getCurrentWindow().reload(); }
      },
      {
        label: "Toggle DevTools",
        accelerator: "Alt+Command+I",
        click: function() { Remote.getCurrentWindow().toggleDevTools(); }
      },
    ]
  },
  {
    label: "Window",
    submenu: [
      {
        label: "Minimize",
        accelerator: "Command+M",
        selector: "performMiniaturize:"
      },
      {
        label: "Close",
        accelerator: "Command+W",
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
